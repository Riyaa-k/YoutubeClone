import axios from "axios";
// import { useRouteLoaderData } from "react-rou


const BASE_URL='https://youtube-v31.p.rapidapi.com';
const options = {
  
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': '87c147f0efmshc8f2dbfa7edbad2p12b65djsnc50608e76893',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}


export const fetchFromAPI=async(url)=>{
   const {data}= await axios.get(`${BASE_URL}/${url}`,options);
   return data;
}