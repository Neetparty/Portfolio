'use client'
import { AddIcon, ChevronDownIcon, ChevronUpIcon, CloseIcon, DeleteIcon, EditIcon, SettingsIcon } from "@chakra-ui/icons"
import { IconButton, Td, Tr, Text, Menu, MenuButton, MenuList, MenuItem, Input, Stack, HStack, Select } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { useRef, useState } from "react"
import { TableInputSelection } from "./TableInputSelection"

interface EditableTableProps {
    data: {
        index: number,
        artwork: string,
        price: string | number
    },
    row: string | number,
    index: number,
    onEdit: any,
    onDelete: any,
    changeIndex: any
}

export const EditableTable = ({ data, row, index, onEdit, onDelete, changeIndex }: EditableTableProps) => {

    //โหมดการแก้ไขตาราง
    const [editMode, setEditMode] = useState<boolean>(false)

    const MotionTr = motion(Tr)

    //ข้อมูลจาก Input ภายในตาราง
    const artworkRef: any = useRef()
    const priceRef: any = useRef()

    //บันทึกข้อมูลใหม่ลงในข้อมูลตัวอย่าง
    const handleSave = () => {

        const updateData = {
            index: row,
            artwork: artworkRef.current.value,
            price: priceRef.current.value
        }
        //เรียกให้คำลั่งแก้ไขและบันทึกข้อมูลตัวอย่าง
        onEdit(row, updateData)

        //ปิดโหมดการแก้ไขตาราง
        setEditMode(false)
    }

    const handleChangeIndex = (direction: number) => {
        setEditMode(false)
        changeIndex(row, direction)
    }
    return (
        <MotionTr
            textColor='blackAlpha.700'
        >
            <Td p='5px' align='center' justifyItems='center' >
                <Stack m='0' p='0'>
                    {
                        row === 0 ?
                            <></>
                            :
                            <IconButton
                                aria-label="up"
                                icon={<ChevronUpIcon />}
                                size='sm'
                                p='0'
                                colorScheme='none'
                                color='blackAlpha.700'
                                onClick={() => handleChangeIndex(-1)}
                            />
                    }
                    {
                        row === index - 1 ?
                            <></>
                            :
                            <IconButton
                                aria-label="up"
                                icon={<ChevronDownIcon />}
                                size='sm'
                                p='0'
                                colorScheme='none'
                                color='blackAlpha.700'
                                onClick={() => handleChangeIndex(1)}
                            />
                    }
                </Stack>
            </Td>
            <Td>
                {editMode ?
                    (
                        <Select
                            variant='flushed'
                            borderBottom='2px'
                            defaultValue={data.artwork}
                            borderColor='blackAlpha.700'
                            fontWeight='bold'
                            placeholder='Select option'
                            ref={artworkRef}
                        >
                            <TableInputSelection />
                        </Select>
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
                            defaultValue={`${data.price}`}
                            inputMode='numeric'
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
                <Menu>
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
        </MotionTr>
    )
}