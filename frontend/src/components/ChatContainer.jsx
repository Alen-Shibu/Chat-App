const ChatContainer = () => {
  const messages = [
    { id: 1, sender: 'other', text: 'Hey! How are you doing?' },
    { id: 2, sender: 'user', text: 'I am doing great! How about you?' },
    { id: 3, sender: 'other', text: 'Pretty good, thanks for asking!' },
    { id: 4, sender: 'user', text: 'That is awesome to hear!' },
  ];

  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Chat Header */}
      <div className="h-16 bg-gradient-to-r from-slate-800 to-slate-900 border-b border-slate-700 px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="https://via.placeholder.com/40"
            alt="Contact"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="text-white font-semibold">John Doe</p>
            <p className="text-slate-400 text-xs">Online</p>
          </div>
        </div>
        <button className="text-slate-400 hover:text-indigo-400 transition">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773c.058.319.15.638.28.95.13.31.307.596.526.846l1.303 1.303a1 1 0 010 1.414l-1.414 1.414a1 1 0 01-1.414 0l-1.303-1.303c-.25.219-.536.396-.846.526-.312.13-.631.222-.95.28l-.773 1.548a1 1 0 01-1.06.54L2.725 15.8a1 1 0 01-.836-.986V11a1 1 0 011-1h2V4a1 1 0 011-1h2v2H4V3z"></path>
          </svg>
        </button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-lg ${
                msg.sender === 'user'
                  ? 'bg-indigo-600 text-white rounded-br-none'
                  : 'bg-slate-700 text-slate-100 rounded-bl-none'
              }`}
            >
              <p className="text-sm">{msg.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="h-20 border-t border-slate-700 bg-slate-900 px-6 py-3 flex items-center gap-2">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 bg-slate-800 text-white placeholder-slate-500 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
        />
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg px-4 py-2 transition-colors">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5.951-2.975L9 10h5l-3.226 6.997 5.951 2.975a1 1 0 001.169-1.409l-7-14z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChatContainer;
