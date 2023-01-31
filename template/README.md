<h1 align="center">Stream Chat React Native Starter</h1>

A basic chat application using [Stream Chat React Native](https://github.com/GetStream/stream-chat-react-native).


## Installation steps

Create `.env` file in the root of the project and add your environment variables(Stream chat API key, User ID and User Token) in the file. See [.env.example](./.env.example).

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

**Note: _If your environment variables do not load even though you have added it, try `yarn start --reset-cache` and run it again on android and iOS._**