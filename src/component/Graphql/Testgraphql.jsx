import React from "react";
import "./Testgraphql.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

var client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

const EXCHANGE_RATES = gql`
  query {
    episodesByIds(ids: [1]) {
      name
      characters {
        id
        name
        species
      }
    }
  }
`;

function ExchangeRates() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);
  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.episodesByIds.map(({ name, characters }) => (
    <div key={name} >
        <div class="center"> Rick and Morty </div>
       <div class="center">-- Episodes : {name} --</div>
      {characters.map(({ id,name, species }) => (
        <div class="list-name" classkey={name} key={id}>
          Name : {name} / {species}
        </div>
      ))}
    </div>
  ));
}

export default class Testgraphql extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div class="border">
          <h2 class="header">Test GraphQl</h2>
          <ExchangeRates  />
        </div>
      </ApolloProvider>
    );
  }
}
