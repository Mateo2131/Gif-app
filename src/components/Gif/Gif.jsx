import { Link } from 'wouter'
import {
  GifContainer,
  GifTitle,
  GifImage
} from './gifCss.js'

function Gif({ title, id, url }) {
  return (
    <Link href={`/gif/${id}`}>
      <GifContainer>
        <GifTitle>{title}</GifTitle>
        <GifImage src={url} alt={title} />
      </GifContainer>
    </Link>
  )
}

export default Gif
