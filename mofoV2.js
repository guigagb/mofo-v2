export default (function() {
// let mofo = (function () {

    let timeExecAfter = {};
    let dialogs = {
        dialogsOpen: {},
        execAfter: {},
        keyEsc: {},
        keyDown: {}
    };

    function countIsOpen() {
        return Object.keys(dialogs.dialogsOpen).length;
    }

    function execAfterFunc(buttons, id) {

        let exec = dialogs.execAfter[id];
        let text = buttons[exec.btn].innerText
        let time = exec.time

        timeExecAfter[id] = {
            stop: setInterval(function () {
                time--;
                buttons[exec.btn].innerHTML = `${text} <span style="color:#ffffff94"> (${time})</span>`;
                if (time <= 0) {
                    buttons[exec.btn].innerText = text;
                    buttons[exec.btn].click();
                    clearInterval(timeExecAfter[id].stop);
                }
            }, 1000),
            text: text,
            btn: buttons[exec.btn]
        };
    }

    function execAfterStop(id) {
        clearInterval(timeExecAfter[id].stop);
        timeExecAfter[id].btn.innerHTML = timeExecAfter[id].text;
    }

    (function onKeyDown() {
        document.addEventListener('keydown', (e) => {

            if (Object.keys(dialogs.dialogsOpen).length > 0) {
                let id =
                    dialogs.dialogsOpen[
                        Object.keys(dialogs.dialogsOpen)[
                        Object.keys(dialogs.dialogsOpen).length - 1
                        ]
                    ].id;
                if (e.keyCode === 27) {
                    if (dialogs.keyEsc[id]) {

                        // if (arg.modal)
                        if (document.getElementById(id + '_Modal'))
                            document.getElementById(id + '_Modal').remove()


                        document.getElementById(id).style.display = 'none'
                        document.getElementById(id).style.borderBottom

                        if (dialogs.execAfter[id])
                            execAfterStop(id);

                        delete dialogs.dialogsOpen[id];
                        if (Object.keys(dialogs.dialogsOpen).length === 0)
                            document.body.style.overflow = 'auto'

                        //  hashMofoModal = false;
                        // window.location.hash = "";
                    }
                    return false;
                }

                let ctrlKey = e.ctrlKey ? "CTRL+" : "";
                let shiftKey = e.shiftKey ? "SHIFT+" : "";
                let altKey = e.altKey ? "ALT+" : "";
                let key = ctrlKey + shiftKey + altKey + e.keyCode;

                if (dialogs.keyDown[id])
                    try {
                        if (dialogs.keyDown[id][key]) {
                            dialogs.keyDown[id][key].call();
                            if (e.preventDefault)
                                e.preventDefault();
                            if (e.stopPropagation)
                                e.stopPropagation();
                            return false;
                        }
                    } catch (e) {
                        return false;
                    }
            }
        })
    })()


    function dragEl(elem) {
        let offset = null;

        function outerElent(el) {

            let s = window.getComputedStyle(el);
            let outer = {
                width: el.clientWidth +
                    parseInt(s.getPropertyValue('margin-left')) +
                    parseInt(s.getPropertyValue('margin-right')) +
                    parseInt(s.getPropertyValue('border-left')) +
                    parseInt(s.getPropertyValue('border-right')),
                height: el.offsetHeight +
                    parseInt(s.getPropertyValue('margin-bottom')) +
                    parseInt(s.getPropertyValue('margin-top'))
            }
            return outer
        }

        if (document.getElementById(elem.id).querySelector('.mofo-modal-head'))
            document.getElementById(elem.id).querySelector('.mofo-modal-head').addEventListener('mousedown', mouseDown);

        if (document.getElementById(elem.id).querySelector('.mofo-modal-head'))
            document.getElementById(elem.id).querySelector('.mofo-modal-head').addEventListener('touchstart', touchstart);

        function mouseDown(e) {
            let outer = outerElent(elem)
            offset = {
                x: e.pageX - elem.offsetLeft,
                y: e.pageY - elem.offsetTop,
                w: window.innerWidth - (outer.width),
                h: window.innerHeight - (outer.height)
            };
            document.addEventListener('mouseup', mouseUp);
            document.addEventListener('mousemove', mouseMove);
        }

        function mouseMove(e) {

            e.preventDefault();
            let top = e.pageY - offset.y;
            let left = e.pageX - offset.x;
            if (offset.h > top)
                elem.style.top = top > 0 ? `${top}px` : 0
            if (offset.w > left)
                elem.style.left = left > 0 ? `${left}px` : 0
        }

        function mouseUp() {
            document.removeEventListener('mouseup', mouseUp);
            document.removeEventListener('mousemove', mouseMove);
        }

        function touchstart(e) {
            offset = {
                x: e.changedTouches[0].pageX - elem.offsetLeft,
                y: e.changedTouches[0].pageY - elem.offsetTop
            };

            document.addEventListener('touchend',touchend);
            document.addEventListener('touchmove',touchmove);
        }

        function touchmove(e) {
            let outer = outerElent(elem)
            let ww = window.innerWidth - (outer.width)
            let hh = window.innerHeight - (outer.height)
            let top = e.changedTouches[0].pageY - offset.y;
            let left = (e.changedTouches[0].pageX - offset.x);
            if (hh > top)
                elem.style.top = top > 0 ? top : 0
            if (ww > left)
                elem.style.left = left > 0 ? left : 0
        }

        function touchend() {
            document.removeEventListener('touchend',touchend);
            document.removeEventListener('touchmove',touchmove);
        }

    }


    function create(params) {

        let ax = {
            header: '',
            footer: '',
            textHeader: '',
            btnClose: '',
            element: '',
            main: '',
            idElement: '',
            eventoOpen: {},
            eventoClose: {},
            btnsFooter: {},
            setMain(arg) {

                this.element = document.querySelector(arg.el);
                let id = this.element.id;
                this.element.classList.add("mofo-modal-content");
                this.element.removeAttribute('id');
                this.element.style.display = '';

                this.main = document.createElement("div")
                this.main.classList.add('mofo-modal-main')
                this.main.classList.add(arg.theme);
                this.main.setAttribute('id', id)
                this.main.setAttribute('modal', arg.modal)
                this.main.style.height = `${arg.height}px`;
                this.main.style.left = `calc(50% - ${arg.width / 2}px)`
                this.main.style.width = `${arg.width}px`;
                this.main.style.top = `calc(50% - ${arg.height / 2}px)`
                this.main.style.display = 'none';
                this.main.style.resize = arg.resize ? "both" : ""
                this.main.style.overflow = arg.resize ? "auto" : ""
                this.element.parentNode.insertBefore(this.main, this.element);
                //document.body.appendChild(this.main);
                this.idElement = id;
            },
            appendMain() {
                this.main.appendChild(this.element);
                this.element = this.main;
            },
            setHeader() {
                this.header = document.createElement('div')
                this.header.classList.add('mofo-modal-head')
            },
            setTextHeader(title) {
                this.textHeader = document.createElement('div')
                this.textHeader.innerHTML = title
                this.header.appendChild(this.textHeader);
            },
            setFooter() {
                this.footer = document.createElement('div');
                this.footer.classList.add("mofo-modal-foot")

            },
            setBtnFooter(buttons) {
                for (let i in buttons) {
                    let btn = document.createElement('button');
                    btn.innerHTML = buttons[i].html
                    if (buttons[i].class)
                        btn.classList.add(buttons[i].class)
                    btn.classList.add("mofo-button-new")
                    btn.addEventListener('click', buttons[i].click)

                    this.btnsFooter[i] = btn
                    this.footer.appendChild(btn)
                }

                if (Object.keys(buttons).length > 0)
                    this.element.appendChild(this.footer)

            },
            setBtnClose() {
                this.btnClose = document.createElement('button')
                this.btnClose.classList.add('mofo-button-new')
                this.btnClose.classList.add('Close' + this.idElement)
                this.btnClose.innerHTML = 'X'
            },
            setKeyDown(idElement, keyDown) {
                let keys = {}
                for (let i in keyDown) {
                    keys[String(keyDown[i].key).toUpperCase()] = { call: keyDown[i].call };
                    dialogs.keyDown[idElement] = keys
                }
            },
            close(id) {
                this.element.style.display = 'none'

                if (arg.modal)
                    document.getElementById(this.idElement + '_Modal').remove()


                if (this.eventoClose[id])
                    this.eventoClose[id]();

                if (dialogs.execAfter[id])
                    execAfterStop(id);

                delete dialogs.dialogsOpen[id];
                if (Object.keys(dialogs.dialogsOpen).length === 0)
                    document.body.style.overflow = 'auto'
            },
            open() {
                if (!(this.idElement in dialogs.dialogsOpen)) {
                    dialogs.dialogsOpen[this.idElement] = { id: this.idElement };
                    var zindex = Object.keys(dialogs.dialogsOpen).length + 998;
                    this.element.style.zIndex = zindex + 1;
                    document.body.style.overflow = 'hidden'


                    if (arg.modal) {
                        let overlay = document.createElement("div")
                        overlay.classList.add('mofo-widget-overlay')
                        overlay.classList.add(arg.theme)
                        overlay.style.zIndex = zindex
                        overlay.setAttribute('id', this.idElement + '_Modal')
                        document.body.appendChild(overlay)
                    }

                    this.element.style.display = '';

                    if (this.idElement in this.eventoOpen)
                        this.eventoOpen[this.idElement]();

                    if (this.idElement in dialogs.execAfter)
                        execAfterFunc(this.btnsFooter, this.idElement);
                }
            },
            fullScreen() {
                this.element.style.width = '100%';
                this.element.style.height = '100%';
                this.element.style.top = 15;
                this.element.style.left = 0;
                this.element.style.borderRadius = 0
                this.element.style.maxHeight = 'none'
                this.element.style.maxWidth = 'none'
            },
            destroy() {

                delete this.eventoClose[this.idElement];
                delete this.eventoOpen[this.idElement];
                delete dialogs.keyDown[this.idElement];
                delete dialogs.keyEsc[this.idElement];

                this.element.removeAttribute('class')
                this.element.removeAttribute('modal')
                this.element.removeAttribute('style')
                this.element.style.display = 'none'

                this.element.querySelector('.mofo-modal-head').remove()
                this.element.querySelector('.mofo-modal-foot').remove()
                this.element.querySelector('.mofo-modal-content').removeAttribute('class')
                if (arg.modal) {
                    document.getElementById(this.idElement + '_Modal').remove()
                    document.body.style.overflow = 'auto'
                }
            },
        }

        let argDefalt = {
            title: "&nbspMensagem do Sistema",
            buttons: {},
            close: {},
            open: {},
            resize: false,
            openOnce: false,
            theme: "mofo-blue",
            width: (window.innerWidth - window.innerWidth * 25 / 100),
            height: (window.innerHeight - window.innerHeight * 25 / 100),
            left: 0,
            top: 0,
            fullScreen: false,
            closeBtn: true,
            hash: false,
            execAfter: {},
            esc: true,
            modal: true,
            noTitleDisplay: false,
            keyDown: {},
            mouseup: false,
            mousedown: false,
            mousemove: false
        };

        let arg = Object.assign(argDefalt, params);

        ax.setMain(arg)

        ax.setHeader()
        ax.setTextHeader(arg.title)
        ax.setBtnClose()

        dialogs.keyEsc[ax.idElement] = arg.closeBtn;

        dialogs.keyEsc[ax.idElement] = arg.esc

        if (!arg.noTitleDisplay)
            ax.main.appendChild(ax.header)

        ax.appendMain()

        ax.setFooter();
        ax.setBtnFooter(arg.buttons)

        ax.setKeyDown(ax.idElement, arg.keyDown)


        if (arg.open.length !== undefined)
            ax.eventoOpen[ax.idElement] = arg.open;


        if (arg.close.length !== undefined)
            ax.eventoClose[ax.idElement] = arg.close;


        if (arg.closeBtn) {
            ax.header.appendChild(ax.btnClose)
            ax.element.querySelector(".Close" + ax.idElement).addEventListener('click', () => ax.close(ax.idElement))
        }

        if (arg.fullScreen)
            ax.fullScreen()

        if (arg.top != '0')
            ax.element.style.top = arg.top

        if (arg.left != "0")
            ax.element.style.left = arg.left;

        if (arg.openOnce)
            arg.openOnce()

        if (Object.keys(arg.execAfter).length > 0)
            dialogs.execAfter[ax.idElement] = arg.execAfter;


        this.focus = (nameBtn) => ax.btnsFooter[nameBtn].focus()

        this.disable = (nameBtn) => ax.btnsFooter[nameBtn].disabled = true

        this.enable = (nameBtn) => ax.btnsFooter[nameBtn].disabled = false

        this.clickBtn = (nameBtn) => ax.btnsFooter[nameBtn].click()

        this.setTitle = (title) => ax.textHeader.innerHTML = title

        this.btnFooter = (nameBtn) => ax.btnsFooter[nameBtn]

        this.destroy = () => ax.destroy()

        this.open = () => ax.open()

        this.close = () => ax.close(ax.idElement)

        dragEl(ax.element);
    }

    return {
        create: create,
        dialogs: dialogs,
        countIsOpen: countIsOpen
    }
})()