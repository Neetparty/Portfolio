'use server'

import axios from "axios"
import { ProductLayout } from "./components"
import { ItemLayout } from "../components"

const getProduct = async () => {
    const res = await axios.get(`https://fakestoreapi.com/products`)
    return res.data
}

const SearchBar = async () => {

    const data = await getProduct()

    return(
        <ItemLayout title='Search & Sort' >
            <ProductLayout product={data} />
        </ItemLayout>
    )
}

export default SearchBar