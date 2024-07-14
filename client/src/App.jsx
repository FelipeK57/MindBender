import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Game } from "./components/Game";

function App() {
  const [topic, setTopic] = useState(null);

  return (
    <>
      {topic ? (
        <div>
          <Header />
          <Game topic={topic} />
        </div>
      ) : (
        <div>
          <Header />
          <Home setTopic={setTopic} />
        </div>
      )}
    </>
  );
}

export default App;
