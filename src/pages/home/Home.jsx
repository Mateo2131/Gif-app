import { useLocation } from 'wouter'
import { useState } from 'react'
import UseGifs from '@/hooks/useGifs'
import ListOfGifs from '@/components/ListOfGifs/ListOfGifs'
import Trending from '@/components/Trending/trending'

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
      <form onSubmit={handleSubmit} className='Search-form'>
        <button className='Search-form__btn'>Buscar</button>
        <input 
          type="text" 
          value={keyword} 
          placeholder='Search...'
          onChange={handleChange}
          className='Search-form__input'
        />
      </form>
      <Trending />
      <h3 className='App-title'>Ultima Busqueda</h3>
      <ListOfGifs gifs={gifs} />
    </>
  )
}

export default Home
