import { ApolloProvider } from '@apollo/client';
import client from '../components/Client';
import '../styles/globals.css';

require('dotenv').config();

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
