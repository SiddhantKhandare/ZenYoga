// import React, { useEffect } from 'react';
// import { View, Text, StyleSheet, Animated, Dimensions } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import colors from '../utils/colors';
// import fonts from '../utils/fonts';
// import fontSize from '../utils/fontSize';

// const SplashScreen = () => {
//   const navigation = useNavigation();
//   const logoOpacity = new Animated.Value(0);

//   useEffect(() => {
//     Animated.timing(logoOpacity, {
//       toValue: 1,
//       duration: 2000,
//       useNativeDriver: true,
//     }).start(() => {
//       setTimeout(() => {
//         navigation.replace('Home'); 
//       }, 1500);
//     });
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Animated.Image
//         source={require('../../assets/images/logo.png')}
//         style={[styles.logo, { opacity: logoOpacity }]}
//         resizeMode="contain"
//       />
//       {/* <Text style={styles.text}>ZenYoga</Text> */}
//     </View>
//   );
// };

// export default SplashScreen;

// const { width } = Dimensions.get('window');

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: colors.primary,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   logo: {
//     width: width * 0.6,
//     height: width * 0.6,
//   },
//   text: {
//     marginTop: 20,
//     fontSize: fontSize.xxl,
//     fontFamily: fonts.poppinsBold,
//     color: colors.background,
//   },
// });




















import React, { useEffect } from 'react';
import { View, StyleSheet, Animated, Dimensions, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../utils/colors';
import fonts from '../utils/fonts';
import fontSize from '../utils/fontSize';

const SplashScreen = () => {
  const navigation = useNavigation();
  const logoOpacity = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(logoOpacity, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => {
        navigation.replace('Home'); 
      }, 1500);
    });
  }, []);

  return (
    <LinearGradient
      colors={['#C11B7D', '#2D0B59']} 
      style={styles.container}
    >
      <Animated.Image
        source={require('../../assets/images/logo.png')}
        style={[styles.logo, { opacity: logoOpacity }]}
        resizeMode="contain"
      />
      {/* <Text style={styles.text}>ZenYoga</Text> */}
    </LinearGradient>
  );
};

export default SplashScreen;

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: width * 0.6,
    height: width * 0.6,
  },
  text: {
    marginTop: 20,
    fontSize: fontSize.xxl,
    fontFamily: fonts.poppinsBold,
    color: colors.background,
  },
});
