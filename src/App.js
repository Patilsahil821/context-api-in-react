import ReactS from "react";
import B from "./B";
import {ThemeContextProvider} from "./ThemeContextProvider";

function App() {
  return (
    <div>
      <ThemeContextProvider>
        <B />
      </ThemeContextProvider>
    </div>
  );
}
export default App;
