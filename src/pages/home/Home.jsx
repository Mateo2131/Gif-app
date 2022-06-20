import { useLocation } from 'wouter'
import { useState } from 'react'
import UseGifs from '../../hooks/useGifs'
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs'

function Home() {
  const [keyword, setKeyword] = useState('')
  const [ path, pushLocation ] = useLocation()
  const {loading, gifs } = UseGifs()

  const handleSubmit = (e) => {
    e.preventDefault()
    pushLocation(`/search/${keyword}`)
  }

  const handleChange = (e) => {
    setKeyword(e.target.value)
  }

  return (
    <>
      <h3>Los gifs mas populares</h3>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={keyword} 
          placeholder='Search...'
          onChange={handleChange}
        />
      </form>
      <ListOfGifs gifs={gifs} />
    </>
  )
}

export default Home
