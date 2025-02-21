// Simulates fetching supply chain data from blockchain records

export interface Product {
  id: string;
  name: string;
  stage: string;
  provenance: string;
}

export const fetchProducts = async (): Promise<Product[]> => {
  // Simulated API call returning dummy product tracking data
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve([
          {
            id: "P1",
            name: "Product A",
            stage: "Manufacturing",
            provenance: "Factory X",
          },
          {
            id: "P2",
            name: "Product B",
            stage: "Manufacturing",
            provenance: "Factory Y",
          },
        ]),
      500
    );
  });
};
