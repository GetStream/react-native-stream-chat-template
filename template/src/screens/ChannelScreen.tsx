import {Channel, MessageInput, MessageList} from 'stream-chat-react-native';
import {useAppContext} from '../context/AppContext';
import {Text} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {NavigationStackParamsList} from '../types';
import React from 'react';

type ChannelScreenProps = StackScreenProps<
  NavigationStackParamsList,
  'ChannelScreen'
>;

export const ChannelScreen: React.FC<ChannelScreenProps> = props => {
  const {channel, setThread} = useAppContext();
  const {navigation} = props;

  if (!channel) return <Text>Loading</Text>;

  return (
    <Channel channel={channel}>
      <MessageList
        onThreadSelect={message => {
          if (channel?.id) {
            setThread(message);
            navigation.navigate('ThreadScreen');
          }
        }}
      />
      <MessageInput />
    </Channel>
  );
};
