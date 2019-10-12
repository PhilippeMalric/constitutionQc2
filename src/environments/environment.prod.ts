import{apiKey} from "../../apikey"

const packageJson = require('../../package.json');

export const environment = {
  appName: 'Liste de lecture',
  envName: 'PROD',
  production: true,
  test: false,
  i18nPrefix: '',
  firebaseConfig: {
    apiKey: apiKey,
    authDomain: "constitution-quebec.firebaseapp.com",
    databaseURL: "https://constitution-quebec.firebaseio.com",
    projectId: "constitution-quebec",
    storageBucket: "",
    messagingSenderId: "525479138806",
    appId: "1:525479138806:web:cc2f0d2d329a9ff48ce3d7",
    measurementId: "G-030K8MEF4W"
  },
  versions: {
    app: packageJson.version,
    angular: packageJson.dependencies['@angular/core'],
    ngrx: packageJson.dependencies['@ngrx/store'],
    material: packageJson.dependencies['@angular/material'],
    bootstrap: packageJson.dependencies.bootstrap,
    rxjs: packageJson.dependencies.rxjs,
    ngxtranslate: packageJson.dependencies['@ngx-translate/core'],
    fontAwesome:
      packageJson.dependencies['@fortawesome/fontawesome-free-webfonts'],
    angularCli: packageJson.devDependencies['@angular/cli'],
    typescript: packageJson.devDependencies['typescript'],
    cypress: packageJson.devDependencies['cypress']
  }
};
