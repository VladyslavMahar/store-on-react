import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Features from "./components/Features";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";
import Info from "./components/Info";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          title: 'Стілець сірий',
          img: 'chair-grey.jpeg',
          desc:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
          category: 'chairs',
          price: '49.99'
        },
        {
          id: 2,
          title: 'Стіл',
          img: 'table.webp',
          desc:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
          category: 'tables',
          price: '149.99'
        },
        {
          id: 3,
          title: 'Диван',
          img: 'sofa.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'sofa',
          price: '549.99'
        },
        {
          id: 4,
          title: 'Лампа',
          img: 'wall-light.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'light',
          price: '25.00'
        },
        {
          id: 5,
          title: 'Стілець білий',
          img: 'chair-white.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'chairs',
          price: '49.99'
        }
      ],
      currentItems: [],
      orders: [],
      infoWindow: false,
      showFullItem: false,
      cartOpen: false,
      fullItem: {}
    }
   
    this.state.currentItems = this.state.items
    this.setInfo = this.setInfo.bind(this)
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.cleanCart = this.cleanCart.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.showItem = this.showItem.bind(this)
    this.setCartOpen = this.setCartOpen.bind(this)
  }
  chooseCategory(category) {
    if (category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }
    this.setState({
      currentItems: this.state.items.filter((el => el.category === category))
    })
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  cleanCart() {
    this.setState({orders:[]})
  }
   
  setInfo() {
    this.setState({ infoWindow: true})
  
    setTimeout(() => {
      this.setState({ infoWindow: false})
    }, 3000)
  }

  setCartOpen() {
    this.setState({cartOpen: !this.state.cartOpen})
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id) {
        el.count ++
        console.log(el.count)
        this.setState({ orders: [...this.state.orders] })
        isInArray = true}
    })
    if(!isInArray) {
      item.count = 1
      this.setState({orders: [...this.state.orders, item]})}
  }
  showItem(item) {
    this.setState( {fullItem:item })
    this.setState({ showFullItem: !this.state.showFullItem })
  }

  render () {
    return (
      <div className="wrapper">
        <Header cleanCart={this.cleanCart} onDelete={this.deleteOrder} orders={this.state.orders} setCartOpen={this.setCartOpen} cartOpen={this.state.cartOpen} />
        {this.state.infoWindow && <Info />}
        <Categories btnOn={this.state.btnOn} chooseCategory={this.chooseCategory} />
        <Items showItem={this.showItem} onAdd={this.addToOrder} setInfo={this.setInfo} items={this.state.currentItems} />
        {this.state.showFullItem && <ShowFullItem showItem={this.showItem} onAdd={this.addToOrder} item={this.state.fullItem} />}
        <Features />
        <Footer />
      </div>
  )
}

}

export default App;
