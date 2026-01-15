const ActiveTabSwitch = ({ activeTab, onTabChange }) => {
  return (
    <div className="flex border-b border-slate-700 bg-slate-900 px-4">
      <button
        onClick={() => onTabChange('chats')}
        className={`flex-1 py-3 text-center font-medium transition-colors ${
          activeTab === 'chats'
            ? 'text-indigo-400 border-b-2 border-indigo-400'
            : 'text-slate-400 hover:text-slate-300'
        }`}
      >
        Chats
      </button>
      <button
        onClick={() => onTabChange('contacts')}
        className={`flex-1 py-3 text-center font-medium transition-colors ${
          activeTab === 'contacts'
            ? 'text-indigo-400 border-b-2 border-indigo-400'
            : 'text-slate-400 hover:text-slate-300'
        }`}
      >
        Contacts
      </button>
    </div>
  );
};

export default ActiveTabSwitch;
