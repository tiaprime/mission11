import React, { forwardRef } from "react";

const Modal = forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <div
        ref={ref} // Attach ref here
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        >
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                Hold up there, babes!
                </h5>
                <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                ></button>
            </div>
            <div className="modal-body">
                Make sure to check out TheBookmarkMaid.com for dozens of quality bookmarks!
            </div>
            <div className="modal-footer">
                <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                >
                Close
                </button>

            </div>
            </div>
        </div>
        </div>
    );
});

export default Modal;
