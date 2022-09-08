import axios from 'axios';
// console.log(process.env.REACT_APP_YT_API_KEY);
const request = axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3/',
  params: {
    key: 'AIzaSyC8O685PeRJayf2k-r3veKBsEhkJUmFGWo',
  },
});

export default request;

//AIzaSyDbFmg4LpDxf3ulro8H0lXFNPHI2ZOtxtQ
