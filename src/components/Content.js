import React, { Component } from 'react';

import Breadcrumbs from './Breadcrumbs'
import Produto from './Produto'

class Content extends Component {
  render() {
    return (
      <main>
        <Breadcrumbs/>
        <Produto/>
      </main>
    );
  }
}

export default Content;
