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
