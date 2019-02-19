import React, {Component} from 'react';
import {  View } from 'react-native';
import firebase from 'firebase';
import {Header, Button, CardSection, Card, Spinner} from './src/components/common';
import LoginForm from './src/components/LoginForm';


class App extends Component {
  state = { loggedIn: null};
  componentWillMount(){
    firebase.initializeApp({
          apiKey: "AIzaSyDBcRdhbg5V3x-3Z6nXwIaU8GBFImrJL2g",
          authDomain: "auth-27122.firebaseapp.com",
          databaseURL: "https://auth-27122.firebaseio.com",
          projectId: "auth-27122",
          storageBucket: "auth-27122.appspot.com",
          messagingSenderId: "958036668437"
        });
    
        firebase.auth().onAuthStateChanged(( user )=>{
          if( user ){
            this.setState({ loggedIn: true});
          } else {
            this.setState({ loggedIn: false});
          }
        });
  }

  renderContent(){
    switch (this.state.loggedIn) {
      case true: {
        return (<Card><CardSection>
          <Button onPress={ () => firebase.auth().signOut()}>
            Log Out
          </Button>
          </ CardSection></Card>
        );
        break;
        }    
      case false: {
          return <LoginForm />;
          break;
      }
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication"/>
         { this.renderContent()}
      </View>
    );
  }
}




export default App;