import EStyleSheet from 'react-native-extended-stylesheet';
import { Platform } from 'react-native';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: Platform.OS === 'ios' ? 0 : '$statusSize',
    paddingTop: Platform.OS === 'ios' ? '$statusPaddingSize' : 0,
    backgroundColor: 'white',
  },
  header: {
    flex: 8.8,
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 87.5,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignSelf: 'stretch',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: '$24',
    fontWeight: 'bold',
  },
});

export default styles;
