import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CheckBox from '@react-native-community/checkbox';

export const SafeAreaViewContext = styled(SafeAreaView)`
  flex: 1;
  background-color: #222222;
  align-items: center;
`;

export const Checkbox = styled(CheckBox)`
  width: 15px;
  height: 15px;
  margin-right: 5px;
  border-radius: 0;
`;

export const ContentView = styled.View`
  margin-top: 200px;
`;

export const Title = styled.Text`
  font-size: 36px;
  color: #ffffff;
  font-weight: 700;
  margin-bottom: 40px;
`;

export const CompanyName = styled.Text`
  color: #1c5bb9;
`;

export const SmallText = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;
`;
export const TextInputContainer = styled.View`
  margin-bottom: 10px;
`;

export const SubmitButtonWrapper = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 16px;
`;

export const ForgotPasswordText = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
  text-decoration: underline;
`;

export const RememberPassword = styled.View`
  flex-direction: row;
  align-items: center;
`;
