import { AuthenticUserProvider } from "./Providers/Users/AuthentUserContext";
import { RoutesMain } from "./Routes";

function App() {
  return (
    <AuthenticUserProvider>
      <RoutesMain />;
    </AuthenticUserProvider>
  );
}

export default App;
