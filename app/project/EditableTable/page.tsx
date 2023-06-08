'use client'

import { Table, TableContainer, Thead, Tr, Th, Tbody } from "@chakra-ui/react"
import { useState } from "react"
import { EditableTable } from "./components/EditableTable"

type TableData = {
    artwork: string,
    price: string | number
}[]

const EditableTableProject = () => {
    //ข้อมูลตัวอย่าง
    const [tableData, setTableData] = useState<TableData>([
        { artwork: 'Full Body (Color)', price: '1000' },
        { artwork: 'Full Body (Line Art)', price: '750' },
        { artwork: 'Half Body (Color)', price: '850' },
        { artwork: 'Half Body (Line Art)', price: '550' },
        { artwork: 'Burst Up (Color)', price: '500' },
        { artwork: 'Burst Up (Line Art)', price: '350' },
        { artwork: 'Chibi (Color)', price: '350' },
        { artwork: 'Chibi (Line Art)', price: '200' },
    ])

    //แก้ไขข้อมูลตัวอย่าง
    const handleEdit = (rowIndex: number, value: any) => {
        const updatedData = [...tableData]

        //แก้ไขและบันทึกข้อมูลใหม่ลงข้อมูลตัวอย่าง
        updatedData[rowIndex] = value
        setTableData(updatedData)
    }

    //ลบข้อมูลตัวอย่าง
    const handleDelete = (rowIndex: number) => {
        const updatedData = [...tableData]

        //ลบข้อมูลที่กำหนดในข้อมูลตัวอย่าง
        updatedData.splice(rowIndex,1)
        setTableData(updatedData)
    }

    return (
        <TableContainer>
            <Table variant="striped" colorScheme="purple" >
                <Thead>
                    <Tr>
                        <Th width="60%" >Artwork</Th>
                        <Th width="25%" isNumeric>Price</Th>
                        <Th width="15%" isNumeric></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {tableData.map((row, rowIndex) => {
                        return (
                            <EditableTable key={rowIndex} row={rowIndex} onDelete={handleDelete} onEdit={handleEdit} data={row} />
                        )
                    })}
                </Tbody>
            </Table>
        </TableContainer>
    )
}

export default EditableTableProject