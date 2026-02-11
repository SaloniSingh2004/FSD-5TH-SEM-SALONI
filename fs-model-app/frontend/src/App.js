import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [fileContent, setFileContent] = useState("");

  // WRITE (simulate fs.writeFile)
  const writeFile = () => {
    localStorage.setItem("fsData", text);
    alert("File Written Successfully (localStorage)");
  };

  // READ (simulate fs.readFile)
  const readFile = () => {
    const data = localStorage.getItem("fsData");
    setFileContent(data || "No data found");
  };

  return (
    <div>
      {/* Navbar */}
      <nav style={navStyle}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img src="/abes.jpg" alt="ABES Logo" style={{ height: "40px" }} />
          <span>ABES</span>
        </div>

        <div>
          <a href="#" style={linkStyle}>Home</a> |{" "}
          <a href="#" style={linkStyle}>Contact</a>
        </div>
      </nav>

      {/* Content */}
      <div style={{ padding: "20px" }}>
        <h2>FS Module for Node (React Simulation)</h2>

        <textarea
          rows="5"
          cols="40"
          placeholder="Enter text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <br /><br />

        <button onClick={writeFile}>FS Write</button>
        <button onClick={readFile} style={{ marginLeft: "10px" }}>
          FS Read
        </button>

        <h3>File Content:</h3>
        <p>{fileContent}</p>
      </div>
    </div>
  );
}

const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  padding: "10px 20px",
  background: "#222",
  color: "white",
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
};

export default App;
