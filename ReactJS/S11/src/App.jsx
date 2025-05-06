import Header from "./Header";
import Footer from "./Footer";
function App() {
  return (
    <div>
      <h1>App Component</h1>
      <hr />

      <Header title={1} name={"hello"} f1={{ name: "AIT" }} />

      <Header title={2} name={"hi"} f1={{ name: "React JS" }} />

      <Footer />
    </div>
  );
}

export default App; //Default Export
