import React, { Component } from 'react';
import {StyleSheet, View } from 'react-native';

import List from './list/List';
import Cart from './cart/Cart';

const styles = StyleSheet.create({

    main: {
        flexDirection: 'row',
        alignItems: 'stretch',
    },
    list: {
        flex: 4,
        backgroundColor: 'skyblue'
    },
    cart: {
        flex: 2,
        backgroundColor: 'steelblue'
    }

});

export default class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
          itemList: [],
          currentId: 0,
          total: 0
        };
    }
    SortList() {
      this.setState(prevState => {
            this.state.itemList.sort((a, b) => (a.id - b.id));
        });
    }

    RecalculateTotal() {
        var tempTotal=0;
        this.state.itemList.map((item, key) => {
          tempTotal+=item.price;
        });
        this.setState({total: tempTotal});
    }

    addToList = (item) => {
        const temp = {
          list_id: this.state.currentId+1,
          id: item.id,
          name: item.name,
          price: item.price
        }
  
        var templist = this.state.itemList;
        templist.push(temp);
  
        this.SortList();
        
        this.setState({ 
            itemList: templist,
            currentId: this.state.currentId+1
          }, ()=> this.RecalculateTotal()
        );
  
    }

    removeFromList = (item) => {
        const list = this.state.itemList.filter(temp => temp.list_id !== item.list_id);
  
        this.setState({ 
            itemList: list,
          }, ()=> this.RecalculateTotal()
        );
        
    }

    clearList = () => {
        this.setState({
          itemList: [],
          currentId: 0,
          total: 0
        });
  
    }

    render() {
        return(
            <View style={styles.main}>
                <View style={styles.list}>
                    <List addToList={this.addToList}/>
                </View>
                <View style={styles.cart}>
                    <Cart itemList={this.state.itemList} removeFromList={this.removeFromList} clearList={this.clearList} total={this.state.total.toFixed(2)}/>
               </View>
            </View>
        )
      }
}
