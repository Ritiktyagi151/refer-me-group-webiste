import AppProvider from "./provider/AppProvider";
import Routing from "./routes/Routing";

function App() {
  return (
    <AppProvider>
      <Routing />
    </AppProvider>
  );
}

export default App;
