// // src/utils/fontSizes.js

// import { RFValue } from "react-native-responsive-fontsize";

// export default {
//   xs: RFValue(10),
//   sm: RFValue(12),
//   md: RFValue(14),
//   lg: RFValue(16),
//   xl: RFValue(18),
//   xxl: RFValue(22),
//   heading: RFValue(26),
//   title: RFValue(30),
// };















// src/utils/fontSize.js
import { Dimensions, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const scale = SCREEN_WIDTH / 375;

const normalize = (size) => {
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

const fontSize = {
  xs: normalize(10),
  sm: normalize(12),
  md: normalize(14),
  lg: normalize(16),
  xl: normalize(20),
  xxl: normalize(24),
  xxxl: normalize(28),
};

export default fontSize;
