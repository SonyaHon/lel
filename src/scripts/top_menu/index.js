import './topBar.scss';
import {CreateElement} from "../utls";
import Events from 'events';

import Tab from './Tab';
import SettingsModalWindow from './modalWindow';

class TopBar extends Events{
	constructor( props ) {
		super();
		this.el = CreateElement('div', 'top-bar');
		this.tabs = [];
		this.createTabs(props['tabs']);
		this.tabsel = CreateElement('div', 'top-bar-tabs');
		this.el.appendChild(this.tabsel);
		this.settngsIcon = CreateElement('div', 'top-bar-settings');

		this.settingsModalWindow = new SettingsModalWindow(props['modalWindowProps']);
		// TODO: insert icon here
		this.settngsIcon.addEventListener('mouseover', () => {
			this.settingsModalWindow.show();
		});

		this.el.appendChild(this.settngsIcon);
		this.tabs.forEach(tb => {
			this.tabsel.appendChild(tb.el);
		})
	}

	createTabs(tabs) {
		let width = Math.abs(100 / tabs.length);
		tabs.forEach((tb, index) => {
			this.tabs.push(new Tab({
				width,
				label: tb.label,
				idx: index
			}));
			this.tabs[index].on('selected', (idx) => {
				this.tabs.forEach(tb => {
					if(tb.idx !== idx) {
						tb.el.classList.remove('top-bar-tab-selected');
					}
				})
			});
		})
	}

}

export default TopBar;