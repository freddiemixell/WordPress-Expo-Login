# WordPress-Expo-Login
Example Expo React Native App using WordPress OAuth2 Server for login.

### How to use:
1 Install WordPress OAuth Server plugin: https://wordpress.org/plugins/oauth2-provider/
2 In settings enable OAuth Server.
3 Under Clients create a new client.
  - Choose Authorization Code grant type.
  - Name your client.
  - Don't worry about Advanced Settings
4 Copy your Client ID
5 In `screens/SignInScreen.js` add your client id where it says `CLIENT_ID = 'INSERT-CLIENT-ID';`
6 Change example.com to your WordPress websites url on the sign in screen here:
`const result = await AuthSession.startAsync({
    authUrl:
    `https://example.co/oauth/authorize` +
    `?client_id=${this.CLIENT_ID}` +
    `&redirect_uri=${encodeURIComponent(redirectUrl)}` +
    '&response_type=code'
});`

7 Log in to your app using WordPress!
