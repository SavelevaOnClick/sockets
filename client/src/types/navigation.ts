import {RouteProp} from '@react-navigation/native';
export type RootStackParamList = {
  Chat: {
    userName: string;
    email: string;
  };
};

export type ChatRouteProp = RouteProp<RootStackParamList, 'Chat'>;
