const ContactsList = () => {
  const contacts = [
    { id: 1, name: 'John Doe', status: 'Online', avatar: 'https://via.placeholder.com/40' },
    { id: 2, name: 'Jane Smith', status: 'Offline', avatar: 'https://via.placeholder.com/40' },
    { id: 3, name: 'Alex Johnson', status: 'Online', avatar: 'https://via.placeholder.com/40' },
    { id: 4, name: 'Sarah Williams', status: 'Online', avatar: 'https://via.placeholder.com/40' },
  ];

  return (
    <div className="flex-1 overflow-y-auto">
      {contacts.map((contact) => (
        <div
          key={contact.id}
          className="px-4 py-3 border-b border-slate-700 hover:bg-slate-800 cursor-pointer transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src={contact.avatar}
                alt={contact.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <span
                className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-slate-900 ${
                  contact.status === 'Online' ? 'bg-green-500' : 'bg-slate-500'
                }`}
              ></span>
            </div>
            <div className="flex-1">
              <p className="text-white font-semibold text-sm">{contact.name}</p>
              <p className="text-slate-400 text-xs">{contact.status}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactsList;
