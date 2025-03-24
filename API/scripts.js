//https://www.omdbapi.com/ Open API use for later
const OMDB_API_KEY = "48ab736e";

// https://www.omdbapi.com/?apikey=[yourkey]&

const omdbSearchReq = async (search) => {
  const res = await fetch(`https://www.omdbapi.com?apikey=${OMDB_API_KEY}&s=${search}`)
  const poster = await fetch ('http://img.omdbapi.com/?apikey=[yourkey]&')
  const toJson = await res.json()
  return toJson
} 

//http://img.omdbapi.com/?apikey=[yourkey]&
// https://www.omdbapi.com/?apikey=48ab736e&s=spiderman

