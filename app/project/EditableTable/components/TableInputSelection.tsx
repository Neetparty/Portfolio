'use server'
import axios from "axios"
import { use } from "react"

const getData = async () => {

    const res = await axios.get('https://neetparty-portfolio.vercel.app/api/selection')
    return res.data
}

const dataPromise = getData()

export const TableInputSelection = () => {

    const raw = use(dataPromise)
    const data = raw.DATA

    return (
        data.map((a: { name_en: string, name_th: string }, i: number) => <option key={i} value={a.name_en}>{a.name_en}</option> )
    )
}