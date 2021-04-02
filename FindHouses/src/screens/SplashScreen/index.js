import React from 'react';
import { StatusBar } from 'react-native';
import { SectionView, SectionImage } from './styles';
import SplashLogo from '../../assets/img/SevenHousesLogo.png';

export const SpashScreen = () => {
  return (
    <SectionView>
      <StatusBar translucent backgroundColor="transparent" />
      <SectionImage source={SplashLogo} resizeMode="contain" />
    </SectionView>
  );
};

export default SpashScreen;
