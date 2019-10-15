import React, {Component} from 'react';
import {StyleSheet, View, ScrollView, Text, Button, TouchableOpacity} from 'react-native';

import { vh } from 'react-native-expo-viewport-units';

const styles = StyleSheet.create({

    main: {
        flexDirection: 'column',
        padding: 10,
    },
    header: {
        flexDirection: 'row'
        
    },
    separator: {
        marginVertical: 6,
        borderBottomColor: '#000',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    list: {
        height: vh(75),
        backgroundColor: '#fff'
    },
    totalBar: {
        flexDirection: 'row'
    }

});

function Separator() {
    return <View style={styles.separator} />;
}

export default class Cart extends Component {
    

    render() {
        return(
            <View style={styles.main}>
                <View style={styles.header}>
                    <Text style={{flex: 1, fontWeight: '600'}}>Item#</Text>   
                    <Text style={{flex: 3, fontWeight: '600'}}> | Name</Text>
                    <Text style={{flex: 2, fontWeight: '600'}}> | Price ($)</Text>
                    <Text style={{flex: 1, fontWeight: '600'}}> | X</Text>
                </View>
                <View>
                <Separator />
                </View>
                <View style={styles.list}>
                    <ScrollView>
                        {this.props.itemList.length == 0 ? (
                            <Text style={{textAlign: 'center'}}>Empty Cart</Text> 
                            
                            ) : 
                            this.props.itemList.map((item)=>{
                                return(
                                    <View style={{ flexDirection:'row'}} key={item.list_id} >
                                        <Text style={{flex: 1}}>{item.id}</Text>   
                                        <Text style={{flex: 3}}> {item.name}</Text>
                                        <Text style={{flex: 2}}> {item.price}</Text>
                                        <Button style={{flex: 1}} title={'X'} onPress={() => this.props.removeFromList(item)} color={'red'}/>
                                    </View>
                                )
                            })
                        }
                        
                    </ScrollView>
                </View>
                
                <View>
                <Separator />
                </View>
                <View style={styles.totalBar}>
                    <Text style={{flex: 2, fontWeight: '600'}}>Total: ${this.props.total}</Text>
                    <TouchableOpacity style={{flex: 1, backgroundColor: 'yellow'}} onPress={() => this.props.clearList()}>
                        <Text style={{textAlign: 'center', color: 'black'}}>Clear</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        )
    }
}
