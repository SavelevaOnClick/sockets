import {
  ActivityIndicator,
  KeyboardAwareScrollView,
  Pressable,
  Text,
  TextInput,
} from '@components';
import {useNavigation, useCallback, useState, useMemo} from '@hooks';
import React from 'react';
import styles from './styles';

type TSignInProps = {};

const SignIn: React.FC<TSignInProps> = () => {
  const navigate = useNavigation();
  const [userName, setUserName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onPress = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      setUserName('');
      setEmail('');
      setIsLoading(false);
      navigate.navigate('Chat', {userName, email});
    }, 2000);
  }, [userName, email]);

  const isDisabled = useMemo(() => !userName || !email, [userName, email]);

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <TextInput
        value={userName}
        onChangeText={setUserName}
        style={styles.input}
        placeholder={'name'}
      />
      <TextInput
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        placeholder={'email'}
      />
      <Pressable onPress={onPress} disabled={isDisabled} style={styles.button}>
        {isLoading ? (
          <ActivityIndicator color="violet" size="small" />
        ) : (
          <Text style={styles.buttonTitle}>SignIn</Text>
        )}
      </Pressable>
    </KeyboardAwareScrollView>
  );
};

export default SignIn;
