import React from 'react';
import {useTranslation} from 'react-i18next';
import {I18nManager, SafeAreaView, Text} from 'react-native';
import {useTheme} from 'react-native-paper';

const Home = () => {
  const {t, i18n} = useTranslation();
  const theme = useTheme();

  return (
    <SafeAreaView>
      <Text
        onPress={() => {
          i18n.changeLanguage(i18n.language == 'en' ? 'ar' : 'en');
          I18nManager.forceRTL(false);
        }}
        style={{color: theme.colors.heading}}>
        dfdf {t('Home.title')}
      </Text>
    </SafeAreaView>
  );
};
export default Home;
