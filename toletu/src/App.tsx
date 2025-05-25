import { useInitUserSettings } from './hooks/useInitUserSettings'
import './App.css'
import { AppRouter } from '@/routes/AppRouter'

function App() {
  useInitUserSettings() // <- valid hook usage here
  console.log('App component mounted') // debug

  return (
    <>
      <AppRouter />
    </>
  )
}

export default App
