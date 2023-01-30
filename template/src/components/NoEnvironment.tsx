import {View, StyleSheet, Text} from 'react-native';

export const NoEnvironment = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Environment Variables not set</Text>
      <View style={styles.steps}>
        <Text style={styles.step}>
          1. Create .env file in the root of the project.
        </Text>

        <Text style={styles.step}>
          2. Add your api key, user id, user token through which you want to
          login the app under the keys STREAM_CHAT_API_KEY, STREAM_CHAT_USER_ID,
          STREAM_CHAT_USER_TOKEN.
        </Text>

        <Text style={styles.step}>
          3. Rerun the app using yarn start and yarn run ios(For iOS) and yarn
          run android(For Android).
        </Text>

        <Text style={styles.note}>
          Note: If the app is not able to load environment variables. Try yarn
          start --reset-cache and run it on android and iOS.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingVertical: 100,
    paddingHorizontal: 20,
  },
  header: {
    textAlign: 'center',
    fontSize: 30,
    color: '#d9534f',
    fontWeight: 'bold',
  },
  steps: {marginVertical: 20},
  step: {
    fontSize: 20,
    marginTop: 10,
  },
  note: {
    marginVertical: 20,
    fontSize: 20,
    color: '#52be80',
  },
});
