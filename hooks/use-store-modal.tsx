 import { create } from "zustand";
 // this is for the 
 interface useStoreModalStore{
  isOpen:boolean;
  onOpen:() =>void;  
  onClose: ()=>void;


 };

 export const useStoreModal=create<useStoreModalStore>((set)=>({
    isOpen:false,
    onOpen:() =>set({isOpen:true}),
    onClose:()=>set({isOpen:false})
 }))
































