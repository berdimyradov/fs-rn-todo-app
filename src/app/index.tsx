import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Platform, StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import { Routing } from "./routes";
import { store } from "./store";

const queryClient = new QueryClient();

export default function App() {
  return (
    <View style={styles.root}>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <Routing />
        </Provider>
      </QueryClientProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: "100%",
    ...Platform.select({
      web: {
        maxWidth: 480,
        marginHorizontal: "auto",
      },
    }),
  },
});
