import { useState } from "react"
import { IProduct } from "../../interfaces/IProduct"
import { HiMiniTrash, HiPencil } from "react-icons/hi2";
import styles from "./ProductTable.module.scss";

interface props {
    biluteteia: (product: IProduct) => void
}
export default function ProductTable({ biluteteia }: props) {
    const ApiData: Array<IProduct> = [
        {
            id: 1,
            name: 'Produto1',
            quantity: 2,
            price: 29.90
        },
        {
            id: 2,
            name: 'Produto2',
            quantity: 3,
            price: 219.90
        },
        {
            id: 3,
            name: 'Produto3',
            quantity: 1,
            price: 9.90
        },
    ]

    const [data, setData] = useState(ApiData)

    function deleteProduct(id: number) {
        const newData = data.filter(_data => _data.id != id)
        setData(newData)
    }


    return (
        <div className={styles.tableContent}>
            <ul>
                <li className={styles.tableHeader}>
                    <span>Nome</span>
                    <span>Quantidade</span>
                    <span>Preço</span>
                    <span>Editar</span>
                    <span>Excluir</span>
                </li>
                {
                    data.map((_data) => {
                        return (
                            <li>
                                <span>{_data.name}</span>
                                <span>{_data.quantity}</span>
                                <span>{_data.price}</span>
                                <button onClick={() => biluteteia(_data)}><HiPencil /></button>
                                <button onClick={() => deleteProduct(_data.id)}><HiMiniTrash color="white" /></button>
                            </li>
                        )
                    })
                }

            </ul>
        </div>
    )
}