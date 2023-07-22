import { useState } from "react";
import { IProduct } from "../../interfaces/IProduct"
import styles from "./FormProduct.module.scss";

interface props {
    product: IProduct
}
export default function FormProduct({ product }: props) {
    const { name: _name, price: _price, quantity: _quantity } = product

    const [name, setName] = useState<string>(_name)
    const [price, setPrice] = useState<number>(_price)
    const [quantity, setQuantity] = useState<number>(_quantity)

    return (
        <div className={styles.formContent}>
            <div className={styles.row}>
                <label>Nome</label>
                <input onChange={event => setName(event.target.value)} value={name}></input>
            </div>
            <div className={styles.row}>
                <label>Preço</label>
                <input onChange={event => setPrice(Number(event.target.value))} value={price}></input>
            </div>
            <div className={styles.row}>
                <label>Quantidade</label>
                <input onChange={event => setQuantity(Number(event.target.value))} value={quantity}></input>
            </div>
            <div className={styles.buttonAdd}>
                <button>Adicionar</button>
            </div>
        </div>
    )
}
