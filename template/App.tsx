import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {chatClient, useChatClient} from './src/hooks/useChatClient';
import {AppProvider} from './src/context/AppContext';
import {Chat, OverlayProvider} from 'stream-chat-react-native';

import {NavigationStackParamsList} from './src/types';
import {ChannelListScreen, ChannelScreen, ThreadScreen} from './src/screens';
import {chatApiKey, chatUserId, chatUserToken} from './src/config';
import {NoEnvironment} from './src/components/NoEnvironment';

const Stack = createStackNavigator<NavigationStackParamsList>();

const NavigationStack = () => {
  const {clientIsReady} = useChatClient();

  if (!clientIsReady) {
    return <Text>Loading chat ...</Text>;
  }

  return (
    <OverlayProvider>
      <Chat client={chatClient}>
        <Stack.Navigator>
          <Stack.Screen
            name="ChannelListScreen"
            component={ChannelListScreen}
          />
          <Stack.Screen name="ChannelScreen" component={ChannelScreen} />
          <Stack.Screen name="ThreadScreen" component={ThreadScreen} />
        </Stack.Navigator>
      </Chat>
    </OverlayProvider>
  );
};

const isEnvNotSet = !chatApiKey || !chatUserId || !chatUserToken;

export default () => {
  return !isEnvNotSet ? (
    <AppProvider>
      <GestureHandlerRootView style={{flex: 1}}>
        <SafeAreaView style={{flex: 1}}>
          <NavigationContainer>
            <NavigationStack />
          </NavigationContainer>
        </SafeAreaView>
      </GestureHandlerRootView>
    </AppProvider>
  ) : (
    <NoEnvironment />
  );
};
