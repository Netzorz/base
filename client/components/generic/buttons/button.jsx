Button = React.createClass({
  render() {
    if ( this.props.href ) {
      return <a href={ this.props.href } className={ `w-button button-default button-${ this.props.style } ${ this.props.extraClass }` }>
        { this.props.label }
      </a>;
    } else {
      return <button type={ this.props.type } className={ `w-button button-default button-${ this.props.style } ${ this.props.extraClass }` }>
        { this.props.label }
      </button>;
    }
  }
});
