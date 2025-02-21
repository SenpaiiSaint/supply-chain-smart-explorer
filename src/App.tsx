import React, { useState, useEffect } from "react";
import ContractList from "./components/ContractList";
import ContractDetail from "./components/ContractDetail";
import FunctionTester from "./components/FunctionTester";
import ProductTracker from "./components/ProductTracker";
import ChainTimeline from "./components/ChainTimeline";
import VerificationPanel from "./components/VerificationPanel";
import { fetchContracts, Contract } from "./services/contractService";
import './App.css';

const App: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'contracts' | 'supplyChain'>('contracts');
    const [contracts, setContracts] = useState<Contract[]>([]);
    const [selectedContract, setSelectedContract] = useState<Contract | null>(null);

    //Load Contract data when the contracts tab is active
    useEffect(() => {
        if (activeTab === 'contracts') {
            const loadContracts = async () => {
                try {
                    const data = await fetchContracts();
                        setContracts(data);
                } catch (error) {
                    console.error('Error fetching contracts', error);
                }
            };
            loadContracts();
        }
    }, [activeTab]);

    return (
        <div className="app-container">
            <header>
                <h1>Blockchain Supply Chain & Contract Explorer</h1>
                <nav className="tab-nav">
                    <button className={activeTab === 'contracts' ? 'active' : ''} onClick={() => setActiveTab('contracts')}>
                        Smart Contract Explorer
                    </button>
                    <button className={activeTab === 'supplyChain' ? 'active' : ''} onClick={() => setActiveTab('supplyChain')}>
                        Supply Chain Platform
                    </button>
                </nav>
            </header>
            <main>
                {activeTab === 'contracts' ? (
                    <div className="contracts-section">
                        <div className="left-panel">
                            <ContractList contracts={contracts} onSelect={(contract) => setSelectedContract(contract)} />
                        </div>
                        <div className="right-panel">
                            {selectedContract ? (
                                <>
                                <ContractDetail contract={selectedContract} />
                                <FunctionTester contractId={selectedContract.id} />
                                </>
                            ) : (
                                <p>Select a contract to view details and test functions</p>
                            )}
                        </div>
                    </div>
                ):(
                    <div className="supply-chain-section">
                        <ProductTracker />
                        <ChainTimeline />
                        <VerificationPanel />
                    </div>
                )}
            </main>
        </div>
    );
};

export default App;