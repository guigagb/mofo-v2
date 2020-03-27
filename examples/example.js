import mofo from '../mofoV2.js';

const exemplo1 = new mofo.create({
    el: '#exemplo1',
    height: '500',
    resize: true,
    theme: 'mofo-dark-square',
    execAfter: {
        time: 10,
        btn: 'confirma'
    },
    buttons: {
        confirma: {
            html: 'Confirma',
            click: () => {}
        }
    }
});

const exemplo2 = new mofo.create({
    el: '#exemplo2',
    title: 'Exemplo 2',
    width: 400,
    height: 200
});

const exemplo3 = new mofo.create({
    el: '#exemplo3',
    title: 'Exemplo 3',
    left: 80,
    top: 500
});

const exemplo4 = new mofo.create({
    el: '#exemplo4',
    title: 'Exemplo 4',
    closeBtn: false
});

const exemplo5 = new mofo.create({
    el: '#exemplo5',
    title: 'Exemplo 5',
    fullScreen: true
});

const exemplo6 = new mofo.create({
    el: '#exemplo6',
    title: 'Exemplo 6',
    theme: 'mofo-dark'
});

const exemplo7 = new mofo.create({
    el: '#exemplo7',
    title: 'Exemplo 7',
    buttons: {
        cancelar: {
            html: 'Cancelar',
            class: 'left',
            click: () => {
                exemplo7.close();
            }
        },
        confirmar: {
            html: 'Confirmar',
            class: 'right',
            click: () => {
                alert('Botão confirmar pressionado!');
            }
        }
    }
});

const exemplo8 = new mofo.create({
    el: '#exemplo8',
    title: 'Exemplo 8',
    onOpen: () => {
        alert('Abrindo janela!');
    },
    onClose: () => {
        alert('Fechando janela!');
    }
});

const exemplo9 = new mofo.create({
    el: '#exemplo9',
    title: 'Exemplo 9',
    execAfter: {
        time: 15,
        btn: 'fechar'
    },
    buttons: {
        teste: {
            html: 'teste',
            click: () => {}
        },
        fechar: {
            html: 'Fechar',
            click: () => {
                exemplo9.close();
            }
        }
    }
});

const exemplo10 = new mofo.create({
    el: '#exemplo10',
    title: 'Exemplo 10',
    onKeyDown: {
        '13': (e) => { alert('Enter pressionado!') },
        'ctrl+13': (e) => { alert('ctrl + enter pressionado!') },
        'ctrl+shift+13': (e) => { alert('ctrl + shift + Enter pressionado!') },
        'ctrl+shift+alt+13': (e) => { alert('ctrl + shift + alt + Enter pressionado!') },
    }
});

function openExemplo1() {
    exemplo1.open();
}

function openExemplo2() {
    exemplo2.open();
}

function openExemplo3() {
    exemplo3.open();
}

function openExemplo4() {
    exemplo4.open();
}

function openExemplo5() {
    exemplo5.open();
}

function openExemplo6() {
    exemplo6.open();
}

function openExemplo7() {
    exemplo7.open();
}

function openExemplo8() {
    exemplo8.open();
}

function openExemplo9() {
    exemplo9.open();
}

function openExemplo10() {
    exemplo10.open();
}

window.openExemplo1 = openExemplo1;
window.openExemplo2 = openExemplo2;
window.openExemplo3 = openExemplo3;
window.openExemplo4 = openExemplo4;
window.openExemplo5 = openExemplo5;
window.openExemplo6 = openExemplo6;
window.openExemplo7 = openExemplo7;
window.openExemplo8 = openExemplo8;
window.openExemplo9 = openExemplo9;
window.openExemplo10 = openExemplo10;
window.mofo = mofo;