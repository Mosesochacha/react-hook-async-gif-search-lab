import React,{ useState,useEffect} from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch'
const GifListContainer = () => {

    const[gif, setGif] = useState([])
    const [search, setSearch] = useState("dolphins");
    

    useEffect(()=>{
        fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
        .then((res)=>res.json())
        .then(({data})=>{
            const gifs = data.map((gif) => ({ url: gif.images.original.url }));
            setGif(gifs);
        })
    
    },[search])


  return (
    <div>
     <GifList gifs={gif} />
      <GifSearch onSubmitQuery={setSearch} />
    </div>
  )
}

export default GifListContainer
