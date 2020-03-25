import mofo from './mofoV2.js';

const minhaDiv = new mofo.create({
    el: '#minhaDiv',
    height: 200,
    width: 400,
    theme: 'mofo-dark-square',
    closeBtn: false,
    titleDisplay: true,
    modal:false,
    onKeyDown: {
        13: (e) => { console.log('você apertou enter') },
        32: (e) => { console.log('você apertou espaço') },
        'CTRL+13': (e) => { console.log('você apertou ctrl + enter') }
    },
    mouseDown: function () {
        console.log('oi');
    },
    onOpen: (params) => {
        // console.log('oiiii');
    },
    buttons: {
        btn1: {
            html: 'Confirma',
            class: 'left',
            click: (e) => { console.log('oi');}
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
    minhaDiv.setTitle('btn1');
}

window.openModal = openModal;