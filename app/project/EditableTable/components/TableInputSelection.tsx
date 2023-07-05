
import { use } from "react"

const getData = async () => {

    const res = await fetch('https://neetparty.github.io/Portfolio/api/selection')

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

const dataPromise = getData()

export const TableInputSelection = () => {

    const data = use(dataPromise)

    return (
        data.DATA.map((a: { name_en: string, name_th: string }, i: number) => <option key={i} value={a.name_en}>{a.name_en}</option> )
    )
}