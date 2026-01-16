import { useState, useRef } from "react";
import { LogOutIcon, VolumeOffIcon, Volume2Icon } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";

const mouseClickSound = new Audio("/sounds/mouse-click.mp3");

function ProfileHeader() {
  const { logout, authUser, updateProfile } = useAuthStore();
  const { isSoundEnabled, toggleSound } = useChatStore();
  const [selectedImg,setSelectedImg] = useState(null)

  const fileInputRef = useRef(null)

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if(!file) return;

    const reader = new FileReader()
    reader.readAsDataURL(file)

    reader.onloadend = async() => {
      const base64img = reader.result;
      setSelectedImg(base64img)
      await updateProfile({profilePic:base64img})
    }
  };

  return (
    <div className="h-20 bg-linear-to-r from-slate-800 to-slate-900 border-b border-slate-700/50 px-6 py-4 flex items-center justify-between relative">
      <div className="flex items-center gap-3">
        {/* AVATAR */}
        <div className="relative group">
          <button
            className="size-14 rounded-full overflow-hidden relative ring-2 ring-indigo-500/30 hover:ring-indigo-500 transition-all"
            onClick={() => fileInputRef.current.click()}
          >
            <img
              src={selectedImg || authUser.profilePic || '/avatar.png'}
              alt="User image"
              className="size-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
              <span className="text-white text-xs font-medium">Change</span>
            </div>
          </button>

          {/* ONLINE INDICATOR */}
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-900"></div>
          <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageUpload}
          className="hidden"
          />
        </div>

        {/* USERNAME & ONLINE TEXT */}
        <div>
          <h3 className="text-white font-semibold text-sm truncate max-w-32">
            {authUser.fullName || 'User'}
          </h3>
          <p className="text-slate-400 text-xs">Online</p>
        </div>
      </div>

      {/* BUTTONS */}
      <div className="flex gap-3 items-center relative z-30">
        {/* SOUND TOGGLE BTN */}
        <button
          type="button"
          className="text-slate-400 hover:text-indigo-400 transition-colors p-2 hover:bg-slate-700/50 rounded-lg cursor-pointer active:scale-95"
          onClick={() => {
            // play click sound before toggling
            if(!isSoundEnabled) {
            mouseClickSound.currentTime = 0
            mouseClickSound.play().catch((error) => console.log("Audio play failed:", error));
          }
          toggleSound();
          }}
        >
          {
            isSoundEnabled ? (
              <Volume2Icon className="size-5" />
            ) : (
              <VolumeOffIcon className="size-5" />
            )
          }

        </button>

        {/* LOGOUT BTN */}
        <button
          type="button"
          className="text-slate-400 hover:text-red-400 transition-colors p-2 hover:bg-slate-700/50 rounded-lg cursor-pointer active:scale-95"
          onClick={logout}
        >
          <LogOutIcon className="size-5" />
        </button>
      </div>
    </div>
  );
}
export default ProfileHeader;