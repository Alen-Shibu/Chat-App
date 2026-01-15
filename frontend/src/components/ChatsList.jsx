const ChatsList = () => {
  const chats = [
    { id: 1, name: 'John Doe', message: 'Hey, how are you?', time: '2:30 PM', avatar: 'https://via.placeholder.com/40' },
    { id: 2, name: 'Jane Smith', message: 'See you tomorrow!', time: '1:15 PM', avatar: 'https://via.placeholder.com/40' },
    { id: 3, name: 'Alex Johnson', message: 'Thanks for the help', time: '12:00 PM', avatar: 'https://via.placeholder.com/40' },
  ];

  return (
    <div className="flex-1 overflow-y-auto">
      {chats.map((chat) => (
        <div
          key={chat.id}
          className="px-4 py-3 border-b border-slate-700 hover:bg-slate-800 cursor-pointer transition-colors"
        >
          <div className="flex items-center gap-3">
            <img
              src={chat.avatar}
              alt={chat.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center">
                <p className="text-white font-semibold text-sm">{chat.name}</p>
                <p className="text-slate-400 text-xs">{chat.time}</p>
              </div>
              <p className="text-slate-400 text-sm truncate">{chat.message}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatsList;
