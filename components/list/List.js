import React, {Component} from 'react';
import {StyleSheet, View, ScrollView, Text } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';

import ItemData from '../../data/data.json';

import Item from './item/Item'
import { vh } from 'react-native-expo-viewport-units';

const styles = StyleSheet.create({

    main: {
        flex: 1
    },
    scroller: {
        height: vh(100),
        flex: 1,
        backgroundColor: '#ffffff',
    },
    grid: {
        backgroundColor: '#800080'
       
    },

    sectionHeader: {
        flex: 1,
        fontSize: 15,
        fontWeight: '600',
        alignItems: 'center',
        backgroundColor: '#808080',
        color: 'white',
        padding: 10,
        borderWidth: 1,
        borderColor: '#000000'
    },

    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
        backgroundColor: '#654321'
    },



});

function Separator() {
    return <View style={styles.separator} />;
}

export default class List extends Component {


    render() {
        var dvd = ItemData.filter(function(item) {
            return item.catagory==="DVD";
        });

        var book = ItemData.filter(function(item) {
            return item.catagory==="Book";
        });
        
        var pm = ItemData.filter(function(item) {
            return item.catagory==="Playroom Material";
        });

        var merchandise = ItemData.filter(function(item) {
            return item.catagory==="Merchandise";
        });



        return(

            <View style={styles.main}>
                <View style={styles.scroller}>
                    <ScrollView>
                        <View style={styles.grid}>
                            <Text style={styles.sectionHeader}>DVD</Text>
                            <FlatGrid
                                itemDimension={140}
                                spacing={0}
                                items={dvd}
                                renderItem={({ item }) => (<Item item={item} key={item.id} addToList={this.props.addToList} bgcolor="#0000FF" txcolor="#ffffff"/>)}
                                />
                        </View>
                        <Separator />
                        <View style={styles.grid}>
                            <Text style={styles.sectionHeader}>Book</Text>
                            <FlatGrid
                                itemDimension={140}
                                spacing={0}
                                items={book}
                                renderItem={({ item }) => (<Item item={item} key={item.id} addToList={this.props.addToList} bgcolor="#FFFF00" txcolor="#000000"/>)}
                                />
                                
                        </View>
                        <Separator />
                        <View style={styles.grid}>
                        <Text style={styles.sectionHeader}>Playroom Material</Text>
                            <FlatGrid
                                itemDimension={140}
                                spacing={0}
                                items={pm}
                                renderItem={({ item }) => (<Item item={item} key={item.id} addToList={this.props.addToList} bgcolor="#008000" txcolor="#ffffff"/>)}
                                />
                        </View>
                        <Separator />
                        <View style={styles.grid}>
                            <Text style={styles.sectionHeader}>Merchandise</Text>
                            <FlatGrid
                                itemDimension={140}
                                spacing={0}
                                items={merchandise}
                                renderItem={({ item }) => (<Item item={item} key={item.id} addToList={this.props.addToList} bgcolor="#FFC0CB" txcolor="#000000"/>)}
                                />
                        </View>
                    </ScrollView>
                </View>
                
            </View>
        )
    }
}
