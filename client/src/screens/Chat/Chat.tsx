import React from 'react';
import {Alert, Icon, View} from '@components';
import {GiftedChat, IMessage, Send, SendProps} from 'react-native-gifted-chat';
import styles from './styles';
import {useRoute, useState, useCallback, useNavigation, useMemo} from '@hooks';
import {w3cwebsocket as W3CWebSocket} from 'websocket';
import {ChatRouteProp} from '@types';
import assets from '@assets';

type TChatProps = {};

const Chat: React.FC<TChatProps> = () => {
  const navigation = useNavigation();
  const {params} = useRoute<ChatRouteProp>();
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [client] = useState<W3CWebSocket>(
    new W3CWebSocket('ws://10.0.2.2:8000'),
  );

  client.onmessage = event => {
    const data = event.data;
    if (typeof data === 'string') {
      const message = JSON.parse(data);
      setMessages(previousMessages =>
        GiftedChat.append(previousMessages, [message]),
      );
    }
  };

  client.onerror = e => {
    Alert.alert('Something wrong', '', [
      {
        text: 'Cancel',
        onPress: () => navigation.goBack(),
        style: 'cancel',
      },
    ]);
  };

  client.onclose = () => {
    Alert.alert('Disconnect', '', [
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
    ]);
  };

  const onSend = useCallback((messages = []) => {
    client.send(JSON.stringify(messages[0]));
  }, []);

  const userData = useMemo(
    () => ({
      _id: params.email,
      name: params.userName,
      avatar: assets.images.DEFAULT_AVATAR_WOMEN,
    }),
    [params],
  );

  const renderSend = useCallback((props: SendProps<IMessage>) => {
    return (
      <Send {...props} alwaysShowSend={true} containerStyle={styles.sendButton}>
        <Icon name="mail2" size={27} color={'violet'} />
      </Send>
    );
  }, []);

  return (
    <View style={styles.container}>
      <GiftedChat
        messages={messages}
        alignTop={true}
        user={userData}
        renderUsernameOnMessage={true}
        showUserAvatar={true}
        renderSend={renderSend}
        onSend={messages => onSend(messages)}
      />
    </View>
  );
};
export default Chat;
