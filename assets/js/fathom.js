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
		this.documentElement.classList.add('fm-document');
		this.el = el instanceof HTMLElement ? el : this.documentElement.querySelector(el);
		this.el.classList.add('fm-el');
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
		if(e.key.toLowerCase() === 'escape') {
			this.hide();
		}
	}
	
	closeOnCoverClick(e) {
		if(e.target === this.cover) {
			this.hide();
		}
	}
	
	show() {
		this.centralize();
		setTimeout(() => {
			this.el.classList.add( 'fm-el-active' );
			this.documentElement.classList.add( 'fm-document-active' );
			this.cover.classList.add('fm-cover-active');
			if(this.blur) {
				this.toggleObfuscation();
			}
		}, 100);
	}

	centralize() {
		this.el.style.marginLeft = `-${this.el.offsetWidth / 2}px`;
		this.el.style.marginTop = `-${this.el.offsetHeight / 2}px`;
	}

	toggleObfuscation() {
		const children = document.body.children;
		for(let x = 0; x < children.length; x++) {
			if(children[x] !== this.el && !(children[x] instanceof HTMLScriptElement) && !(children[x] instanceof HTMLLinkElement)) {
				children[x].classList.toggle('fm-blur');
			}
		}
	}
	
	hide() {
		if(this.blur) {
			this.toggleObfuscation();
		}
		this.documentElement.classList.remove( 'fm-document-active' );
		this.el.classList.remove( 'fm-el-active' );
		this.cover.classList.remove( 'fm-cover-active' );
	}
	
	destroy() {
		this.hide();
		this.documentElement.removeEventListener( 'keydown', this.closeOnEsc, false);
		this.documentElement.removeEventListener( 'click', this.closeOnCoverClick, false);
		this.documentElement.removeEventListener( 'touchstart', this.closeOnCoverClick, false);
		this.cover.remove();
	}
}
