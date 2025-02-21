import React, { useEffect, useState} from "react";
import { fetchProducts, Product } from "../services/supplyChainService";

const ProductTracker: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const data = await fetchProducts();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products', error);
            } finally {
                setLoading(false);
            }
        };
        loadProducts();
    }, []);

    if (loading) return <p>Loading products...</p>;

    return (
        <div>
            <h3>Product Tracker</h3>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <strong>{product.name}</strong> - Stage: {product.stage} (Provenance: {product.provenance})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductTracker;