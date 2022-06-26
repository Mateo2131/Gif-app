import { useState, useEffect } from 'react'
import getTrending from '@/services/getTrending'
import Category from '../Category/category'

function Trending() {
  const [trens, setTrens] = useState([])

  useEffect(() => {
    getTrending()
      .then(data => setTrens(data))
  }, [])

  return <Category options={trens}></Category>
}

export default Trending