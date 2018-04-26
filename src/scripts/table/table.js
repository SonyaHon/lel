/*
	Class representing a table:
		users connected to this table,
		name of the table
 */


class Table {
	constructor(props) {

		this.name = props['name'] || 'New Table';
		this.columns = props['columns'] || [];

	}
}