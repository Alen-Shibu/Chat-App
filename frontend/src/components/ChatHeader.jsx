import { useEffect } from "react"
import { useChatStore } from "../store/useChatStore"
import {XIcon} from 'lucide-react'


const ChatHeader = () => {
        const {selectedUser,setSelectedUser} = useChatStore()

    useEffect(()=>{
        const handleEscapeKey = (event) => {
            if(event.key === "Escape") setSelectedUser(null)
        }
        window.addEventListener('keydown',handleEscapeKey)

        return() => window.removeEventListener('keydown',handleEscapeKey)
    },[setSelectedUser])




  return (
      <div className="h-16 bg-linear-to-r from-slate-800 to-slate-900 border-b border-slate-700 px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={selectedUser.profilePic || '/avatar.png'}
            alt="Contact"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="text-white font-semibold">John Doe</p>
            <p className="text-slate-400 text-xs">Online</p>
          </div>
        </div>
        <button onClick={() => setSelectedUser(null)} className="text-slate-400 hover:text-indigo-400 transition">
            <XIcon className="size-5 text-slate-400 hover:text-slate-200 transition-colors" />
        </button>
      </div>
  )
}

export default ChatHeader
