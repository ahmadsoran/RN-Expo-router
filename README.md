# React native Folder Strcture

**React native cuurent version 0.70.5 note if you want upgrade packeages version must be compatible with [expo](https://docs.expo.dev/) framework**

or

**Auto upgrade packages base on expo compatibilaty**

first install expo cli

```command
npm i -g expo-cli
```

then

```command
expo upgrade
```

## **packages intigrated**

- Localstorage **[MMKV](https://github.com/mrousavy/react-native-mmkv)**
- Animations **[React-native-reanimated](https://docs.swmansion.com/react-native-reanimated/docs)**
- Force Restart App **[React Native Restart](https://www.npmjs.com/package/react-native-restart)**
- UI Library **[RN-Paper](https://reactnativepaper.com/)**
- User Device Hardwear info **[react-native-device-info](https://www.npmjs.com/package/react-native-device-info)**
- API FETCH & CHACHE **[axios](https://axios-http.com/docs/intro) , [react query](https://www.npmjs.com/package/react-query)**
- state management **[zustand](https://github.com/pmndrs/zustand)**
- ONAIR Update **[expo update](https://docs.expo.dev/versions/latest/sdk/updates/)**
- Localization **[i18nnext](https://dev.to/ramonak/react-native-internationalization-with-i18next-568n)**
- Navigations **[React navigation](https://reactnavigation.org/)**
- validations **[zod](https://zod.dev/)**
- React-native-gesture-handelr **[RNGH](https://www.npmjs.com/package/react-native-gesture-handler)**
- Flashlist - Fast & performant React Native list. No more blank cells **[DOC](https://shopify.github.io/flash-list/docs)**
- Firebase + Firebase Messaging **[DOC](https://rnfirebase.io/messaging/usage)**
- easy grid **[doc](https://www.npmjs.com/package/react-native-easy-grid)**

**useful commands**

to genarate/regenarate ios & android folder

```command
expo eject
```

Install Expo Go for iOS on the simulator

```command
expo client:install:ios
```

Install Expo Go for Android on a connected device or emulator

```command
 expo client:install:android
```

Login to an Expo account

```command
 expo login
```

Logout of an Expo account

```command
  expo  logout
```

Sign up for a new Expo account

```command
 expo register
```

Install a module or other package to a project

```command
  expo install [packages...]
```

Share the project's URL to an email address

```command
  expo send [path]
```

**install cocoapods**

gem cleanup
brew uninstall cocoapods
sudo gem uninstall cocoapods
sudo gem install cocoapods -n /usr/local/bin
sudo gem install cocoapods-user-defined-build-types
pod install --repo-update

**MacOS apple silicon chip only**

you need to install rosetta otherwise you get an error while compiling android

softwareupdate --install-rosetta
