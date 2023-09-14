import {useEffect, useState} from 'react';
import {onAuthStateChanged, User} from 'firebase/auth';
import {authentication} from '../FirebaseConfig';

export function useAuth() {
  const [user, setUser] = useState(User);

  useEffect(() => {
    const unsubscribeFromAuthStateChanged = onAuthStateChanged(
      authentication,
      user => {
        if (user) {
          // User is signed in
          setUser(user);
        } else {
          // User is signed out
          setUser(undefined);
        }
      },
    );

    return unsubscribeFromAuthStateChanged;
  }, []);

  return {
    user,
  };
}
