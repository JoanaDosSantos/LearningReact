import { IProduct } from "../../interfaces/IProduct"

interface props {
    product: IProduct
}
export default function FormProduct({product}: props) {
    const {name, price, quantity} = product
    
    return (
        <div>  
                <h3>Insira o nome do novo produto</h3>
                <input value={name}></input>
                <h3>Insira o preço do novo produto</h3>
                <input value={price}></input>
                <h3>Insira a quantidade do novo produto</h3>
                <input value={quantity}></input>
                <button>Adicionar</button>
        </div>
    )
}
