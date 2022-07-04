const API_KEY = process.env.REACT_APP_API_KEY;

const requests={
   fetchTrending: `/trending/all/week?api_key=${API_KEY}`,
   fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
   fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
   fetchLatest: `/movie/latest&api_key=${API_KEY}&language=en-US`,
}

export default requests;