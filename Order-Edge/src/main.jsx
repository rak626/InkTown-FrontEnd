import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import router from './routes.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
)
