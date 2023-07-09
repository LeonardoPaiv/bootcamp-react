import Card from "./components/Card";
import Header from "./components/Header";

function App() {

  return (
    <div className="flex flex-column w-full">
      <Header titulo="titulo" />
      <Card></Card>
    </div>
  );
}

export default App;
