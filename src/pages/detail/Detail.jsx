import { useContext} from 'react'
import GifsContext from '../../context/GifsContext'
import Gif from '../../components/Gif/Gif'

function Detail({ params }) {
  const {gifs} = useContext(GifsContext)
  const gif = gifs.find(singleGif => singleGif.id === params.id)

  return <Gif {...gif} />
}

export default Detail
