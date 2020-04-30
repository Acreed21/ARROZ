// import { getStatusBarHeight } from "react-native-status-bar-height";
import React from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  Text,
  Dimensions,
  AsyncStorage,
  Alert
} from "react-native";
import RootStackNavigator from "./Navigation/RootStackNavigator";
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { Font } from "expo";
import { setCustomText } from "react-native-global-props";
import { Permissions, Notifications } from "expo";

class App extends React.Component {
  // state = {
  //   fontLoaded: false
  // };

  render() {
    const client_a = new ApolloClient({
      link: createHttpLink({ uri: "http://35.238.113.12/graphql" }),
      cache: new InMemoryCache()
    });
    return (
      <ApolloProvider client={client_a}>
        <RootStackNavigator />
      </ApolloProvider>
    );
  }
}

export default App;
