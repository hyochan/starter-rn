import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';
const { width, height, } = Dimensions.get('window');
const ratio = (16 * (width / height));
const screenRatio = (ratio < 9 ? width / 9 : height / 16) / (360 / 9);
console.log(`\n   Screen: ${width}x${height} screenRatio : ${screenRatio}`);

const styles = EStyleSheet.create({

});

module.exports = {
  stylesCommon: styles,
  ratio: screenRatio,
  width,
  height,
};
