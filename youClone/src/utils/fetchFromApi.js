import axios from "axios";

const URL='https://youtube-v31.p.rapidapi.com';
const options = {
  method: 'GET',
  params: {
    maxResults: '5'
  },
  headers: {
    'X-RapidAPI-Key':"87c147f0efmshc8f2dbfa7edbad2p12b65djsnc50608e76893",
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
   const {data}= await axios.get(`${URL}/${url}`,options);
   return data;
}