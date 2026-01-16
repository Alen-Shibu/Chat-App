import { useEffect } from "react";
import { useChatStore } from "../store/useChatStore";
import UsersLoadingSkeleton from "./UsersLoadingSkeleton";
import NoContactsFound from "./NoContactsFound";

function ContactList() {
  const { getAllContacts, contacts, setSelectedUser, isUsersLoading } = useChatStore();

  useEffect(() => {
    getAllContacts();
  }, [getAllContacts]);

  if (isUsersLoading) return <UsersLoadingSkeleton />;
  if(contacts.length === 0) return <NoContactsFound />

  return (
    <div className="flex-1 overflow-y-auto">
      {contacts.map((contact) => (
        <div
          key={contact._id}
          className="px-4 py-3 border-b border-slate-700 hover:bg-slate-800 cursor-pointer transition-colors"
          onClick={() => setSelectedUser(contact)}
        >
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src={contact.profilePic || "/avatar.png"}
                alt={contact.fullName}
                className="w-10 h-10 rounded-full object-cover"
              />
              <span
                className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-slate-900`}
              ></span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-semibold text-sm truncate">{contact.fullName}</p>
              <p className="text-slate-400 text-xs">
                online
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default ContactList;