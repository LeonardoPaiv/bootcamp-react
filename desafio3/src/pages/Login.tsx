import { TextField, Button } from "@mui/material";
import { useState, useCallback } from "react";
import { Ilogin, User } from "../model/auth.model";
import AuthService from "../service/auth.service";

interface ILoginProps {
  setUser: (user: User) => void;
}

const Login = (props: ILoginProps) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState("");

  const handleSubimit = useCallback(
    async (event: React.FormEvent) => {
      const signIn = async (login: Ilogin) => {
        try {
          const user = await AuthService.createSession(login);
          props.setUser(user);
          setError("");
        } catch (err) {
          setError("Email or password wrong");
        }
      };

      event.preventDefault();
      await signIn({ email, senha: password });
    },
    [email, password, props]
  );

  return (
    <div className="flex justify-content-center">
      <form
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={handleSubimit}
        className="flex h-screen w-6"
      >
        <div className="my-auto flex flex-column w-full">
          <h1 className="text-center my-3 ">Login</h1>
          <TextField
            label="Email"
            fullWidth
            className="my-2"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            error={!!error}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            className="my-2"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            error={!!error}
          />
          <small className="text-red-400 my-2">{error}</small>
          <Button variant="contained" type="submit">
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
