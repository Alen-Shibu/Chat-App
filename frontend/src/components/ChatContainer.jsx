import ChatHeader from "./ChatHeader";


const ChatContainer = () => {


  
  return (
    <div className="flex flex-col h-full bg-linear-to-br from-slate-900 to-slate-800">
      {/* Chat Header */}
      <ChatHeader />

      {/* Messages Area */}
      {/* <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
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
      </div> */}

      {/* Input Area */}
      {/* <div className="h-20 border-t border-slate-700 bg-slate-900 px-6 py-3 flex items-center gap-2">
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
      </div> */}
    </div>
  );
};

export default ChatContainer;
