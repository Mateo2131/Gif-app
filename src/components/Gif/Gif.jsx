import { Link } from 'wouter'
import './gif.css'

function Gif({ title, id, url }) {
  return (
    <Link href={`/gif/${id}`}>
      <div className='gif'>
        <h4 className='gif-title'>{title}</h4>
        <img src={url} alt={title} className='gif-image' />
      </div>
    </Link>
  )
}

export default Gif
