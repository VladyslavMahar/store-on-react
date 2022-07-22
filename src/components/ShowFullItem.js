import React, { Component } from 'react'

export class ShowFullItem extends Component {
  render() {
    return (
      <div onClick={() => this.props.showItem(this.props.item)} className='full-item'>
            <div>
                <img src={"./img/" + this.props.item.img} alt={this.props.item.title}  onClick={() => this.props.showItem(this.props.item)} />
                <h2>{this.props.item.title}</h2>
                <p>{this.props.item.desc}</p>
                <b>{this.props.item.price}$</b>
                <div onClick={() => this.props.onAdd(this.props.item)} className='btn-div'>
                    <button  onClick={this.props.setCartOpen} className='add-to-card'>
                        <span className='text'>
                        В кошик
                        </span>
                        <i className='icon'>+</i>
                    </button>
                </div>
        </div>
      </div>
    )
  }
}

export default ShowFullItem