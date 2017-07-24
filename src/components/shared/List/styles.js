import EStyleSheet from 'react-native-extended-stylesheet';
import { Platform, } from 'react-native';

const styles = EStyleSheet.create({
  container: {
    marginTop: '$36',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignSelf: 'stretch',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  categoryView: {
    paddingLeft: 16,
    paddingRight: 16,
    height: '$32',
    borderWidth: 1,
    borderColor: '#41b9e4',
    borderRadius: 100,

    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryTxt: {
    color: '#41b9e4',
    fontSize: '$12',
  },
  imgThumb: {
    marginTop: '$24',
    marginBottom: '$24',
    width: '300 * $ratio',
    height: '300 * $ratio',
    borderRadius: '150 * $ratio',
  },
  viewAreaGroup: {
    flexDirection: 'row',
    paddingLeft: '$32',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  viewArea: {
    height: '$24',
    width: '$48',
    borderWidth: 1,
    borderColor: '#d8d8d8',
    marginRight: '$8',

    alignItems: 'center',
    justifyContent: 'center',
  },
  txtArea: {
    color: '#a6a6a6',
    fontSize: '$12',
  },
  content: {
    flexDirection: 'column',
    paddingLeft: '$32',
    alignSelf: 'stretch',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  txtTitle: {
    marginTop: '$16',
    color: 'black',
    fontSize: '$20',
  },
  txtPrice: {
    marginTop: '$20',
    color: 'black',
    fontSize: '$fontSize',
  },
  viewReview: {
    flexDirection: 'row',
    paddingLeft: '$32',
    paddingRight: '$32',
    marginBottom: '$40',
    marginTop: '$40',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  viewReviewStar: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  txtDate: {
    fontSize: '$12',
    color: '#999',
  },
  txtReview: {
    fontSize: '$12',
    color: 'black',
    marginBottom: '$8',
  }
});

export default styles;
