function CreateElement( type, classList, styles, props ) {
	let el = document.createElement(type);
	if(classList) {
		if( typeof classList === 'string' ) {
			el.classList.add( classList );
		}
		else {
			classList.forEach( cls => {
				el.classList.add( cls );
			} );
		}
	}
	if(styles) {
		Object.assign(el.style, styles);
	}
	if(props) {
		if(typeof props === 'string') {
			el.setAttribute(props, 'true');
		}
		else if (typeof props === 'object' && Array.isArray(props) === false) {
			el.setAttribute(props.name, props.value);
		}
		else {
			props.forEach(prop => {
				el.setAttribute(prop.name, prop.value);
			});
		}
	}
	return el;
}

export {
	CreateElement
}