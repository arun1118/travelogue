
import { makeStyles } from '@material-ui/core/styles';
// const imgUrl='https://balloonfiesta.com/get/files/image/galleries/L37A1375.jpg';
// const imgUrl='https://cdn5.vectorstock.com/i/1000x1000/09/74/chinese-lanterns-in-the-night-sky-vector-5820974.jpg';
// const imgUrl='https://images.pexels.com/photos/1257860/pexels-photo-1257860.jpeg?cs=srgb&dl=pexels-philippe-donn-1257860.jpg&fm=jpg'
const imgUrl='https://wallpaperwaifu.com/wp-content/uploads/2021/10/lanterns-in-night-sky-thumb-1500x844.jpg';
// import imgUrl from './formImage.jpg';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    borderRadius: '8%',
    // backgroundColor: 'rgba(100,100,100,1)'
    // backgroundImage: `url(${imgUrl})`,
    backgroundImage: `url(${imgUrl})`,
    backgroundPosition: 'center',
    // backgroundColor: '#AF0171'
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
    backgroundColor: 'rgba(100,100,100,0.4)'
  },
  buttonSubmit: {
    marginBottom: 10,
    marginRight: 5,
    borderRadius: '15%',
    width: '30%',
    backgroundColor: 'rgba(100,100,100,1)',
    fontSize: '20px',
    fontFamily: 'Kalam',
    color: 'rgba(220,220,220,1)',
    '&:hover': {
      borderRadius: '5%',
      backgroundColor: 'rgba(1,128,184,1)',
    },
  },
  buttonClear: {
    marginBottom: 10,
    marginLeft: 5,
    borderRadius: '15%',
    width: '30%',
    backgroundColor: 'rgba(100,100,100,1)',
    fontSize: '20px',
    fontFamily: 'Kalam',
    color: 'rgba(220,220,220,1)',
    '&:hover': {
      backgroundColor: 'rgba(197,8,81,1)',
      borderRadius: '5%',
    },
  },
  whiteBackground:{
    background: 'rgba(230,230,230,0.6)'
  },
  formHeading:{
    color: 'rgba(200,200,200,1)',
    fontFamily: 'Finger Paint',
    fontSize: '25px'
  }
}));
