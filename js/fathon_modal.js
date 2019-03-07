/**
 * avgrund 0.1
 * http://lab.hakim.se/avgrund
 * MIT licensed
 *
 * Copyright (C) 2018 Hakim El Hattab, http://hakim.se
 */
 
/**
 * This package was first created by Hakim El Hattab. Just have update to add more features and make it as a NPM package.
 *
 * @class FathomModal
 * @author Lucas Reis <lucas@programmer.com.br>
*/ 
class FathomModal {
	
	constructor(el){
		this.documentElement = document.documentElement;
		this.documentElement.classList.add('avgrund-ready');		
		this.el = el instanceof HTMLElement ? el : this.documentElement.querySelector(el);
		this.blur = true;
		this.addEventListenters();
		this.createCoverElement();
	}
	
	createCoverElement() {
		this.cover = document.createElement('div');
		this.cover.setAttribute('id', '_' + Math.random());
		this.cover.classList.add('avgrund-cover');
		this.el.parentNode.insertBefore(this.cover, this.el.nextSibling);
	}
	
	addEventListenters() {
		
		/* Close on ESC */
		this.documentElement.addEventListener('keyup', function(e) {
			if(e.keyCode === 27) {
				this.hide();
			}
		}.bind(this), false);
		
		/* Close on clicking anywhere else than the dialog */
		this.documentElement.addEventListener('click', function(e) {
			if(e.target === this.cover) {
				this.hide();
			}
		}.bind(this), false);
	}
	
	show() {
		if(!this.blur) {
			this.documentElement.documentElement.classList.add( 'no-blur' );
		}
		this.el.classList.add( 'avgrund-popup-animate' );
		this.documentElement.classList.add( 'avgrund-active' );
	}
	
	hide() {
		this.documentElement.classList.remove( 'avgrund-active' );
		this.el.classList.remove( 'avgrund-popup-animate' );
	}
	
	destroy() {
		this.documentElement.removeEventListener( 'keyup', onDocumentKeyUp, false );
		this.documentElement.removeEventListener( 'click', onDocumentClick, false );
		this.documentElement.removeEventListener( 'touchstart', onDocumentClick, false );
		window.body.remove(this.cover);
	}
}
