Login = React.createClass({
  validations() {
    let component = this;

    return {
      rules: {
        emailAddress: {
          required: true,
          email: true
        },
        password: {
          required: true
        }
      },
      messages: {
        emailAddress: {
          required: 'Du måste fylla i din e-postadress',
          email: 'Du måste fylla i ditt lösenord'
        },
        password: {
          required: 'Need a password here.'
        }
      },
      submitHandler() {
        let { getValue } = ReactHelpers;

        let form     = component.refs.loginForm.refs.form,
            email    = getValue( form, '[name="emailAddress"]' ),
            password = getValue( form, '[name="password"]' );

        Meteor.loginWithPassword( email, password, ( error ) => {
          if ( error ) {
            Bert.alert( error.reason, 'danger' );
          } else {
            Bert.alert( 'Logged in!', 'success' );
          }
        });
      }
    };
  },
  handleSubmit( event ) {
    event.preventDefault();
  },
  render() {
    let passwordLabelLink = {
      href: '/recover-password',
      label: 'Glömt lösenord?'
    };

    return <div className="w-section">
        <div className="w-container login-container">
           <div className="w-clearfix login-box"><img width="130" src="images/avr_logo.png" className="right-logo" />
             <div className="w-clearfix login-form">
               <div className="w-form">
                  <Form ref="loginForm" id="login" className="login" validations={ this.validations() } onSubmit={ this.handleSubmit }>
                  <EmailInput ref="emailAddress" showLabel={ true } />
                  <PasswordInput ref="password" showLabel={ true } />
                  <Button type="submit" label="Logga in" extraClass="_100" />
                  </Form>
                  <br />
                  <div className="right-thing">
                     <a href={ passwordLabelLink.href } >{ passwordLabelLink.label } </a>
                     </div>
               </div>
           </div>
         </div>
       </div>
    </div>

  }
});
