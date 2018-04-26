import './global.scss';
const root = document.getElementById("root");

import TopBar from './top_menu/index';

const menu = new TopBar({
	tabs: [
		{
			label: 'test1'
		},
		{
			label: 'test2'
		}
	]
});

root.appendChild(menu.el);