import React from "react";
import { Contract } from "../services/contractService";

interface ContractDetailProps {
    contract: Contract;
}

const ContractDetail: React.FC<ContractDetailProps> = ({ contract }) => {
    return (
        <div>
            <h3>{contract.name}</h3>
            <pre>{contract.code}</pre>
            <p>Status: {contract.status}</p>
        </div>
    );
};

export default ContractDetail;