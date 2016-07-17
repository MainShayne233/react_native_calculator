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
      ['(',')','%','AC',],
      ['7','8','9','/',],
      ['4','5','6','*',],
      ['1','2','3','-',],
      ['0','.','=','+']
    ]);
  }

  rows(){
    var rows = [];
    var klass = this;
    this.row_vals().forEach(function (row, index) {
      rows.push(
        <KeypadRow nums={row} key={index} appendToReadout={klass.props.appendToReadout}/>
      )
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
    var klass = this;
    this.props.nums.forEach(function (num, index){
      btns.push(
        <Key num={num} key={index} appendToReadout={klass.props.appendToReadout}/>
      );
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

class Key extends Component {

  handlePress(){
    this.props.appendToReadout(this.props.num);
  }

  render() {
    return (
      <Button
        onPress={this.handlePress.bind(this)}
        containerStyle={styles.btnContainer}
        style={styles.btn}>
        {this.props.num}
      </Button>
    )
  }
}

class Display extends Component{
  render(){
    return(
      <Text style={styles.display}>{this.props.data}</Text>
    );
  }
}

class Calculator extends Component {

  componentWillMount(){
    this.setState({readOut: ' '});
  }

  interpretKey(key){
    
  }

  appendToReadout(val){
    this.setState({
      readOut: this.state.readOut + val
    })
  }


  render() {
    return (
      <View style={styles.calculator}>
        <Display data={this.state.readOut}/>
        <Keypad appendToReadout={this.appendToReadout.bind(this)}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  btn: {
    fontSize: 30,
    width: 50,
    height: 50
  },

  btnContainer: {
    margin: 2,
    padding:10,
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

  display: {
    fontSize: 50,
    marginLeft: 50
  },

  calculator: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },

});

AppRegistry.registerComponent('Calculator', () => Calculator);
