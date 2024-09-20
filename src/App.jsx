
import { Provider } from 'react-redux'
import './App.css'
// import CounterApp from './components/CounterApp'
import DataList from './components/DataList'
import store from './store'

function App() {

  return (
    <>
      <Provider store={store}>

        {/* <CounterApp /> */}
        <DataList/>
      </Provider>
    </>
  )
}

export default App
