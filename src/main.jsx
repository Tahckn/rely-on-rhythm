import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ErrorPage } from './components'
import App from './App'
import './index.css'
import { store } from './stores'
import { Provider } from 'react-redux'

const router = createBrowserRouter([
  {
    path: '*',
    element: <App />,
    errorElement: <ErrorPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} fallbackElement={<App />} />
    </Provider>
  </React.StrictMode>
)
