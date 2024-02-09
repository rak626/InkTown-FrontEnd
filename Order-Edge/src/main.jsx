import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import {
    RouterProvider,
} from 'react-router-dom'
import './index.css'
import router from './routes.jsx'


const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
