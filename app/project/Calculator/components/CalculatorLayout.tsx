'use client'
import { Container, Box, Button, SimpleGrid, Text } from "@chakra-ui/react"
import { useState } from "react"

const CalculatorButton = ({ text, setValue }: { text: string, setValue: any }) => {

    return (
        <Button
            h='4rem'
            variant='outline'
            color='blackAlpha.700'
            borderColor='blackAlpha.400'
            borderRadius='10px'
            _hover={{
                bgColor: 'none',
                borderColor: 'purple.400'
            }}
            _active={{
                bgColor: 'purple.400',
                borderColor: 'purple.400',
                color: 'white'
            }}
            onClick={() => setValue(text)}
        >
            {text === 'eq' ? '=' : text}
        </Button>
    )
}

export const CalculatorLayout = () => {

    const [cal, setCal] = useState('')
    const [result, setResult] = useState('')

    const operators = [ '%', '/', '*', '-', '+', '.']

    const btnLayout = [
        ['%', '+/-', 'C', '/'],
        ['7', '8', '9', '*'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '+'],
        ['', '0', '.', 'eq'],
    ]

    const insertButtonValue = (val: string) => {

        if(val === '') return

        if(val === 'eq'){
            val = ''
            setResult(eval(cal + val).toString())
            return
        }

        if(val === 'C'){
            val = ''
            setCal('')
            setResult('')
            return
        }

        if(val === '+/-'){
            val = ''
            if(cal === '') return
            Number(result) > 1 ? setResult(eval('-' + result)) : setResult(Math.abs(Number(result)).toString())
            return
        }

        if(val === '0' && cal === '') return

        if(cal.slice(-1) === '0' && operators.find(e => e === cal[cal.length - 2])) {
            setCal(cal.replace(/.$/, val))
            return
        }

        if(
            operators.includes(val) && cal === '' 
            || 
            operators.includes(val) && operators.includes(cal.slice(-1))
        ) return

        setCal(cal + val)

        if(!operators.includes(val)) setResult(eval(cal + val).toString())
    }


    return (
        <Container mt='4rem' >
            <Box
                h='5rem'
                w='100%'
                textAlign='end'
                border='1px'
                borderColor='blackAlpha.400'
                borderRadius='10px'
            >
                <Text m='0.5rem' noOfLines={1} mb='0' mr='1.5rem' >{cal || 0}</Text>
                <Text m='0.5rem' noOfLines={1} mt='0' mr='1rem' fontSize='3xl' >{result && result !== cal ? result : ''}</Text>
            </Box>
            <Box>
                <SimpleGrid mt='2rem' mb='3rem' columns={4} spacing='1rem' minChildWidth='20%' >
                    {
                        btnLayout.flat().map((v, k) => <CalculatorButton key={k} text={v} setValue={insertButtonValue} />)
                    }
                </SimpleGrid>
            </Box>
        </Container>
    )
} 