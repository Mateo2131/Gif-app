import Gif from '../Gif/Gif'
import styles from './listOfGifs.module.css'

function ListOfGifs({gifs}) {
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