import mofo from './mofoV2.js';

const minhaDiv = new mofo.create({
    el: '#minhaDiv',
    height: 200,
    width: 400,
    theme: 'mofo-dark-square',
    execAfter: {
        time: 10,
        btn: 'confirma'
    },
    onOpen: (params) => {
        // console.log('oiiii');
    },
    buttons: {
        confirma: {
            html: 'Confirma',
            click: (e) => {
                console.log(e);
            }
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