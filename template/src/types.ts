import {Channel} from 'stream-chat';
import {ThreadContextValue} from 'stream-chat-react-native';

type LocalAttachmentType = Record<string, unknown>;
type LocalChannelType = Record<string, unknown>;
type LocalCommandType = string;
type LocalEventType = Record<string, unknown>;
type LocalMessageType = Record<string, unknown>;
type LocalReactionType = Record<string, unknown>;
type LocalUserType = Record<string, unknown>;

export type StreamChatGenerics = {
  attachmentType: LocalAttachmentType;
  channelType: LocalChannelType;
  commandType: LocalCommandType;
  eventType: LocalEventType;
  messageType: LocalMessageType;
  reactionType: LocalReactionType;
  userType: LocalUserType;
};

export type AppContextType = {
  channel: Channel<StreamChatGenerics> | undefined;
  setChannel: React.Dispatch<
    React.SetStateAction<Channel<StreamChatGenerics> | undefined>
  >;
  setThread: React.Dispatch<
    React.SetStateAction<
      ThreadContextValue<StreamChatGenerics>['thread'] | undefined
    >
  >;
  thread: ThreadContextValue<StreamChatGenerics>['thread'] | undefined;
};

export type NavigationStackParamsList = {
  ChannelListScreen: undefined;
  ChannelScreen: undefined;
  ThreadScreen: undefined;
};
