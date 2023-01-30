import {ChannelSort} from 'stream-chat';
import {chatUserId} from '../config';
import {NavigationStackParamsList, StreamChatGenerics} from '../types';
import {ChannelList} from 'stream-chat-react-native';
import type {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {useAppContext} from '../context/AppContext';

const filters = {
  members: {$in: [chatUserId]},
  type: 'messaging',
};

const sort: ChannelSort<StreamChatGenerics> = {last_message_at: -1};

type ChannelListScreenProps = StackScreenProps<
  NavigationStackParamsList,
  'ChannelListScreen'
>;

export const ChannelListScreen: React.FC<ChannelListScreenProps> = props => {
  const {navigation} = props;
  const {setChannel} = useAppContext();
  return (
    <ChannelList
      filters={filters}
      sort={sort}
      onSelect={channel => {
        setChannel(channel);
        navigation.navigate('ChannelScreen');
      }}
    />
  );
};
