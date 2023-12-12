import logo from "./logo.svg";
import "./App.css";

function App() {
  const embedCode =
    '<iframe src="https://player.vimeo.com/video/893471945?h=5d2659220c" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen ></iframe>';

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
      }}
      dangerouslySetInnerHTML={{ __html: embedCode }}
    />
  );
}

export default App;
