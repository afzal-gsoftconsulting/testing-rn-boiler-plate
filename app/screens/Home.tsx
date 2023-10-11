import React, {useRef, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
  Animated,
  I18nManager,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import {useTheme} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {loginUser} from '../store/slice/userSlice';
import {RootState} from '../store/slice';
import {loginRequest} from '../store/actions/authActions';
import Config from 'react-native-config';
import LottieView from 'lottie-react-native';
import RefConcept from '../components/RefConcept';
import HOCExample from '../components/HOCExample';

// animations realated code...
const Home = () => {
  const {t, i18n} = useTranslation();
  const theme = useTheme();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  // console.log('user', user);
  // console.log({Config: Config?.TEST_VARIABLE}, Config);
  const animationRef = useRef<LottieView>(null);
  const animationProgress = useRef(0);
  // console.log({__DEV__});

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
      <Pressable
        onPress={() => {
          // animationRef.current?.reset();
          if (animationProgress.current == 0) {
            animationRef.current?.play(1, 120);
            animationProgress.current = 1;
          } else {
            animationRef.current?.reset();
            animationProgress.current = 0;
          }
        }}>
        <LottieView
          ref={animationRef}
          source={require('../assets/animations/animation.json')}
          // autoPlay
          loop={false}
          style={{width: 60, height: 60}}
          progress={animationProgress.current}
        />
      </Pressable>
      <RefConcept />
      {/* <HOCExample /> */}
    </SafeAreaView>
  );
};
export default Home;
