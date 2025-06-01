import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'
import './css/BootStrapMin.css';
import './css/MagnificPopup.css';
import './css/Main.css';
import './css/OwlCarouselMin.css';
import './css/OwlThemeDefault.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
