FormControl = React.createClass({
  renderLabel() {
    if ( !this.props.labelLink ) {
      return <label htmlFor={ this.props.name }>
        { this.props.label }
      </label>;
    } else {
      return <label htmlFor={ this.props.name }>
        <label className="pull-left">{ this.props.label }</label>
        <a className="pull-right" href={ this.props.labelLink.href }>
          { this.props.labelLink.label }
        </a>
      </label>;
    }
  },
  renderFormControl() {
    let fields = {
      input: <input
        ref={ this.props.ref }
        type={ this.props.type }
        className="w-input"
        name={ this.props.name }
        placeholder={ this.props.label }
      />,
      textarea: <textarea
        ref={ this.props.ref }
        name={ this.props.name }
        className="w-input"
        placeholder={ this.props.label }
      ></textarea>
    };

    return fields[ this.props.style ];
  },
  render() {
    return <div className="input">
      { this.props.showLabel ? this.renderLabel() : '' }
      { this.renderFormControl() }
    </div>;
  }
});
