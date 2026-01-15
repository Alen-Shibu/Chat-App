import {useChatStore} from '../store/useChatStore.js'
import ProfileHeader from '../components/ProfileHeader'
import ActiveTabSwitch from '../components/ActiveTabSwitch'
import ChatsList from '../components/ChatsList'
import ContactsList from '../components/ContactsList'
import ChatContainer from '../components/ChatContainer'
import NoConversationPlaceholder from '../components/NoConversationPlaceholder'

function ChatPage() {
  const { activeTab, selectedUser } = useChatStore()

  return (
    <div className="h-screen w-full flex bg-gradient-to-br from-slate-800 via-slate-900 to-indigo-900">
      {/* Left Sidebar */}
      <div className="w-80 flex flex-col bg-slate-900 border-r border-slate-700">
        <ProfileHeader />
        <ActiveTabSwitch />
        {activeTab === 'chats' ? <ChatsList /> : <ContactsList />}
      </div>

      {/* Right Content Area */}
      <div className="flex-1">
        {selectedUser ? <ChatContainer /> : <NoConversationPlaceholder />}
      </div>
    </div>
  )
}

export default ChatPage