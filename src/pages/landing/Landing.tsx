import { useState } from "react";
import FormProduct from "../../components/formProduct/FormProduct";
import ProductTable from "../../components/productTable/ProductTable";
import { IProduct } from "../../interfaces/IProduct";
import styles from "./Landing.module.scss";

export default function LandingPage() {
    const [showModal, setShowModal] = useState<boolean>(false)
    const [product, setProduct] = useState<IProduct>()

    function updateProduct(produto: IProduct) {
        setProduct(produto)
        setShowModal(true)
    }

    return (
        <main className={styles.mainContent}>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wdth,wght,YTLC@6..12,96.1,252,466&display=swap');
            </style>
            <h1>Meu estoque</h1>
                <h3>Lista</h3>
            <section>
                <ProductTable biluteteia={updateProduct} />
            </section>
            {
                showModal && product != null
                    ? <FormProduct product={product} />
                    : null
            }
        </main>
    )
}

//Ver com o Lipe pq nao usar <table> <table\>
//<tr>
//  <th>item da tabela</th>
//  <th>item da tabela na coluna ao lado</th>
//</tr>

//<tr>
//  <th>item da tabela na linha abaixo</th>
//  <th>item da tabela na coluna ao lado e na linha abaixo</th>
//</tr>

//Pq ai consigo usar css de tabelas, como linhas e definições de campos com cores