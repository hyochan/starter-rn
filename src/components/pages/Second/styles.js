import EStyleSheet from 'react-native-extended-stylesheet';
import { Platform } from 'react-native';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : '$statusSize',
    paddingTop: Platform.OS === 'ios' ? '$statusPaddingSize' : 0,
    backgroundColor: 'white',
  },
  header: {
    flex: 8.8,
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    flex: 87.5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  viewTop: {
    height: '$64',
    alignSelf: 'stretch',
    flexDirection: 'row',
    paddingLeft: '$32',
    paddingRight: '$32',

    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  topImg1: {
    width: '$28',
    height: '$28',
    marginRight: '$16',
  },
  topImg2View: {
    position: 'absolute',
    top: '$28',
    bottom: '$16',
    right: '$28',
  },
  topImg2: {
    width: '$28',
    height: '$28',
  },
  topOval: {
    position: 'absolute',
    top: '$20',
    right: '$20',
    backgroundColor: 'red',
    width: '$20',
    height: '$20',
    borderRadius: '10 * $ratio',

    justifyContent: 'center',
    alignItems: 'center',
  },
  topOvalTxt: {
    color: 'white',
    fontSize: '$12',
  },
  fontBlackStyle: {
    fontSize: '$16',
    color: 'black',
  },
  fontGrayStyle: {
    fontSize: '$16',
    color: '#eee',
  },
});

export default styles;
