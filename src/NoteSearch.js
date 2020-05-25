const NoteSearch = React.createClass({
    render() {
        return (
            <input className="noteSearch" type="search" placeholder="Search..." onChange={this.props.onSearch} />
        );
    }
});