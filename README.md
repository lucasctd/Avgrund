# Fathom Modal

A modal concept which aims to give a sense of depth between the page and modal layers.
This package was made based on 
<a href="https://github.com/hakimel/avgrund" target="_blank">avgrund</a>. I have rewritten
it using ES6 standart and also using
<a href="http://stylus-lang.com/" target="_blank">Stylus</a>.

### How to:

#### Install
Yarn: yarn add fathom-modal

NPM: npm i fathom-modal --save

#### Use
```javascript
import Fathom from 'fathon-modal';
const app = new Fathom('#element'); //you can also pass an HTMLElement
//to show the modal
app.show();
//to hide the modal
app.hide();
//to destroy
app.destroy(); //there is no need to call app.hide()
//to disable the blur effect just call app.blur = false before app.show()
```

#### Listen to Events
```javascript
app.on('hide', () => {console.log('hide')}); //when you click on the cover, the modal will hide, so this event is very usefull on this case
app.on('show', () => {console.log('show')});
app.on('destroy', () => {console.log('destroy')});
```
#### Customize

You can override .fm-cover or .fm-document classes to customize the cover and document
background colors for example.

#### Preview

It's a website I am working on which is using fathom-modal.
![preview gif](https://i.ibb.co/wWs8xnz/fathom-modal.gif)
