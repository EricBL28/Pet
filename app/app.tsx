import { View, Text, Image } from 'react-native';
import React from 'react';
import { GlobalStyles } from '@/theme/GlobalStyles';

const ScreenPrincipal = () => {
  return (
    <View style={GlobalStyles.containerAzul}>
      <View>
        <Image 
          source={require('../assets/images/logo02.png')} 
          style={GlobalStyles.logo} 
        />
      </View>

      <View style={GlobalStyles.containerBlanco}>
        
      </View>
    </View>
  );
};

export default ScreenPrincipal;
