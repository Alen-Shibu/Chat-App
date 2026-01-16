import { useChatStore } from "../store/useChatStore";

function ActiveTabSwitch() {
  const { activeTab, setActiveTab } = useChatStore();

  return (
    <div className="flex border-b border-slate-700 bg-slate-900 px-4">
      <button
        onClick={() => setActiveTab("chats")}
        className={`flex-1 py-3 text-center font-medium transition-colors cursor-pointer ${
          activeTab === "chats"
            ? "text-indigo-400 border-b-2 border-indigo-400 -mb-1"
            : "text-slate-400 hover:text-slate-300"
        }`}
      >
        Chats
      </button>

      <button
        onClick={() => setActiveTab("contacts")}
        className={`flex-1 py-3 text-center font-medium transition-colors cursor-pointer ${
          activeTab === "contacts"
            ? "text-indigo-400 border-b-2 border-indigo-400 -mb-1"
            : "text-slate-400 hover:text-slate-300"
        }`}
      >
        Contacts
      </button>
    </div>
  );
}
export default ActiveTabSwitch;