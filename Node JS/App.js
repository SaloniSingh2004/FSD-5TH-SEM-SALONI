import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [output, setOutput] = useState("");

  const writeData = async () => {
    await fetch("http://localhost:5000/write", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text })
    });
    alert("Data written to file");
  };

  const readData = async () => {
    const res = await fetch("http://localhost:5000/read");
    const data = await res.text();
    setOutput(data);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">MyApp</h2>
      </nav>

      {/* Form */}
      <div className="container">
        <h1>FS model for Node</h1>

        <input
          type="text"
          placeholder="Enter text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <div>
          <button onClick={writeData}>Write</button>
          <button onClick={readData}>Read</button>
        </div>

        <p className="output">{output}</p>
      </div>
    </div>
  );
}

export default App;
