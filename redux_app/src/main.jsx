import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './store/store.jsx'

createRoot(document.getElementById('root')).render(

    <App />
)
