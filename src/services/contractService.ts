// Manages fetching contract data and simulating function execution on blockchain contracts

export interface Contract {
  id: string;
  name: string;
  code: string;
  status: string;
}

export const fetchContracts = async (): Promise<Contract[]> => {
  // Simulate an API call with dummy contract data.
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve([
          {
            id: "1",
            name: "Contract A",
            code: "// Solidity code for Contract A\nfunction foo() {}",
            status: "Active",
          },
          {
            id: "2",
            name: "Contract A",
            code: "// Solidity code for Contract A\nfunction foo() {}",
            status: "Inactive",
          },
        ]),
      500
    );
  });
};

export const executeContractFunction = async (
  contractId: string,
  functionName: string,
  args: any[]
): Promise<string> => {
  //Simulate execution delay and return a dummy result.
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        `Executed ${functionName} on contract ${contractId} with args ${JSON.stringify(
          args
        )}`
      );
    }, 500);
  });
};
