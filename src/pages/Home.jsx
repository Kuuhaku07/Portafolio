import React, { useRef } from 'react';
import CopyButton from '../components/shared/CopyButton';
import ToastContainer from '../components/shared/ToastContainer';

const Home = () => {
  const toastRef = useRef(null);

  const handleCopy = (message) => {
    if (toastRef.current) {
      toastRef.current.addToast(message, 'success', 3000);
    }
  };

  return (
    <div>
      <h1>Portfolio Main Page Placeholder</h1>
      <p>This is the main page of the portfolio.</p>

      <CopyButton
        textToCopy="Texto de ejemplo para copiar"
        onCopy={handleCopy}
        buttonColor="#007bff"
        size="medium"
        ariaLabel="Copiar texto de ejemplo"
      />

      <ToastContainer ref={toastRef} />
    </div>
  );
};

export default Home;
