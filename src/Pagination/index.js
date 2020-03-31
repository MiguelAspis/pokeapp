import React from 'react'
import './styles.css'

export default function Pagination({gotoNextPage, gotoPrevPage}) {

    return (
        
        

    <div className="button-container"> 
            {gotoPrevPage && <button className="button" onClick={gotoPrevPage}>
                Previous
            </button>}
            {gotoNextPage && <button  className="button" onClick={gotoNextPage}>
                Next
            </button>}
        </div>
    )
}
