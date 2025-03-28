import React, { useEffect } from "react";

import * as bootstrap from 'bootstrap';





const Toast: React.FC = () => {
    useEffect(() => {
        // Initialize all toasts when the component mounts
        const toastElements = Array.from(document.querySelectorAll('.toast'));
        toastElements.forEach((toastEl) => {
        new bootstrap.Toast(toastEl).show(); // Show all toasts
        });
    }, []);

    return (
        <div className="toast-container position-fixed bottom-0 end-0 p-3">
        <div className="toast align-items-center text-bg-success" role="alert" aria-live="assertive" aria-atomic="true">
            <div className="d-flex">
            <div className="toast-body">
                Thank you for shopping at Bombastic Bookish Babe's Book Store
            </div>
            <button type="button" className="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        </div>
        </div>
    );
};

export default Toast;
