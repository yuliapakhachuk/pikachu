import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import Cross from "./cross.png"
import "./ModalWindow.scss"

const modalRoot = document.querySelector('#modal-root');

export function ModalWindow({onClose, children}) {
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown)}
        }, []) 

    const handleKeyDown = e => {
        if (e.code === 'Escape') { onClose() }
    };

    const handleOverlayClick = e => {
        if (e.currentTarget === e.target) {
        onClose();
        }
    };

        return createPortal(
        <div className="overlay" onClick={handleOverlayClick} >
            <div className="modal">
                <button className='modal__close-btn' onClick={onClose}>
                    <img src={Cross} alt="close" width="12px" height="12px"/>
                </button>
                {children}
            </div>
        </div>,
        modalRoot
        );
}

