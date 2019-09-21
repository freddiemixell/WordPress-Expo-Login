import React from 'react'
import { View, AsyncStorage, Button } from 'react-native';
import { AuthSession } from 'expo';

export default class SignInScreen extends React.Component {
    static navigationOptions = {
      title: 'Please sign in',
    };

    CLIENT_ID = 'INSERT-CLIENT-ID';
  
    render() {
      return (
        <View>
          <Button title="Sign in!" onPress={this._signInAsync} />
        </View>
      );
    }
  
    _signInAsync = async () => {
        try {
            const redirectUrl = AuthSession.getRedirectUrl();
            const result = await AuthSession.startAsync({
                authUrl:
                `https://digitalreactor.co/oauth/authorize` +
                `?client_id=${this.CLIENT_ID}` +
                `&redirect_uri=${encodeURIComponent(redirectUrl)}` +
                '&response_type=code'
            });

            const { type, params: { code } } = result;
    
            if ( type === 'success' ) {
                await AsyncStorage.setItem( 'userToken', code );
                this.props.navigation.navigate('App');
            }
        } catch(error) {
            console.log(error)
        }
    };
  }
  