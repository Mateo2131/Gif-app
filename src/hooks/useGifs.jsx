import { useEffect,useState, useContext } from "react"
import GetGifs from "../services/getGifs"
import GifsContext from "../context/GifsContext"

function UseGifs({ keyword } = {keyword: null}) {
  const { gifs, setGifs } = useContext(GifsContext)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    
    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

    GetGifs({ keyword: keywordToUse }).then((gifs) => {
      setGifs(gifs)
      setLoading(false)
      if (keyword) localStorage.setItem('lastKeyword', keyword)
    })
  }, [keyword, setGifs])

  return { loading , gifs }
}

export default UseGifs