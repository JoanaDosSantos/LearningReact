import ProductTable from "../../components/productTable/ProductTable";

export default function LandingPage() {

    return (
        <>
            <h1>Meu estoque</h1>
            <section>
                <h3>Lista</h3>
                <ProductTable/>
            </section>
        </>
    )
}