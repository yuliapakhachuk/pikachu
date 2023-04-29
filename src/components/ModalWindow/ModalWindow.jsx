import { useEffect } from 'react';
import { createPortal } from 'react-dom';

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
        <div className="Overlay" onClick={handleOverlayClick} >
            <div className="Modal">{children}</div>
        </div>,
        modalRoot
        );
}

