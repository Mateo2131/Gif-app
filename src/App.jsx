import { Route, Link } from 'wouter'
import Home from './pages/home/Home'
import SearchResults from './pages/searchResults/SearchResults'
import Detail from './pages/detail/Detail'
import { GifsContextProvider } from './context/GifsContext'
import StaticContext from './context/StaticContext'
import './App.css'

function App() {
  return (
    <StaticContext.Provider value={{}}>
    <div className='App'>
      <Link to='/'>
        <figure className='App-logo'>
          <img alt='Giffy logo' src='/logo.png' />
        </figure>
      </Link>
      <GifsContextProvider>
        <Route path='/search/:keyword' component={SearchResults} />
        <Route path='/' component={Home} />
        <Route path='/gif/:id' component={Detail} />
      </GifsContextProvider>
    </div>
    </StaticContext.Provider>
  )
}

export default App
