const ProfileHeader = () => {
  return (
    <div className="h-16 bg-gradient-to-r from-slate-800 to-slate-900 border-b border-slate-700 px-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="text-white font-semibold text-sm">User Name</p>
          <p className="text-slate-400 text-xs">Online</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="text-slate-400 hover:text-indigo-400 transition">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.5 1.5H9.5V0h1v1.5zm0 17H9.5v1.5h1V18.5zM1.5 10.5H0v-1h1.5v1zm17 0h1.5v-1H18.5v1zM3.57 3.57L2.86 2.86l-1.06 1.06.71.71 1.06-1.06zm12.86 12.86l-.71.71 1.06 1.06.71-.71-1.06-1.06zm0-12.86l1.06-1.06-.71-.71-1.06 1.06.71.71zM3.57 16.43l-1.06 1.06.71.71 1.06-1.06-.71-.71z"></path>
          </svg>
        </button>
        <button className="text-slate-400 hover:text-red-400 transition">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 0.82 1.82l-.5.5H13v8a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0V7H5.5l.5 .5A1 1 0 013 6zm1 10a1 1 0 011-1h10a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1v-2z" clipRule="evenodd"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProfileHeader;
