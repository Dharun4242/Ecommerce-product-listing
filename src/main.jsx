
import { createRoot } from 'react-dom/client'
import { ApolloProvider } from '@apollo/client'
import './index.css'
import App from './App.jsx'
import client from './apollo/client.js'

createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <App />
    </ApolloProvider>,
)
