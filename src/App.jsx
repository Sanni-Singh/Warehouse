import { Provider } from 'react-redux'
import { createBrowserRouter ,  RouterProvider } from 'react-router-dom'
import './App.css'
import WarehouseContainer from './components/WarehouseContainer'
import CartDetails from './components/CartDetails'
import store from './store'

function App() {
  
  const router = createBrowserRouter([
    {
      path:"/",
      element:<WarehouseContainer/>
    },
    {
      path:"/cartDetails/:id",
      element:<CartDetails/>
    }
  ])
  return (
    <>
    <Provider store={store}>
      <RouterProvider  router={router}/>
    </Provider>
    </>
  )
}

export default App
