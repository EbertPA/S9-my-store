// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url_api: 'https://platzi-store.herokuapp.com/products',
  // url_api: 'https://fakestoreapi.com/products',
  firebase: {
    apiKey: 'AIzaSyBK1MrVIZ7r4oIzkvVU2gNsFgRuWADLb6Q',
    authDomain: 's9-my-store.firebaseapp.com',
    projectId: 's9-my-store',
    storageBucket: 's9-my-store.appspot.com',
    messagingSenderId: '836640144159',
    appId: '1:836640144159:web:4678aeefdf141c87d68e2a'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
