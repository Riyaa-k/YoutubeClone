import axios from "axios";
// import { useRouteLoaderData } from "react-rou


const BASE_URL='https://youtube-v31.p.rapidapi.com';
const options = {
  
  params: {
    maxResults: 1,
  },
  headers: {
    'X-RapidAPI-Key': '6bacc1ca5dmsh6711665f6d75203p1d75abjsn59237c09b218',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }


export const fetchFromAPI=async(url)=>{
   const {data}= await axios.get(`${BASE_URL}/${url}`,options);
   return data;
}