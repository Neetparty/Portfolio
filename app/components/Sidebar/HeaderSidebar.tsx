'use client'

import { Avatar, Box, HStack, IconButton, Text, VStack } from "@chakra-ui/react"
import { FacrbookIcon, MicrosoftIcon, TwitterIcon } from "../Icons"
import { GithubIcon } from "../Icons/GithubIcon"

export const HeaderSidebar = () => {
    return(
        <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            height='100%'
        >
            <VStack>
                <Avatar
                    name='avatar'
                    size='xl' 
                    src='/main.jpg'
                    showBorder={true}
                    objectPosition='top'
                />
                <Text 
                    textColor='white' 
                    fontSize='xl' 
                    fontWeight='bold' 
                >Sathapat Kheawrodpai</Text>
                <HStack>
                    <IconButton 
                        aria-label='facebook' 
                        icon={<FacrbookIcon />}
                        size='sm'
                        borderRadius='3xl'
                        color='purple.400'
                        bgColor='white'
                        _hover={{
                            color: 'white',
                            bgColor: 'facebook.600',
                            
                        }}
                        _active={{
                            color: 'white',
                            bgColor: 'facebook.600'
                        }}
                    />
                    <IconButton 
                        aria-label='twitter' 
                        icon={<TwitterIcon />}
                        size='sm'
                        borderRadius='3xl'
                        color='purple.400'
                        bgColor='white'
                        _hover={{
                            color: 'white',
                            bgColor: 'twitter.600'
                        }}
                        _active={{
                            color: 'white',
                            bgColor: 'twitter.600'
                        }}
                    />
                    <IconButton 
                        aria-label='microsoft' 
                        icon={<MicrosoftIcon />}
                        size='sm'
                        borderRadius='3xl'
                        color='purple.400'
                        bgColor='white'
                        _hover={{
                            color: 'twitter.600',
                            bgColor: 'white'
                        }}
                        _active={{
                            color: 'twitter.600',
                            bgColor: 'white'
                        }}
                    />
                    <IconButton 
                        aria-label='github' 
                        icon={<GithubIcon />}
                        size='sm'
                        borderRadius='3xl'
                        color='purple.400'
                        bgColor='white'
                        _hover={{
                            color: 'white',
                            bgColor: 'black'
                        }}
                        _active={{
                            color: 'white',
                            bgColor: 'black'
                        }}
                    />
                </HStack>
            </VStack>
        </Box>
    )
}