import { BrowserRouter } from 'react-router-dom'
import { LayoutRouter } from './routes/LayoutRouter'
import { GlobalProvider } from './context/provider'
import './App.css'

function App() {
  return (
    <BrowserRouter>
        <GlobalProvider>
          <LayoutRouter />
        </GlobalProvider>
    </BrowserRouter>
  )
}

export default App
