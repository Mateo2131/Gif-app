import { useEffect, useState, useContext } from 'react'
import GetGifs from '@/services/getGifs'
import GifsContext from '@/context/GifsContext'

const INITIAL_PAGE = 0

function UseGifs({ keyword } = { keyword: null }) {
  const { gifs, setGifs } = useContext(GifsContext)
  const [page, setPage] = useState(INITIAL_PAGE)
  const [loadingNextPage, setLoadingNextPage] = useState(false)
  const [loading, setLoading] = useState(false)

  const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

  useEffect(() => {
    setLoading(true)

    GetGifs({ keyword: keywordToUse }).then((gifs) => {
      setGifs(gifs)
      setLoading(false)
      if (keyword) localStorage.setItem('lastKeyword', keyword)
    })
  }, [keyword, keywordToUse, setGifs])

  useEffect(() => {
    if (page === INITIAL_PAGE) return

    setLoadingNextPage(true)

    GetGifs({ keyword: keywordToUse, page }).then((nextGifs) => {
      setGifs((prevGifs) => [...prevGifs, ...nextGifs])
      setLoadingNextPage(false)
    })
  }, [page , keywordToUse])

  return { loading, gifs , loadingNextPage, setPage }
}

export default UseGifs
