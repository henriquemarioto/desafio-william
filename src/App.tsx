import { useState } from "react";
import Panel from "./components/Panel";
import { Content } from "./style";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Content>
        <Panel />
      </Content>
    </div>
  );
}

export default App;
