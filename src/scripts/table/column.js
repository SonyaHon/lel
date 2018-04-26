class Column {
	constructor(props) {
		this.name = props['name'] || 'New Column';
		this.tasks = props['tasks'] || [];
	}
}

export default Column;