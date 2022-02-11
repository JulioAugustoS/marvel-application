import { AppRoutes } from "./router";
import { GlobalStyle } from "./global/style.global";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppRoutes />
    </>
  );
};

export default App;
