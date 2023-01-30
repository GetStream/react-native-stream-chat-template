import {Channel, Thread} from 'stream-chat-react-native';
import {useAppContext} from '../context/AppContext';
import {Text} from 'react-native';

export const ThreadScreen = () => {
  const {channel, thread} = useAppContext();

  if (!channel) return <Text>Loading</Text>;

  return (
    <Channel channel={channel} thread={thread} threadList>
      <Thread />
    </Channel>
  );
};
