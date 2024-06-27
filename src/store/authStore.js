import { create } from 'zustand'

const authStore = create((set)=>({
    isAuth:!!localStorage.getItem("token"),
    login:(token) => {
        localStorage.setItem("token",token)
        set({isAuth:true})
    },
    logout:() => {
        localStorage.removeItem("token")
        set({isAuth:false})
    },
    checkAuth:() => set( () => ({isAuth:!!localStorage.getItem("token")}))
}));

export default authStore;