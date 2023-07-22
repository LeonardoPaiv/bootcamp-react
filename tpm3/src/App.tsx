import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DespesasMain from "./pages/DespesasMain";

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <DespesasMain />
    }
  ])

  return (
    <div className="d-flex flex-column min-h-screen">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
