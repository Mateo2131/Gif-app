import Gif from '../Gif/Gif'
import getGifs from '../../services/getGifs'
import { useState, useEffect } from 'react'
import styles from './listOfGifs.module.css'
import Spinner from '../Spinner/Spinner'

function ListOfGifs({params}) {
  const [gifs, setGifs] = useState([])
  const [loading, setLoading] = useState(false)

  const { keyword } = params

  useEffect(() => {
    setLoading(true)
    getGifs({ keyword })
      .then((gifs) => {
        setGifs(gifs)
        setLoading(false)
      })
  }, [keyword])

  if(loading) <Spinner />

  return (
    <div className={styles.listOfGifs}>
      {
      gifs.map(({ id, title, url }) => (
        <Gif 
        id={id} 
        key={id} 
        title={title} 
        url={url} 
        />
      ))
      }
    </div>
  )
}

export default ListOfGifs