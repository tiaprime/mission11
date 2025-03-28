import { useState } from "react"
import CategoryFilter from "../components/CategoryFilter"
import BookList from "../components/BookList"
import Welcome from "../components/Welcome"
import CartSummary from "../components/CartSummary"

// -------------------------------------------
import React, { useEffect, useRef } from "react"
import Modal from '../components/Modal'
import { Modal as BootstrapModal } from "bootstrap"



function BooksPage() {

    const modalRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (modalRef.current) {
            const modal = new BootstrapModal(modalRef.current);
            modal.show(); // Open modal after 5 seconds
            }
        }, 5000);

        return () => clearTimeout(timer); // Cleanup timeout if component unmounts
    }, []);
//---------------------------------------------------------------------------------------

    // this is og code
    const [selectedCategories, setSelectedCategories] = useState<string[]>([])

    return(
        <>
{/* ---------------------------------------------------------------------------------------------- */}
        <div className="container mt-5">
            {/* <h2>Bootstrap Modal in React + TypeScript</h2> */}

            {/* Button to open the modal manually */}
            {/* <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
                if (modalRef.current) {
                const modal = new BootstrapModal(modalRef.current);
                modal.show();
                }
            }}
            >
            Open Modal
            </button> */}

            {/* Pass the ref to Modal */}
            <Modal ref={modalRef} />
        </div>

{/* ---------------------------------------------------------------------------------------------- */}


        <div className='container mt-4'>
            <CartSummary />
            <Welcome/>

        <div className='row'>
            <div className='col-md-3'>
                <CategoryFilter selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}/>
            </div>
            <div className='col-md-9'>
                <BookList selectedCategories={selectedCategories}/>
            </div>
        </div>

        </div>
        </>
    )
}

export default BooksPage