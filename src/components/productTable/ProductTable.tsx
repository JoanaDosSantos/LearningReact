import { useState } from "react"
import { IProduct } from "../../interfaces/IProduct"

interface props{
    biluteteia: (product: IProduct) => void
}
export default function ProductTable({biluteteia}:props) {
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
                    data.map(_data => {
                        return (
                            <li>
                                <span>{_data.name} - {_data.quantity}</span>
                                <button onClick={() => deleteProduct(_data.id)}>Del</button>
                                <button onClick={() => biluteteia(_data)}>Edit</button>
                            </li>
                        )
                    })
                }

            </ul>
        </div>
    )
}