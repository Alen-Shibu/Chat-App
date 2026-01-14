import { Route, Routes } from "react-router-dom"
import SignupPage from "./pages/SignupPage"
import LoginPage from "./pages/LoginPage"
import ChatPage from "./pages/ChatPage"
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-900 flex justify-center items-center p-4 relative overflow-hidden ">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[14px_24px]" />
      <div className="absolute top-0 -left-4 size-96 bg-pink-500 opacity-20 blur-[100px]" />
      <div className="absolute bottom-0 -right-4 size-96 bg-cyan-500 opacity-20 blur-[100px]" />
      <Routes>
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/" element={<ChatPage/>} />
      </Routes>

      <div><Toaster/></div>
    </div>
  )
}

export default App
