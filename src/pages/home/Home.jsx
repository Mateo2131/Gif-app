import { Link } from 'wouter'
const POPULAR_GIFS = ['Programming', 'Chile', 'Panda']

function Home() {
  return (
    <div className='Home'>
      <h3>Los gifs mas populares</h3>
      <ul>
        {POPULAR_GIFS.map((popularGif) => {
          return (
            <li key={popularGif}>
              <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Home
