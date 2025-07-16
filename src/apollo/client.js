import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://fakeql.com/graphql/2f8886cefe990aee8d81e4ac286fa9a7',
  cache: new InMemoryCache(),
});

export default client;
