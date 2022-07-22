import React, { Component } from 'react'
import Item from './Item'

export class Items extends Component {
  render() {
    return (
      <main>
          {this.props.items.map(el => (
              <Item showItem={this.props.showItem} key={el.id} item={el} onAdd={this.props.onAdd} setInfo={this.props.setInfo} />
          ))}
      </main>
    )
  }
}

export default Items