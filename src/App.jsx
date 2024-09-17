
import { Provider } from 'react-redux'
import './App.css'
import CounterApp from './components/CounterApp'
import store from './store'

function App() {

  return (
    <>
      <Provider store={store}>

        <CounterApp />
      </Provider>
    </>
  )
}

export default App
