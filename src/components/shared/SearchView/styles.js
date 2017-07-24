import EStyleSheet from 'react-native-extended-stylesheet';
import { Platform } from 'react-native';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignSelf: 'stretch',
    alignItems: 'flex-start',
  },
  menu: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 32,
    paddingRight: 32,
    height: '$60',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  img: {
    width: '$24',
    height: '$24',
    marginRight: '$16',
  },
  textInput: {
    fontSize: '$fontSize',
  },
  menu3View: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  menu3txt: {
    color: '#bbb',
    fontSize: '$fontSize',
  },
  btnTxtStyle: {
    marginLeft: '$32',
    marginRight: '$32',
    fontSize: '$fontSize',
    color: '#fff',
  },
  btnStyle: {
    marginTop: '$24',
    marginLeft: '$28',
    marginRight: '$28',
    height: 48,
    backgroundColor: 'black',
    borderRadius: 100,
    borderColor: '#ced4da',
  },
  peopleView: {
    flexDirection: 'row',
    paddingTop: '6 * $ratio'
  },
  peopleBtnS: {
    height: '$28',
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'black',
    borderRadius: 20,
  },
  peopleBtnN: {
    height: '$28',
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 20,
    backgroundColor: 'white',
  },
  peopleTxtS: {
    color: 'white',
    fontSize: '14 * $ratio',
  },
  peopleTxtN: {
    color: '#bbb',
    fontSize: '14 * $ratio',

  },
});

export default styles;
