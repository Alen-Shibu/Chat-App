const NoConversationPlaceholder = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-slate-900 to-slate-800">
      <svg className="w-20 h-20 text-slate-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
      </svg>
      <h2 className="text-2xl font-bold text-white mb-2">No conversation selected</h2>
      <p className="text-slate-400 text-center max-w-xs">
        Select a chat from the left sidebar to start messaging or create a new conversation
      </p>
    </div>
  );
};

export default NoConversationPlaceholder;
