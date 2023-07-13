'use client'
import axios from "axios"
import { useEffect, useState } from "react"

export const TableInputSelection = () => {

    const [ data, setData ] = useState([])
    const [ loading, setLoading ] = useState(false)

    useEffect(() => {
        const fetch = async () => {
            setLoading(true)
            try {
                const {data: res} = await axios.get(`${process.env.HOST_API}/api/selection`)
                setData(res.DATA)
            } catch (error:any) {
                console.error(error.message)
            }
            setLoading(false)
        }
        fetch()
    }, [])

    return (
        <>
            {!loading ?
            data.map((a: { name_en: string, name_th: string }, i: number) => <option key={i} value={a.name_en}>{a.name_en}</option> )
            :
            <></>}
        </>
    )
}