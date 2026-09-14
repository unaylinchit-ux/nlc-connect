import { useState, useEffect } from 'react'
import { auth, googleProvider, facebookProvider, appleProvider } from './firebase'
import { signInWithPopup, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'

export default function App(){
  const [user,setUser]=useState(null)
  const [email,setEmail]=useState('')
  const [pass,setPass]=useState('')

  useEffect(()=> onAuthStateChanged(auth, setUser), [])

  const login = async (provider) => {
    try{ await signInWithPopup(auth, provider) }catch(e){ alert(e.message) }
  }

  const emailLogin = async () => {
    try{ await signInWithEmailAndPassword(auth, email, pass) }catch(e){ alert(e.message) }
  }

  if(user){
    return (
      <div className="card" style={{textAlign:'center'}}>
        <img src={user.photoURL || 'https://i.pravatar.cc/100'} style={{width:80,height:80,borderRadius:'50%',marginBottom:12}}/>
        <h2>{user.displayName || 'Welcome'}</h2>
        <p style={{color:'#8a92a5',margin:'8px 0 20px'}}>{user.email}</p>
        <button className="btn login" onClick={()=>signOut(auth)}>Log Out</button>
      </div>
    )
  }

  return (
    <div className="card">
      <div className="logo">NLC CONNECT</div>
      <div className="sub">V12 INTERNATIONAL LOGIN EDITION</div>
      <button className="btn btn-google" onClick={()=>login(googleProvider)}>🌐 Continue with Google</button>
      <button className="btn btn-facebook" onClick={()=>login(facebookProvider)}>📘 Continue with Facebook</button>
      <button className="btn btn-apple" onClick={()=>login(appleProvider)}>🍎 Continue with Apple</button>
      <div className="divider">OR</div>
      <input className="input" placeholder="Email address" value={email} onChange={e=>setEmail(e.target.value)}/>
      <input className="input" type="password" placeholder="Password" value={pass} onChange={e=>setPass(e.target.value)}/>
      <button className="btn login" onClick={emailLogin}>Log In</button>
    </div>
  )
}
