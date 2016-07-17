/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Button from 'react-native-button';


class Keypad extends Component {

  row_vals(){
    return([
      ['7','8','9','+','*'],
      ['4','5','6','-','/'],
      ['1','2','3','0','=']
    ]);
  }

  rows(){
    var rows = [];
    this.row_vals().forEach(function (row, index) {
      rows.push(<KeypadRow nums={row} key={index}/>)
    });
    return rows;
  }

  render(){
    return(
      <View>
        {this.rows()}
      </View>
    )
  }
}

class KeypadRow extends Component {

  btns() {
    var btns = [];

    this.props.nums.forEach(function (num, index){
      btns.push(<NumBtn num={num} key={index}/>);
    });

    return btns;
  }

  render() {
    return(
      <View style={styles.keypadrow}>
        {this.btns()}
      </View>
    )
  }

}

class NumBtn extends Component {

  handlePress(){
    console.log(this.props);
  }

  render() {
    return (
      <Button
        containerStyle={styles.btnContainer}
        style={styles.btn}>
        {this.props.num}
      </Button>
    )
  }
}

class Calculator extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Keypad/>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  btn: {
    fontSize: 20,
    width: 10
  },

  btnContainer: {
    margin: 2,
    padding:10,
    height:45,
    borderRadius:3,
    borderWidth: 1,
    borderColor: 'blue',
    flexDirection:'row'
  },

  keypadrow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Calculator', () => Calculator);
