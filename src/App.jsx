import { Route } from 'wouter'
import Home from './pages/home/Home'
import Detail from './pages/detail/Detail'
import SearchResults from './pages/searchResults/SearchResults'
import './App.css'

function App() {
  return (
    <div className='App'>
      <Route 
        path='/search/:keyword' 
        component={SearchResults} 
      />
      <Route 
        path='/'
        component={Home}
      />
      <Route 
        path='/gif/:id'
        component={Detail}
      />
    </div>
  )
}

export default App
