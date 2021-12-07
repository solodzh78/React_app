import { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";


export function useAuth() {
  const [authentification, setAuthentification] = useState(null);

  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const logIn = () => signInWithPopup(auth, provider)
    .then(result => {
      setAuthentification(result.user);
      console.log(result.user);
      return result.user.displayName;
    })
    .catch(err => console.error(err.code));

  const logOut = () => signOut(auth)
    .then(setAuthentification(null))
    .catch(err => console.error(err.code));

  return { authentification, logIn, logOut };
}