AppHeader = React.createClass({
  mixins: [ ReactMeteorData ],
  getMeteorData() {
    return {
      brandLink: !!Meteor.user() ? '/' : '/login',
      user: Meteor.user()
    };
  },
  render() {
    return <div data-collapse="medium" data-animation="default" data-duration="400" data-contain="1" className="w-nav navbar">
      <div className="w-container">
         <a href="#" className="w-nav-brand w-clearfix">
            <img width="130" src="images/avr_logo.png" className="right-logo" />
         </a>
      { this.props.hasUser ? <AuthenticatedNavigation user={ this.data.user } /> : <PublicNavigation /> }
         <div className="w-nav-button menu-button">
            <div className="w-icon-nav-menu"></div>
         </div>
      </div>
   </div>;
  }
});
