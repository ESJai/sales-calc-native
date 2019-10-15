import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

const styles = StyleSheet.create({

    main: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#000000'
    },
});

export default class Item extends Component {
    

    render() {
        return(
            <View style={styles.main}>
                <TouchableOpacity style={{backgroundColor: this.props.bgcolor, padding: 10, height: 150}} onPress={() => this.props.addToList(this.props.item)}>
                    <View style={{flex:2}}>
                        <Text style={{textAlign: 'left', fontSize: 14, color: this.props.txcolor, fontWeight: '600'}}>
                            {this.props.item.id}
                        </Text>
                    </View>
                    <View style={{flex:4}}>
                        <Text style={{textAlign: 'center', fontSize: 16, color: this.props.txcolor, fontWeight: '600'}}>
                            {this.props.item.name}
                        </Text>
                    </View>
                    <View style={{flex:1}}>
                        <Text style={{textAlign: 'right',fontSize: 12, color: this.props.txcolor, fontWeight: '600'}}>
                            ${this.props.item.price}
                        </Text>
                    </View>

                    
                </TouchableOpacity>
            </View>
        )
    }
}
