import React from 'react';
import * as firebase from 'firebase';
import { firebaseConfig } from './src/config/firebase';

import Routes from './src/routes';

firebase.initializeApp(firebaseConfig);

export default function App() {
  return (
    <Routes />
  );

};
