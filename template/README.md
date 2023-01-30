<h1 align="center">Stream Chat React Native Starter</h1>

A basic chat application using [Stream Chat React Native](https://github.com/GetStream/stream-chat-react-native).


## Install

Your Stream chat API key and API secret as well as a user ID and user token need to exist either in your $PATH or in `/<app-directory>/.env`. See [.env.example](./.env.example). 

The keys for the environment variables are as follows:
1. `STREAM_CHAT_API_KEY`
2. `STREAM_CHAT_USER_ID`
3. `STREAM_CHAT_USER_TOKEN`

```sh
yarn install && npx pod-install
```

## Usage

```
yarn start
```

```sh
yarn run ios 
```

```sh
yarn run android
```

## Run tests

```sh
yarn run test
```

**Note: If your environment variables do not load even though you have added it, try `yarn start --reset-cache` and run it again on android and iOS.