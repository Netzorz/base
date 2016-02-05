let startup = () => {
  _setEnvironmentVariables();
  _setBrowserPolicies();
  _generateAccounts();
  BrowserPolicy.content.allowOriginForAll( '*.typekit.net' );
BrowserPolicy.content.allowFontDataUrl( '*.typekit.net' );
};

var _setEnvironmentVariables = () => Modules.server.setEnvironmentVariables();

var _setBrowserPolicies = () => {};

var _generateAccounts = () => Modules.server.generateAccounts();

Modules.server.startup = startup;
