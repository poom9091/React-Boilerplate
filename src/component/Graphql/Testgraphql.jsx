import React from "react";
import { render } from "react-dom";
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

  return data.episodesByIds.map(({ name, characters  }) => (
    <div key={name}>
          Episodes : {name}
          { characters.map(({name,species}) => (
            <p key={name}>
              {name} : {species}
            </p>
          ))}
    </div>
  ));

}

export default class Testgraphql extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <h2>Test GraphQl</h2>
        <ExchangeRates />
      </ApolloProvider>
    );
  }
}
