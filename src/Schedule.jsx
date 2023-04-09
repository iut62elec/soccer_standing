import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Storage } from 'aws-amplify';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Schedule = () => {
  const [pdfUrl, setPdfUrl] = useState(null);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    fetchPdf();
  }, []);

  const fetchPdf = async () => {
    try {
      const signedUrl = await Storage.get('schedule.pdf');
      console.log(signedUrl)
      setPdfUrl(signedUrl);
    } catch (error) {
      console.error('Error fetching PDF:', error);
    }
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div>
      <h2></h2>
      {pdfUrl && (
        <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
          {Array.from(new Array(numPages), (el, index) => (
            <Page key={`page_${index + 1}`} pageNumber={index + 1} />
          ))}
        </Document>
      )}
    </div>
  );
};

export default Schedule;
