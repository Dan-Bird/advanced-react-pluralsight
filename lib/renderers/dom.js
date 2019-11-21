import React from 'react';
import ReactDom from 'react-dom';
import App from 'components/App';
import StateApi from 'DataApi';

const store = new StateApi(window.initialData);

ReactDom.render(<App store={store} />, document.getElementById('root'));
