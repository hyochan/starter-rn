import EStyleSheet from 'react-native-extended-stylesheet';
import { Platform } from 'react-native';

const styles = EStyleSheet.create({
  navBar: {
    marginTop: Platform.OS === 'ios' ? 0 : '$statusSize',
    paddingTop: Platform.OS === 'ios' ? '$statusPaddingSize' : 0,
    height: '$40',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: 'rgb(222, 226, 230)',
    borderBottomWidth: 1,
  },
  navBarNoBorder: {
    marginTop: Platform.OS === 'ios' ? 0 : '$statusSize',
    paddingTop: Platform.OS === 'ios' ? '$statusPaddingSize' : 0,
    height: '$40',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftMenu: {
    width: '$48',
    height: '$40',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  rightMenu: {
    alignItems: 'center',
    paddingRight: '$16',
    paddingLeft: '$16',
    justifyContent: 'center',
    height: '$40',
  },
});

export default styles;
