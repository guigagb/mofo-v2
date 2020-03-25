import mofo from './mofoV2.js';

var minhaDiv = new mofo.create({
    el: '#minhaDiv',
    height: 200,
    width: 400
})

minhaDiv.open();
// minhaDiv2.open();
console.log(mofo.countIsOpen());
console.log(mofo.dialogs);