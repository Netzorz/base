AuthenticatedNavigation = React.createClass({
  mixins: [ ReactMeteorData ],
  getMeteorData() {
    let userEmail = Meteor.user().emails[0].address;

    return {
      items: {
        left: [
          { uid: 'index', href: '/', label: 'Rapportera avvikelse' },
          { uid: 'dashboard', href: '/user', label: 'Din sida' },
          {
            uid: 'currentUser',
            href: '#',
            label: 'Netzorz AB',
            dropdown: true,
            dropdownItems: [
              { uid: 'usergroups', href: '#', label: 'Användare & grupper' }
            ]
         },
         { uid: 'logout', href: '#', label: 'Logga ut', action: () => {
            return Meteor.logout( () => {
             FlowRouter.go( '/login' );
            });
         }}
       ]
      }
    };
  },
  render() {
    return <div className="authenticated-navigation">
      <NavBarNav items={ this.data.items.left } />
    </div>;
  }
});
