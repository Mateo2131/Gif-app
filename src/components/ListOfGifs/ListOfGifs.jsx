import Gif from '../Gif/Gif'
import './listOfGifs.css'

function ListOfGifs({gifs}) {
  return (
    <div className='listOfGifs'>
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