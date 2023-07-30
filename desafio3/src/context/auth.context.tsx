import React from "react";
import { User } from "../model/auth.model";


export const authContext = React.createContext<{user: User, signOut: () => void}  | null>({
    user: {
        email: '',
        nome: ''
    },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    signOut: () => {}
})