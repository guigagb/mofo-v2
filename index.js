import mofo from './mofoV2.js';

const minhaDiv = new mofo.create({
    el: '#minhaDiv',
    height: 200,
    width: 400,
    theme: 'mofo-dark-square',
    closeBtn: false,
    titleDisplay: true,
    // modal:false,
    execAfter: {
        time: 10,
        btn: 'btn1'
    },
    onOpen: (params) => {
        // console.log('oiiii');
    },
    buttons: {
        btn1: {
            html: 'Confirma',
            class: 'left',
            click: (e)=>{}
        }
    },
    // onKeyDown: {
    //     'ctrl+SHIFT+Alt+13': (e) => {
    //         console.log('oiiiiii');
    //     },
    //     112: (e) => {
    //         console.log('abc');
    //     }
    // }
})

minhaDiv.open();

function openModal() {
    console.log(mofo.countIsOpen());
    console.log(mofo.dialogs);
}

window.openModal = openModal;