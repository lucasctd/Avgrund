import Fathom from './fathom.js';

const app = new Fathom('#myModal', document.getElementById('ignore'), [
    document.getElementById('bla')
]).on('show', () => {
    console.log(`abrindo a modal`);
}).on('hide', () => {
    console.log(`fechando a modal`);
});
const app2 = new Fathom('#otherModal');

document.getElementById('bt-show').addEventListener('click', () => {
   app.show();
});

document.getElementById('bt-hide').addEventListener('click', () => {
    app.hide();
});

document.getElementById('bt-show-otherModal').addEventListener('click', () => {
    app2.show();
});

document.getElementById('bt-hide-otherModal').addEventListener('click', () => {
    app2.hide();
});