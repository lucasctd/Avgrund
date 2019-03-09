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
export default class FathomModal {
	
	constructor(el){
		this.documentElement = document.documentElement;
		this.el = el instanceof HTMLElement ? el : this.documentElement.querySelector(el);
		this.blur = true;
		this.addEventListenters();
		this.createCoverElement();
	}
	
	createCoverElement() {
		this.cover = document.createElement('div');
		this.cover.setAttribute('id', '_' + Math.random());
		this.cover.classList.add('fm-cover');
		this.el.parentNode.insertBefore(this.cover, this.el.nextSibling);
	}
	
	addEventListenters() {
		
		/* Close on ESC */
		this.documentElement.addEventListener('keydown', this.closeOnEsc.bind(this), false);
		
		/* Close on clicking anywhere else than the dialog */
		this.documentElement.addEventListener('click', this.closeOnCoverClick.bind(this), false);
		this.documentElement.addEventListener('touchstart', this.closeOnCoverClick.bind(this), false);
	}
	
	closeOnEsc(e) {
		if(e.keyCode === 27) {
			this.hide();
		}
	}
	
	closeOnCoverClick(e) {
		if(e.target === this.cover) {
			this.hide();
		}
	}
	
	show() {
		if(!this.blur) {
			this.documentElement.documentElement.classList.add('no-blur');
		}
		this.el.classList.add( 'fm-el-active' );
		this.documentElement.classList.add( 'fm-active' );
	}
	
	hide() {
		this.documentElement.classList.remove( 'avgrund-active' );
		this.el.classList.remove( 'avgrund-popup-animate' );
	}
	
	destroy() {
		this.documentElement.removeEventListener( 'keydown', this.closeOnEsc, false);
		this.documentElement.removeEventListener( 'click', this.closeOnCoverClick, false);
		this.documentElement.removeEventListener( 'touchstart', this.closeOnCoverClick, false);
		this.cover.remove();
	}
}
