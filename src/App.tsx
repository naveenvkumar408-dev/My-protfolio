import Navbar from './Components/Navbar'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <div className="min-h-screen bg-[rgb(var(--bg))] text-[rgb(var(--text))]">
      <Navbar />
      <Dashboard />
    </div>
  )
}

export default App
