import React from 'react';
import {useTranslation} from 'react-i18next';
import {I18nManager, SafeAreaView, Text} from 'react-native';
import {useTheme} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {loginUser} from '../store/slice/userSlice';
import {RootState} from '../store/slice';
import {loginRequest} from '../store/actions/authActions';

const Home = () => {
  const {t, i18n} = useTranslation();
  const theme = useTheme();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  // console.log('user', user);

  return (
    <SafeAreaView>
      <Text
        onPress={() => {
          // language translator
          // i18n.changeLanguage(i18n.language == 'en' ? 'ar' : 'en');
          // I18nManager.forceRTL(false);

          // store value in slice
          // dispatch(loginUser({name: 'abcd'}));

          // saga action
          dispatch(loginRequest({name: 'social'}));
        }}
        style={{color: theme.colors.heading}}>
        dfdf {t('Home.title')}
      </Text>
    </SafeAreaView>
  );
};
export default Home;
