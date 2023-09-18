import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 25,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(71, 71, 71,1)'
    // backgroundColor: '#4C0033'
  },
  heading: {
    color: 'rgba(230,230,230,1)',
    fontFamily: 'Finger Paint',
  },
  image: {
    marginLeft: '15px',
  },
  blue: {
    color: 'rgba(1,128,184,1)'
  },
  red:{
    color: 'rgba(197,8,81,1)'
  },
  green:{
    color: 'rgba(15,168,58,1)'
  }
}));