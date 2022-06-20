import { useState, useEffect } from 'react'
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs'
import Spinner from '../../components/Spinner/Spinner'
import getGifs from '../../services/getGifs'

function SearchResults({ params }) {
  const { keyword } = params
  const [gifs, setGifs] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getGifs({ keyword }).then((gifs) => {
      setGifs(gifs)
      setLoading(false)
    })
  }, [keyword])

  return <>{loading ? <Spinner /> : <ListOfGifs gifs={gifs} />}</>
}

export default SearchResults
