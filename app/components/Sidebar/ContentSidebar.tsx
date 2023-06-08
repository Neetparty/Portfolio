'use client'

import { EmailIcon, InfoIcon } from "@chakra-ui/icons"
import { Box, Button, VStack } from "@chakra-ui/react"
import Link from "next/link"
import { CodeIcon, FileIcon, HomeIconFull } from "../Icons"

export const ContentSidebar = () => {

    const IconStyle = {
        pl: '4rem',
        w: '100%',
        mt: '0px',
        pt: '1.85rem',
        pb: '1.85rem',
        size: 'lg',
        fontSize: 'lg',
        justifyContent: 'left',
        color: 'white',
        borderRadius: '0',
        bgColor: 'purple.400',
        _hover: {
            color: 'white',
            bgColor: 'purple.400',
        },
        _active: {
            color: 'purple.400',
            bgColor: 'white'
        }
    }

    return (
        <Box w='100%' h='100%'>
            <VStack pt='2rem' spacing='0' >
                <Box w='100%' h='100%'>
                    <Link href={`/`} >
                        <Button
                            aria-label="home"
                            leftIcon={<HomeIconFull />}
                            {...IconStyle}
                        >Home</Button>
                    </Link>
                </Box>
                <Box w='100%' h='100%'>
                    <Link href={`/about`} >
                        <Button
                            aria-label="about"
                            leftIcon={<InfoIcon />}
                            {...IconStyle}
                        >About</Button>
                    </Link>
                </Box>
                <Box w='100%' h='100%'>
                    <Link href={`/resume`} >
                        <Button
                            aria-label="resume"
                            leftIcon={<FileIcon />}
                            {...IconStyle}
                        >Resume</Button>
                    </Link>
                </Box>
                <Box w='100%' h='100%'>
                    <Link href={`/project`} >
                        <Button
                            aria-label="project"
                            leftIcon={<CodeIcon />}
                            {...IconStyle}
                        >Project</Button>
                    </Link>
                </Box>
                <Box w='100%' h='100%'>
                    <Link href={`/contact`} >
                        <Button
                            aria-label="contact"
                            leftIcon={<EmailIcon />}
                            {...IconStyle}
                        >Contact</Button>
                    </Link>
                </Box>
            </VStack>
        </Box>
    )
}