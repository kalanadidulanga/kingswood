import { create } from 'zustand'

export const useContact = create((set) => ({
    contactDetails: {
        "id": 1,
        "contactNumber": "",
        "emailAddress": "",
        "address": "",
        "schoolLocation": "",
        "updatedAt": ""
    },
    setContactDetails: (data) => set({ contactDetails: data })
}))
