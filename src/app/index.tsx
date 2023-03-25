import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { Routing } from "./routes";
import { store } from "./store";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Routing />
      </Provider>
    </QueryClientProvider>
  );
}
