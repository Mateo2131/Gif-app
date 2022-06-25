import { Route } from 'wouter'
import Home from './pages/home/Home'
import SearchResults from './pages/searchResults/SearchResults'
import Detail from './pages/detail/Detail'
import { GifsContextProvider } from './context/GifsContext'
import StaticContext from './context/StaticContext'
import Header from './components/Header/Header'
import './App.css'

function App() {
  return (
    <StaticContext.Provider value={{}}>
      <div className='App'>
        <Header />
        <GifsContextProvider>
          <Route path='/search/:keyword' component={SearchResults} />
          <Route path='/' component={Home} />
          <Route path='/gif/:id' component={Detail} />
          <Route path='/:category' />
          <Route path='/login' />
          <Route path='/register' />
        </GifsContextProvider>
      </div>
    </StaticContext.Provider>
  )
}

export default App
