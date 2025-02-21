import React, { useState } from "react";

const VerificationPanel: React.FC = () => {
    const [productId, setProductId] = useState('');
    const [verificationResult, setVerificationResult] = useState('');

    const handleVerify = () => {
        // For demonstration, simulate verification logic
        if (productId === 'P1' || productId === 'P2') {
            setVerificationResult('Product Verified: Authentic');
        } else {
            setVerificationResult('Product not found or not authentic');
        }
    };

    return (
        <div>
            <h3>Verification Panel</h3>
            <input
                type="text"
                placeholder="Enter Product ID"
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
            />
            <button onClick={handleVerify}>Verify</button>
            {verificationResult && <p>{verificationResult}</p>}
        </div>
    );
};

export default VerificationPanel;