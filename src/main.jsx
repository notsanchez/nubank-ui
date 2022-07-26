import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './theme/theme.css'
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/StateProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <App />
      </Router>
    </AuthProvider>
  </React.StrictMode>
)
