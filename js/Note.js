var Note = React.createClass({
	edit: function() {
		alert('editing note');
	},
	remove: function() {
		alert('removing note');
	},
	
    render: function() {
       return (
		<div className="note">
			<span>
				<button onClick={this.edit}
					className="btn btn-primary glyphicon glyphicon-pencil" />
				<button onClick={this.edit}
					className="btn btn-primary glyphicon glyphicon-edit" />
			</span>
		</div>
	);
}
});

React.render(<Note>Hello World</Note>, 
    document.getElementById('react-container'));
