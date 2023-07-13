import { useState } from "react";
import FormProduct from "../../components/formProduct/FormProduct";
import ProductTable from "../../components/productTable/ProductTable";
import { IProduct } from "../../interfaces/IProduct";
import styles from "./Landing.module.scss";

export default function LandingPage() {
    const [showModal, setShowModal] = useState<boolean>(false)
    const [product, setProduct] = useState<IProduct>()

    function updateProduct(produto: IProduct){
        setProduct(produto)
        setShowModal(true)
    }

    return (
        <main className={styles.mainContent}>
            <h1>Meu estoque</h1>
            <section>
                <h3>Lista</h3>
                <ProductTable biluteteia={updateProduct}/>
            </section>
            {
                showModal && product != null
                    ? <FormProduct product={product}/>
                    : null
            }
        </main>
    )
}