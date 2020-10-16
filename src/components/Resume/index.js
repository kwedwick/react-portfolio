import React, { useState } from 'react'
import { Document, Page } from 'react-pdf';


function Resume() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
    return (
        <div className="resume">
            <h1>Resume</h1>
            <Document file="" //https://drive.google.com/file/d/17r6iZtkGYkwokw6OJNCxX6MZlJB9gtmN/view?usp=sharing
                onLoadSuccess={onDocumentLoadSuccess} onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={pageNumber} />
            </Document>
            <p>Page {pageNumber} of {numPages}</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum quae ad nisi expedita aut quis dolorem, laborum adipisci similique eum cum atque, at sit corrupti cupiditate ut totam voluptate veniam.</p>
        </div>
    )
}

export default Resume
