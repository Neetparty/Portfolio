'use client'

import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons"
import { Box, Button, ButtonGroup, Divider, IconButton, SimpleGrid } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { ProductItems } from "./ProductItems"
import { SearchInput } from "./SearchInput"

type ProductLayoutProps = {
    product: Array<object>
}

export const ProductLayout = ({product}: ProductLayoutProps) => {

    const [ filter, setFilter ] = useState('') 
    const [ filteredProduct, setFilteredProduct] = useState<Array<object>>(product) 
    const [ [ page, list ], setPage ] = useState([1, 0])
    const [ [sort, type], setSort ] = useState(['', ''])
    const [ sortedProduct, setSortedProduct ] = useState<Array<object>>(product)


    useEffect(() => {
        const p = [...sortedProduct]
        if(filter){
            const filtered = p.filter((val:any) => { 
                try {
                    return val?.title.toLowerCase().includes(filter.toLowerCase())
                } catch (error) {
                    return []
                }
            })
            return setFilteredProduct(filtered)
        }
        return setFilteredProduct(p)
    }, [filter])

    useEffect(() => {
        const p = [...product]

        if (type === '' || sort === '') return setFilteredProduct(p)
        if (type === 'title'){
            switch (sort) {
                case 'asc':
                    p.sort((a:any, b:any) => {
                        if(a[`title`] < b[`title`]) return -1
                        if(a[`title`] > b[`title`]) return 1
                        return 0
                    })
                    setFilteredProduct(p)
                    setSortedProduct(p)
                    break;
                case 'desc':
                    p.sort((a:any, b:any) => {
                        if(a[`title`] < b[`title`]) return 1
                        if(a[`title`] > b[`title`]) return -1
                        return 0
                    })
                    setFilteredProduct(p)
                    setSortedProduct(p)
                    break;
                default:
                    break;
            }
        }
        if (type === 'price'){
            switch (sort) {
                case 'lh':
                    p.sort((a:any, b:any) => {
                        if(a[`price`] < b[`price`]) return -1
                        if(a[`price`] > b[`price`]) return 1
                        return 0
                    })
                    setFilteredProduct(p)
                    setSortedProduct(p)
                    break;
                case 'hl':
                    p.sort((a:any, b:any) => {
                        if(a[`price`] < b[`price`]) return 1
                        if(a[`price`] > b[`price`]) return -1
                        return 0
                    })
                    setFilteredProduct(p)
                    setSortedProduct(p)
                    break;
                default:
                    break;
            }
        }

    }, [sort, type])

    return (
        <Box>
            <Box>
                <SearchInput setValue={setFilter} sort={setSort} />
            </Box>
            <Box 
                display='flex'
                justifyContent='center'
            >
                <Divider mt='2rem' mb='2rem' w='75%' border='1px' borderColor='blackAlpha.400' />
            </Box>
            <SimpleGrid column={3} justifyItems='center' minChildWidth='250px' spacingX='1rem' spacingY='1.5rem' >
                {filteredProduct.slice(list, page*6).map((item, key) => <ProductItems key={key} data={item} />)}
            </SimpleGrid>
            <Box
                display='flex'
                justifyContent='center'
                mt='2rem'
                mb='2rem'
            >
                <ButtonGroup>
                    <IconButton
                        aria-label='prev'
                        variant='ghost'
                        icon={<ChevronLeftIcon boxSize='1.5rem' />}
                        onClick={() => page === 1 ? setPage([1, 0]) : setPage([page-1, list-6])}
                        _hover={{
                            bgColor: 'none'
                        }}
                        _active={{
                            color: 'purple.300'
                        }}
                    />
                    <Button 
                        variant='ghost'
                        bgColor={page === 1 ? 'purple.300' : 'none'}
                        color={page === 1 ? 'white' : 'black'}
                        onClick={() => setPage([1, 0])}
                        _hover={{
                            bgColor: 'none'
                        }}
                        _active={{
                            color: 'purple.300'
                        }}
                    >1</Button>
                    <Button 
                        variant='ghost' 
                        bgColor={page === 2 ? 'purple.300' : 'none'}
                        color={page === 2 ? 'white' : 'black'}
                        onClick={() => setPage([2, 6])}
                        _hover={{
                            bgColor: 'none'
                        }}
                        _active={{
                            color: 'purple.300'
                        }}
                    >2</Button>
                    <Button 
                        variant='ghost'
                        bgColor={page === 3 ? 'purple.300' : 'none'}
                        color={page === 3 ? 'white' : 'black'}
                        onClick={() => setPage([3, 12])}
                        _hover={{
                            bgColor: 'none'
                        }}
                        _active={{
                            color: 'purple.300'
                        }}
                    >3</Button>
                    <IconButton
                        aria-label='prev'
                        variant='ghost'
                        icon={<ChevronRightIcon boxSize='1.5rem' />}
                        onClick={() => page === 3 ? setPage([3, 12]) : setPage([page+1, list+6])}
                        _hover={{
                            bgColor: 'none'
                        }}
                        _active={{
                            color: 'purple.300'
                        }}
                    />
                </ButtonGroup>
            </Box>
        </Box>
    )
}