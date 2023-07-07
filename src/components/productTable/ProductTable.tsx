import { useState } from "react"
import { IProduct } from "../../interfaces/IProduct"

export default function ProductTable() {
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
        <div>
            <ul>
                {
                    data.map(data => {
                        return (
                            <li>
                                <span>{data.name} - {data.quantity}</span>
                                <button onClick={() => deleteProduct(data.id)}>Del</button>
                            </li>
                        )
                    })
                }

            </ul>
        </div>
    )
}