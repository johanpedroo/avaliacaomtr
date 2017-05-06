import React, { Component } from 'react';

import Card from './Card'
import cards from '../cardDados'

class Cards extends Component {
  render() {
    return (
      <div className="container">
        <section className="cards">
          {cards.map((value, i) => {
            return (<Card card={value} key={i}/>)
          })}
        </section>
      </div>
    );
  }
}

export default Cards;
