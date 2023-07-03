'use client'
import { SettingsIcon, AddIcon, CloseIcon } from "@chakra-ui/icons"
import { IconButton, Input, Menu, MenuButton, MenuItem, MenuList, Select, Td, Tr } from "@chakra-ui/react"
import { useRef } from "react"
import { TableInputSelection } from "."

interface AddNewTableColumnProps {
    index: number
    onAdd: any,
    onCancel: any,
}


export const AddNewTableColumn = ({ index, onAdd, onCancel }: AddNewTableColumnProps) => {

    //ข้อมูลจาก Input ภายในตาราง
    const artworkRef: any = useRef()
    const priceRef: any = useRef()

    const handleSave = () => {

        const updateData = {
            index: index,
            artwork: artworkRef.current.value,
            price: priceRef.current.value
        }

        if (updateData.artwork === '') {
            return artworkRef.current.style.borderColor = 'crimson'
        }
        if (updateData.price === '') {
            return priceRef.current.style.borderColor = 'crimson'
        }

        if (updateData.artwork !== '' || updateData.price !== '') {

            if (Number(updateData.price)) {
                onAdd(updateData)
                return true
            }
            //เรียกให้คำลั่งแก้ไขและบันทึกข้อมูลตัวอย่าง
            priceRef.current.style.borderColor = 'crimson'
            return true
        }
    }

    return (
        <Tr textColor='blackAlpha.700' >
            <Td></Td>
            <Td>
                <Select
                    variant='flushed'
                    borderBottom='2px'
                    borderColor='blackAlpha.700'
                    fontWeight='bold'
                    placeholder='Select option'
                    ref={artworkRef}
                >
                    <TableInputSelection />
                </Select>
            </Td>
            <Td isNumeric >
                <Input
                    ref={priceRef}
                    textAlign='end'
                    variant='flushed'
                    borderBottom='2px'
                    borderColor='blackAlpha.700'
                    fontWeight='bold'
                />
            </Td>
            <Td isNumeric >
                <Menu>
                    <MenuButton as={IconButton} aria-label="setting" icon={<SettingsIcon />} bg='none' _hover={{ bg: 'none' }} />
                    <MenuList>
                        <MenuItem aria-label="save" icon={<AddIcon />} onClick={handleSave} >Save</MenuItem>
                        <MenuItem aria-label="cancel" icon={<CloseIcon />} onClick={() => onCancel()} >Cancel</MenuItem>
                    </MenuList>
                </Menu>
            </Td>
        </Tr>
    )
}