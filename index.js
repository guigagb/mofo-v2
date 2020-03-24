import mofo from './mofoV2.js';

var minhaDiv = new mofo.create({
    el: '#minhaDiv'
})

var minhaDiv2 = new mofo.create({
    el: '#minhaDiv2'
})

minhaDiv.open();
// minhaDiv2.open();
console.log(mofo.countIsOpen());
console.log(mofo.dialogs);