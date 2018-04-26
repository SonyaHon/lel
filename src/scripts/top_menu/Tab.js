import {CreateElement} from "../utls";
import Events from 'events';

class Tab extends Events{
	constructor( props ) {
		super();
		this.idx = props['idx'];
		this.el = CreateElement('span', 'top-bar-tab', {
			width: props['width'] + '%'
		});
		this.el.innerText = props['label'];
		this.el.addEventListener('click', () => {
			this.el.classList.add('top-bar-tab-selected');
			this.emit('selected', this.idx);
			if(props['clb']) {
				props['clb']();
			}
		});
	}
}

export default Tab;