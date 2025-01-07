import { create } from 'zustand'

export const useSocial = create((set) => ({
    socialLinks: {
        "id": 0,
        "facebook": "",
        "instagram": "",
        "youtube": "",
        "twitter": "",
        "updatedAt": ""
    },
    setSocialLinks: (links) => set({ socialLinks: links })
}))
