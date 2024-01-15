//Firebase
import appFirebase from '../src/credenciales'
import {getAuth, onAuthStateChanged}from 'firebase/auth'
const auth = getAuth(appFirebase)

//Componentes
import Login from './Christofer/Login'
import Home from './Christofer/Home'
import './App.css'
import { useState } from 'react'

function App() {

const [usuario,setUsuario] = useState(null)

onAuthStateChanged (auth, (usuarioFirebase)=>{
if (usuarioFirebase){
  setUsuario(usuarioFirebase)
}else{
  setUsuario(null)
}

})
  return (
    <>
    {usuario ? <Home correoUsuario = {usuario.email}/> : <Login/>}
    
    </>
  )
}
export default App