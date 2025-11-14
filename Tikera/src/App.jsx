import Menu from './views/layout/Menu'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div data-theme="dark">
      <Routes>
        <Route path={`/`} element={<Menu/>} />
        <Route path={`/:day`} element={<Menu/>} />
      </Routes>
    </div>
  )
}

export default App
