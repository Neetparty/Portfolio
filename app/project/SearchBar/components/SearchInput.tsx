'use client'

import { SearchIcon, SettingsIcon } from "@chakra-ui/icons"
import { Box, Input, InputGroup, InputLeftElement, MenuButton, Menu, MenuList, Portal, Button, MenuOptionGroup, MenuItemOption } from "@chakra-ui/react"

export const SearchInput = ({ setValue, sort }: { setValue: any, sort: any }) => {

    return (
        <Box
            display='flex'
            justifyContent='center'
            justifyItems='center'
            w='100%'
            mt='2rem'
            zIndex='10'
        >
            <InputGroup
                justifyContent='center'
                w='60%'
            >
                <InputLeftElement
                    pointerEvents='none'
                    color='blackAlpha.700'
                >
                    <SearchIcon />
                </InputLeftElement>
                <Input
                    shadow='base'
                    borderColor='blackAlpha.400'
                    placeholder='Search the product'
                    onChange={(e) => setValue(e.target.value)}
                />
                <Menu>
                    <MenuButton
                        as={Button}
                        leftIcon={<SettingsIcon />}
                        color='blackAlpha.700'
                        variant='ghost'
                        bgColor='none'
                        ml='1rem'
                        w='6rem'
                        px='0.75rem'
                        _hover={{
                            bgColor: 'none'
                        }}
                        _active={{
                            bgColor: 'none'
                        }}
                    >
                        Sort
                    </MenuButton>
                    <Portal>
                        <MenuList >
                            <MenuOptionGroup type='radio' defaultValue='' onChange={(val) => sort([val, val === 'asc' || val === 'desc' ? 'title' : 'price'])}>
                                <MenuItemOption as='kbd' value='' >{`Default`}</MenuItemOption>
                                <MenuItemOption as='kbd' value='asc' >{`Name A > Z`}</MenuItemOption>
                                <MenuItemOption as='kbd' value='desc' >{`Name Z > A`}</MenuItemOption>
                                <MenuItemOption as='kbd' value='lh' >{`Price Low > High`}</MenuItemOption>
                                <MenuItemOption as='kbd' value='hl' >{`Price High > Low`}</MenuItemOption>
                            </MenuOptionGroup>
                        </MenuList>
                    </Portal>
                </Menu>
            </InputGroup>
        </Box>
    )
}