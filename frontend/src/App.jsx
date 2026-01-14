import { Route, Routes } from "react-router-dom"
import SignupPage from "./pages/SignupPage"
import LoginPage from "./pages/LoginPage"
import ChatPage from "./pages/ChatPage"
import { Toaster } from 'react-hot-toast';
import {useAuthStore} from './store/useAuthStore.js'
import Loader from './components/Loader.jsx'
import { useEffect } from "react";

const App = () => {

  const {authUser,isCheckingAuth,checkAuth} = useAuthStore();

  useEffect(()=>{
    checkAuth()
  },[checkAuth])

  if(isCheckingAuth) return <Loader />


  return (
    <div className="min-h-screen bg-slate-900 flex justify-center items-center p-4 relative overflow-hidden ">

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.12)_1px,transparent_1px)]bg-size-[16px_16px]" />
      <div className="absolute -top-24 -left-24 size-112  bg-indigo-500/20 blur-[140px]" />
      <div className="absolute -bottom-24 -right-24 size-112 bg-teal-400/20 blur-[140px]" />

      <Routes>
        <Route path="/" element={authUser ? <ChatPage/> : <LoginPage />} />
        <Route path="/signup" element={!authUser ? <SignupPage/> : <ChatPage />} />
        <Route path="/login" element={!authUser ? <LoginPage/> : <ChatPage />} />
      </Routes>

      <div><Toaster/></div>
    </div>
  )
}

export default App
