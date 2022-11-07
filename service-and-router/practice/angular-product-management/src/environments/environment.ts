// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  categoryUrl: 'http://localhost:3000/categories',
  productUrl: 'http://localhost:3000/products',
  firebase: {
    apiKey: 'AIzaSyA6p47_q7Y-ztd5Lhr62gLYFt4XPb3YeTA',
    authDomain: 'product-management-95d41.firebaseapp.com',
    projectId: 'product-management-95d41',
    storageBucket: 'product-management-95d41.appspot.com',
    messagingSenderId: '49844968253',
    appId: '1:49844968253:web:76676b87de11c180da4354',
    measurementId: 'G-HC0Z7R0RR4'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
