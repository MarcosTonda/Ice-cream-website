import { useState } from 'react'


    export const useModalHookState=(initialValue = false)=>{
        const [modalIsOpen, setmodalIsOpen]=useState(initialValue);

        const openModal = () => setmodalIsOpen(true); 
        const closeModal = () => setmodalIsOpen(false);

    return [modalIsOpen, openModal, closeModal];
};

