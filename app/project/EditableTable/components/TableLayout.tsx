'use client'

import { AddIcon } from "@chakra-ui/icons"
import { Table, TableContainer, Thead, Tr, Th, Tbody, Td, IconButton } from "@chakra-ui/react"
import { useState } from "react"
import { AddNewTableColumn, EditableTable } from "."

type TableData = {
    index: number
    artwork: string,
    price: string | number
}[]

export const TableLayout = () => {
    //ข้อมูลตัวอย่าง
    const [tableData, setTableData] = useState<TableData>([
        { index: 0, artwork: 'Full Body (Color)', price: '1000' },
        { index: 1, artwork: 'Full Body (Line Art)', price: '750' },
        { index: 2, artwork: 'Half Body (Color)', price: '850' },
        { index: 3, artwork: 'Half Body (Line Art)', price: '550' },
        { index: 4, artwork: 'Burst Up (Color)', price: '500' },
        { index: 5, artwork: 'Burst Up (Line Art)', price: '350' },
        { index: 6, artwork: 'Chibi (Color)', price: '350' },
        { index: 7, artwork: 'Chibi (Line Art)', price: '200' },
    ])

    const [newTableColumn, setNewTableColumn] = useState<boolean>(false)

    const changeIndex = (row:number, direction:number) => {
        
        const data = [...tableData]

        const toIndex = row + direction

        data.splice(toIndex, 0, data.splice(row, 1)[0])

        setTableData(data)
        
    }

    //เพิ่มข้อมูลตัวอย่าง
    const handleAdd = (value: any) => {
        const data = [...tableData]

        //เพิ่มข้อมูลใหม่ลงข้อมูลตัวอย่าง
        data.push(value)
        setTableData(data)
        setNewTableColumn(false)

    }

    //เพิ่มข้อมูลตัวอย่าง
    const handleCancelNewColumn = () => {
        setNewTableColumn(false)
    }

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
        updatedData.splice(rowIndex, 1)
        setTableData(updatedData)
    }

    return (
        <TableContainer>
            <Table variant="striped" colorScheme="purple" >
                <Thead>
                    <Tr>
                        <Th width="5%" ></Th>
                        <Th width="55%" >Artwork</Th>
                        <Th width="25%" isNumeric>Price</Th>
                        <Th width="15%" isNumeric></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {tableData.map((row, rowIndex) => <EditableTable key={rowIndex} index={tableData.length} row={rowIndex} changeIndex={changeIndex} onDelete={handleDelete} onEdit={handleEdit} data={row} />)}
                    {newTableColumn ?
                        <AddNewTableColumn index={tableData.length} onAdd={handleAdd} onCancel={handleCancelNewColumn} /> 
                        : 
                        <Tr textColor='blackAlpha.700' >
                            <Td></Td>
                            <Td></Td>
                            <Td></Td>
                            <Td isNumeric >
                                <IconButton
                                    aria-label='add'
                                    icon={<AddIcon />}
                                    variant='ghost'
                                    onClick={ () => setNewTableColumn(true) }
                                    _hover={{
                                        backgroundColor: 'none'
                                    }}
                                    _active={{
                                        backgroundColor: 'none'
                                    }}
                                />
                            </Td>
                        </Tr>
                    }
                </Tbody>
            </Table>
        </TableContainer>
    )
}