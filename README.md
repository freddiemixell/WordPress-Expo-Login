![Expo WordPress](https://i.imgur.com/wI6Xntb.png =250x)
# WordPress-Expo-Login
Example Expo React Native App using WordPress OAuth2 Server for login.

## Getting Started
These instructions will show you how to set up your WordPress website that will act as the Authentication system for your Expo App.

#### Prerequisites:
- [NodeJS](https://nodejs.org/en/)
  - If you have HomeBrew: `brew install node`
- [Expo CLI](https://expo.io/learn)
  - `npm install expo-cli --global`
- [Expo App](https://expo.io/tools) - Used to view your app.

#### WordPress OAuth Server:
1. Install WordPress OAuth Server plugin: https://wordpress.org/plugins/oauth2-provider/
2. In WP OAuth Servers settings enable OAuth Server.
![WP OAuth Server Settings](https://i.imgur.com/cMWCvS8.png)
3. Under Clients create a new client.
  - Choose Authorization Code grant type.
  - Name your client.
  - Don't worry about Advanced Settings
![Creating a client in WordPress](https://i.imgur.com/dIppIfv.png)
4. **Copy your Client ID**

#### Expo Instructions:
1. In `screens/SignInScreen.js` add your client id where it says `CLIENT_ID = 'INSERT-CLIENT-ID';`
2. Change example.com to your WordPress websites url on the sign in screen as well.
3. Install dependencies.
    - NPM: `npm install` (If you don't know just use this.)
    - YARN: `yarn`
4. Run your app.
    - NPM: `npm run start`
    - YARN: `yarn start`
5. Expo will create a QR Code.
6. With the Expo app installed scan QR code.
    - Using a QR Scanner the Expo app can't scan QR codes!
    - You can also log into the Expo app and find your app if they're on the same wifi.
7. Log into your app using WordPress!
