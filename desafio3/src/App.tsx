import { useEffect, useState } from 'react'
import AuthService from './service/auth.service'
import { authContext } from "./context/auth.context";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import { User } from "./model/auth.model";
import Login from "./pages/Login";
import Home from './pages/Home';
import Template from './pages/Template';

function App() {

  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const hasUser = async () => {
      try {
        const data = await AuthService.getUser()
        setUser(data)
        setLoading(false)
      } catch (error) {
        setLoading(false)
      }
    }

    void hasUser()
  }, [])

  const signOut = () => {
    void AuthService.logout()
    setUser(null)
  }


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Template >{Outlet}</Template>,
      children: [
        {path: '/', element: <Home />}
      ]
    },
  ]);

  if (loading) return

  if (!user) {
    return <Login setUser={setUser}/>
  }

  return (
    <authContext.Provider value={{user, signOut}}>
        <RouterProvider router={router} />
    </authContext.Provider>
  );
}

export default App;
