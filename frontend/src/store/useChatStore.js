import {create} from 'zustand'
import {axiosInstance} from '../lib/axios.js'
import toast from 'react-hot-toast';

export const useChatStore = create((set,get) => ({
    contacts:[],
    chats:[],
    messages:[],
    selectedUser:null,
    activeTab:'chats',
    isUsersLoading:false,
    isMessagesLoading:false,
    isSoundEnabled: JSON.parse(localStorage.getItem("isSoundEnabled")) === true,

    toggleSound: () => {
        localStorage.setItem("isSoundEnabled",!get().isSoundEnabled)
        set({isSoundEnabled:!get().isSoundEnabled})
    },

    setActiveTab: (tab) => set({activeTab:tab}),
    setSelectedUser: (selectedUser) => set({selectedUser}),

    getAllContacts: async() => {
        set({isUsersLoading:true})
        try {
            const res = await axiosInstance.get('/message/contacts')
            set({contacts:res.data})
        } catch (error) {
            toast.error(error.response.data.message)
        } finally {
            set({isUsersLoading:false})
        }
    },
    
    getAllChatPartners: async() => {
        set({isUsersLoading:true})
        try {
            const res = await axiosInstance.get('/message/chats')
            set({chats:res.data})
        } catch (error) {
            toast.error(error.response.data.message)
        } finally {
            set({isUsersLoading:false})
        }
    },
}))