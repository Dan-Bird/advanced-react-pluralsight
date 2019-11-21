import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';
import StateApi from 'DataApi';

import App from './components/App';
import config from 'config';

const serverRender = async () => {
  const resp = await axios.get(`http://${config.host}:${config.port}/data`);
  const store = new StateApi(resp.data);

  return {
    intitialMarkup: ReactDOMServer.renderToString(<App store={store} />),
    intitialData: resp.data,
  };
};

export default serverRender;
