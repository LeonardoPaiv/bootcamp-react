import Header from "./components/Header";
import FlashCards from "./pages/FlashCards";

function App() {

  return (
    <div className="flex flex-column w-full">
      <Header titulo="Flash Cards"/>
      <FlashCards />      
    </div>
  );
}

export default App;
