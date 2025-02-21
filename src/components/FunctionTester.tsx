import React, { useState } from "react";
import { executeContractFunction } from "../services/contractService";

interface FunctionTesterProps {
    contractId: string;
}

const FunctionTester: React.FC<FunctionTesterProps> = ({ contractId }) => {
    const [functionName, setFunctionName] = useState('');
    const [args, setArgs] = useState('');
    const [result, setResult] = useState('');

    const handleTest = async () => {
        try {
            // Parse the arguments as a JSON array
            const parsedArgs = args ? JSON.parse(args) : [];
            const res = await executeContractFunction(contractId, functionName, parsedArgs);
            setResult(res);
        } catch (error) {
            setResult('Error executing function. Ensure arguments are valid JSON');
        }
    };

    return (
        <div>
            <h4>Test Contract Function</h4>
            <input
                type="text"
                placeholder="Function Name"
                value={functionName}
                onChange={(e) => setFunctionName(e.target.value)}
            />
            <input  
                type="text"
                placeholder='Arguments (e.g., ["arg1", 123])'
                value={args}
                onChange={(e) => setArgs(e.target.value)}
            />
            <button onClick={handleTest}>Execute</button>
            {result && <p>Result: {result}</p>}
        </div>
    );
};

export default FunctionTester;