import Fathom from './fathom.js';

const app = new Fathom('#modal')
    .on('show', () => {
            console.log(`opening modal`);
        }
    ).on('hide', () => {
            console.log(`closing modal`);
        }
    );
document.getElementById('bt-show').addEventListener('click', () => {
   app.show();
});

document.getElementById('bt-hide').addEventListener('click', () => {
    app.hide();
});