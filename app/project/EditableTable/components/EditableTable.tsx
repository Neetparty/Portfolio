'use client'
import { AddIcon, CloseIcon, DeleteIcon, EditIcon, SettingsIcon } from "@chakra-ui/icons"
import { IconButton, Td, Tr, Text, Menu, MenuButton, MenuList, MenuItem, Input } from "@chakra-ui/react"
import { useRef, useState } from "react"

interface EditableTableProps {
    data: {
        artwork: string,
        price: string | number
    },
    row: string | number,
    onEdit: any,
    onDelete: any,
}
export const EditableTable = ({ data, row, onEdit, onDelete }: EditableTableProps) => {

    //โหมดการแก้ไขตาราง
    const [editMode, setEditMode] = useState<boolean>(false)

    //ข้อมูลจาก Input ภายในตาราง
    const artworkRef:any = useRef()
    const priceRef:any = useRef()

    //บันทึกข้อมูลใหม่ลงในข้อมูลตัวอย่าง
    const handleSave = () => {

        const updateData = {
            artwork: artworkRef.current.value,
            price: priceRef.current.value
        }
        //เรียกให้คำลั่งแก้ไขและบันทึกข้อมูลตัวอย่าง
        onEdit(row, updateData)

        //ปิดโหมดการแก้ไขตาราง
        setEditMode(false)
    }

    return (
        <Tr textColor='blackAlpha.700'  >
            <Td>
                {editMode ?
                    (
                        <Input
                            ref={artworkRef}
                            defaultValue={`${data.artwork}`}
                            variant='flushed'
                            fontWeight='bold'
                            borderBottom='2px'
                            borderColor='blackAlpha.700'
                        />
                    ) :
                    (
                        <Text as='b' >{`${data.artwork}`}</Text>
                    )
                }
            </Td>
            <Td isNumeric >
                {editMode ?
                    (
                        <Input
                            ref={priceRef}
                            defaultValue={data.price}
                            textAlign='end'
                            variant='flushed'
                            borderBottom='2px'
                            borderColor='blackAlpha.700'
                            fontWeight='bold'
                        />
                    ) :
                    (
                        <Text as='b' >{data.price}</Text>
                    )
                }
            </Td>
            <Td isNumeric >
                <Menu  >
                    <MenuButton as={IconButton} aria-label="setting" icon={<SettingsIcon />} bg='none' _hover={{ bg: 'none' }} />
                    {editMode ?
                        (
                            <MenuList>
                                <MenuItem aria-label="save" icon={<AddIcon />} onClick={handleSave} >Save</MenuItem>
                                <MenuItem aria-label="cancel" icon={<CloseIcon />} onClick={() => setEditMode(false)} >Cancel</MenuItem>
                            </MenuList>

                        ) :
                        (
                            <MenuList>
                                <MenuItem aria-label="edit" icon={<EditIcon />} onClick={() => setEditMode(true)} >Edit</MenuItem>
                                <MenuItem aria-label="delete" icon={<DeleteIcon />} onClick={() => onDelete(row)} >Delete</MenuItem>
                            </MenuList>
                        )
                    }
                </Menu>
            </Td>
        </Tr>
    )
}