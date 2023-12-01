import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/index.ts'
import AuthLayout from './lib/AuthLayout.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthLayout>
    <App />
    </AuthLayout>
    </Provider>
  
  </React.StrictMode>,
)
