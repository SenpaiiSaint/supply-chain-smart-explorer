import React from "react";
import { Contract } from "../services/contractService";

interface ContractListProps {
    contracts: Contract[];
    onSelect: (contract: Contract) => void;
}

const ContractList: React.FC<ContractListProps> = ({ contracts, onSelect }) => {
    return (
        <div>
            <h3>Smart Contracts</h3>
            <ul>
                {contracts.map((contract) => (
                    <li key={contract.id} onClick={() => onSelect(contract)} style={{ cursor: 'pointer'}}>
                        {contract.name} - {contract.status}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ContractList;