import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [
            {
                key: 'all',
                category: 'Всі товари'
            },
            {
                key: 'tables',
                category: 'Столи'
            },
            {
                key: 'chairs',
                category: 'Стільці'
            },
            {
                key: 'sofa',
                category: 'Дивани'
            },
            {
                key: 'light',
                category: 'Світло'
            }
            ]
        }
    }
    
  render() {
      
    return (
        
      <div className='menu-categories'>
        {this.state.categories.map(i => (
        <div onClick={() => {
            this.props.chooseCategory(i.key)
            }} key={i.key}>
            {i.category}
        </div>
        
        ))}
      </div>
    )
  }
}

export default Categories