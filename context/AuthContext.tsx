import { createContext, useContext, useEffect, useState } from 'react'
import { collection, getDoc, getDocs, setDoc, doc } from 'firebase/firestore'
import { onAuthStateChanged, createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,signInWithPopup } from 'firebase/auth'
import { db, auth, provider } from '../config/firebase'
import { FireIcon } from '@heroicons/react/24/solid'

const AuthContext = createContext<any>({})


export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({ children }: {children: React.ReactNode }) => {
  const [user, setUser] = useState <any>(null)
  const [projectUsers, setProjectUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [Projects, setProjects] = useState([])



  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
   // Confirms Login
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photo: user.photoURL,
        })
          addProjectUserToFirebase(user)
        }
        else 
        {
        setUser(null)
        }
      setLoading(false)
    })
    return () => unsubscribe()
  }, [])

  useEffect(() => {
    const getProjectUsers = async () => {
      const querySnapshot = await getDocs(collection(db, 'ProjectUsers'))

      setProjectUsers(querySnapshot.docs.map(doc => {
        return {
          id: doc.id,
          data: {
            ...doc.data()
          }
        }
      }))
    }
    getProjectUsers()
  }, [])


  const addProjectUserToFirebase = async user => {
   
    const docRef = await doc(db, "ProjectUsers", user.uid)
    const docSnap = await getDoc(docRef);

    if (!docSnap?.exists()) {
      await setDoc(doc(db, 'ProjectUsers', user.uid), {
        uid: user.uid,
        email: user.email,
        name: user.displayName,
        photoURL: user.photoURL,
      })
    }
  }

  const googleSignin = async () => {
    await signInWithPopup(auth, provider)
  }

  const signup = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password)

  }

  const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logout = async () => {
    setUser(null)
    await signOut(auth)
  }

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, googleSignin,addProjectUserToFirebase}}>
      {loading ? null : children} 
    </AuthContext.Provider>
  )
}