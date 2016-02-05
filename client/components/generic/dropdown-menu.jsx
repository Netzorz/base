DropdownMenu = React.createClass({
  renderDivider() {
    return <li role="separator" className="divider"></li>;
  },
  renderItem( item, index ) {
    let active = item.active ? 'active' : '';
    return <a  className="w-dropdown-link dropdown-link ${ active }" onClick={ item.action } href={ item.href }>{ item.label }</a>;
  },
  render() {
    return <nav className="w-dropdown-list">
      {this.props.items.map( ( item, index ) => {
        return item.divider ? this.renderDivider( item, index ) : this.renderItem( item, index );
      })}
   </nav>;
  }
});
