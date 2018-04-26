import { CreateElement } from "../utls";
import Events from 'events';

import Item from './modalWindowItem';

class SettingsModalWindow extends Events{
	constructor(props) {
		super();
		this.el = CreateElement('div', 'top-bar-settings-wrapper');
		this.el1 = CreateElement('div', 'top-bar-settings-modal');
		this.el2 = CreateElement('div', 'top-bar-settings-modal-icon-trans');
		document.body.appendChild(this.el);
		this.el.addEventListener('mouseleave', () => {
			this.hide();
		});
		this.el.appendChild(this.el1);
		this.el.appendChild(this.el2);
		this.items = [];
		this.createItems(props['items']);
	}

	createItems(items) {
		items.forEach((item, index) => {
			this.items.push(new Item({
				idx: index,
				item
			}));
			this.items[index].on('clicked', (idx) => {
				this.emit('clickedOn', this.items[idx]);
			})
		});
	}

	show() {
		this.el.style.right = 0;
	}

	hide() {
		let w = this.el1.clientWidth;
		this.el.style.right = -w + 'px';
	}
}

export default SettingsModalWindow;