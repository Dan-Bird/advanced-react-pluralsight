import React, { Component } from 'react';
import DataApi from '../DataApi';
import { data } from '../testData';

const api = new DataApi(data);

class App extends Component {
  constructor() {
    super();
    this.state = {
      articles: api.getArticles(),
      authors: api.getAuthors(),
    };
    console.log(this.state);
  }
  render() {
    return <div></div>;
  }
}

export default App;
