import Gif from '../Gif/Gif'
import { GifsContainer } from './listOfGifsCss.js'

function ListOfGifs({ gifs }) {
  return (
    <GifsContainer>
      {gifs.map(({ id, title, url }) => (
        <Gif id={id} key={id} title={title} url={url} />
      ))}
    </GifsContainer>
  )
}

export default ListOfGifs
