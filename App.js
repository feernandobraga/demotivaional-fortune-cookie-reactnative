
import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
  
} from 'react-native';
import { white } from 'ansi-colors';

// creating my own button component
class MyButton extends Component{
  
  // creating a stylesheet specifically for the button
  constructor(props){
    super(props);
    this.state = {};

    this.btnStyle = StyleSheet.create({
      btnContainer:{
        height: 70,
        width: 200,
        borderWidth: 2,
        borderColor: '#FF8811',
        borderRadius: 10,
        backgroundColor: 'rgba(130, 76, 0,0.2)'
      },

      btnView:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },

      btnText:{
        color: '#FFF4E9',
        fontSize: 15,
        fontWeight: 'bold'
      }

    });
  }
  
  //rendering my custom component - MyButton
  render(){
    return(
      <TouchableOpacity style={this.btnStyle.btnContainer} onPress={this.props.btnEvent}>
        <View style={this.btnStyle.btnView} >
          <Text style={this.btnStyle.btnText} >{this.props.btnName}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}


export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      randomFortune: "Your fortune is..."

    };

    // that binding thing so we can use the function
    this.tellFortune = this.tellFortune.bind(this);

    // array with fortunes
    this.fortunes = ["You suck", "Quite your job", "You should give up", "No one cares about you", "Try to suck less", "Don't bother trying", "No one loves you"];

  }
  
  tellFortune(){
    let myState = this.state;

    // generate a random number
    fortuneNumber = Math.floor(Math.random() * this.fortunes.length);

    // the state randomFortune will get the value from the array[]
    myState.randomFortune = this.fortunes[fortuneNumber];

    // updated the state
    this.setState(myState);
  }
  
  render() {
    return (
      <View style={myStyles.container}>
        
        <Text style={myStyles.fortune} >{this.state.randomFortune}</Text>
        {/* using my custom made component */}
        <MyButton btnName = 'Tell Fortune!' btnEvent={this.tellFortune} />

      </View>
    );
  }
}

const myStyles = StyleSheet.create({

  container:{
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#372248',
    justifyContent: 'center',
    alignItems: 'center',
    
  },

  fortune:{
    color: '#FFF4E9',
    margin: 30,
    marginTop: -200,
    marginBottom: 150,
    fontSize: 20,
    textAlign: "center",
    fontStyle: "italic"
  }

})
