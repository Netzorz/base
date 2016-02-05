NavBarNav = React.createClass({
  renderDropdown( item, index ) {
    let active = item.active ? 'dropdown active' : '';
    return <div data-delay="0" className="w-dropdown">
         <div className="w-dropdown-toggle nav-link">
            <div>{ item.label }</div><div className="w-icon-dropdown-toggle"></div>

         </div>
      <DropdownMenu items={ item.dropdownItems } />
    </div>;
  },
  renderItem( item, index ) {
    let active = item.active ? 'active' : '';
    return <a href={ item.href }  className='w-nav-link nav-link ${ active }'>{ item.label }</a>;
  },
  render() {
    let classes = this.props.position ? `w-nav-menu ${ this.props.position }` : 'w-nav-menu';
    return <nav role="navigation" className="w-nav-menu">
      {this.props.items.map( ( item, index ) => {
        item.active = FlowRouter.getRouteName() === item.uid;
        return item.dropdown ? this.renderDropdown( item, index ) : this.renderItem( item, index );
      })}
</nav>;
  }
});
