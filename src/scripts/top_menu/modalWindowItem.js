import { CreateElement } from "../utls";
import Events from 'events';

class ModalWindowItem extends Events{
	constructor(props) {
		super();

		this.el = CreateElement('div', 'top-bar-settings-modal-item');
		this.el.innerText = props['item']['label'];
		this.idx = props['idx'];
		this.el.addEventListener('click', () => {
			this.emit('clicked', this.idx);
		})

	}
}

export default ModalWindowItem;