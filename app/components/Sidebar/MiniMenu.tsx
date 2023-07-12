'use client'

import { EmailIcon, InfoIcon } from "@chakra-ui/icons"
import { Avatar, Box, IconButton, VStack } from "@chakra-ui/react"
import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { CodeIcon, FileIcon, HomeIconFull } from "../Icons"

export const MiniMenu = () => {

    const [isOpen, setIsOpen] = useState(false)

    const MotionBox = motion(Box)
    const MotionIcon = motion(IconButton)

    const boxVariants = {
        open: {
            height: 'min-content',
            transition: {
                duration: 1
            }
        },
        close: {
            height: '64px',
            transition: {
                duration: 1,
                when: "afterChildren"
            }
        }
    }

    const IconVariants = {
        show: {
            opacity: 1,
        },
        hide: {
            opacity: 0,
        }
    }

    const IconStyle = {
        bg: 'white',
        borderRadius: '10rem',
        display: isOpen ? 'flex' : 'none',
        variants: IconVariants,
        initial: isOpen ? { opacity: 0 } : { opacity: 1 },
        animate: isOpen ? 'show' : 'hide'
    }

    return (
        <AnimatePresence initial={false} >
            <MotionBox
                bg='white'
                borderRadius='10rem'
                variants={boxVariants}
                initial={isOpen ? { height: '64px' } : { height: '324px' }}
                animate={isOpen ? 'open' : 'close'}
            >
                <VStack pb='1.25rem'>
                    <Avatar
                        name='avatar'
                        size='lg'
                        src='/main.jpg'
                        objectPosition='top'
                        showBorder={true}
                        onClick={() => setIsOpen(!isOpen)}
                    />
                    <Link href={`/`}>
                        <MotionIcon
                            aria-label="home"
                            icon={<HomeIconFull />}
                            {...IconStyle}
                            transition={isOpen ?
                                {
                                    duration: 1,
                                    delay: 0.2
                                } :
                                {
                                    duration: 0.8
                                }
                            }
                        />
                    </Link>
                    <Link href={`/about`}>
                        <MotionIcon
                            aria-label="about"
                            icon={<InfoIcon />}
                            {...IconStyle}
                            transition={isOpen ?
                                {
                                    duration: 1,
                                    delay: 0.4
                                } :
                                {
                                    duration: 0.6
                                }}
                        />
                    </Link>
                    <Link href={`/skills`}>
                        <MotionIcon
                            aria-label="skills"
                            icon={<FileIcon />}
                            {...IconStyle}
                            transition={isOpen ?
                                {
                                    duration: 1,
                                    delay: 0.5
                                } :
                                {
                                    duration: 0.4
                                }}
                        />
                    </Link>
                    <Link href={`/project`}>
                        <MotionIcon
                            aria-label="project"
                            icon={<CodeIcon />}
                            {...IconStyle}
                            transition={isOpen ?
                                {
                                    duration: 1,
                                    delay: 0.6
                                } :
                                {
                                    duration: 0.3,
                                }}
                        />
                    </Link>
                    <Link href={`/contact`}>
                        <MotionIcon
                            aria-label="contact"
                            icon={<EmailIcon />}
                            {...IconStyle}
                            transition={isOpen ?
                                {
                                    duration: 1,
                                    delay: 0.8
                                } :
                                {
                                    duration: 0.2,
                                }}
                        />
                    </Link>
                </VStack>
            </MotionBox>
        </AnimatePresence>
    )
}