import React from 'react'
import { ButtonGroup, Box, Flex } from '@chakra-ui/react'

const AggregationPeriodButtons = () => {
    return (
        <div>
            <Flex justify="right">
                <ButtonGroup mt={7} mr={7} margin-left="auto" spacing={0}>
                    <Box
                        as="button"
                        height="40px"
                        width="92px"
                        lineHeight="1.2"
                        transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                        border="1px"
                        px="8px"
                        borderRadius="6px 0 0 6px"
                        borderColor="teal.50"
                        fontSize="14px"
                        fontWeight="semibold"
                        bg="teal.200"
                        color="white"
                        _hover={{ bg: 'teal.300' }}
                        _active={{
                            bg: '#dddfe2',
                            transform: 'scale(0.98)',
                            borderColor: 'teal.50',
                        }}
                        _focus={{
                            boxShadow: '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
                        }}
                    >
                        hour
                    </Box>
                    <Box
                        as="button"
                        height="40px"
                        width="92px"
                        lineHeight="1.2"
                        transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                        border="1px"
                        borderColor="teal.50"
                        px="8px"
                        borderRadius="0"
                        fontSize="14px"
                        fontWeight="semibold"
                        bg="teal.300"
                        color="white"
                        _hover={{ bg: 'teal.400' }}
                        _active={{
                            bg: '#dddfe2',
                            transform: 'scale(0.98)',
                            borderColor: '#bec3c9',
                        }}
                        _focus={{
                            boxShadow: '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
                        }}
                    >
                        daily
                    </Box>
                    <Box
                        as="button"
                        height="40px"
                        width="92px"
                        lineHeight="1.2"
                        transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                        border="1px"
                        borderColor="teal.50"
                        px="8px"
                        borderRadius="0"
                        fontSize="14px"
                        fontWeight="semibold"
                        bg="teal.400"
                        color="white"
                        _hover={{ bg: 'teal.500' }}
                        _active={{
                            bg: '#dddfe2',
                            transform: 'scale(0.98)',
                            borderColor: '#bec3c9',
                        }}
                        _focus={{
                            boxShadow: '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
                        }}
                    >
                        weekly
                    </Box>
                    <Box
                        as="button"
                        height="40px"
                        width="92px"
                        lineHeight="1.2"
                        transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                        border="1px"
                        borderColor="teal.50"
                        px="8px"
                        borderRadius="0 6px 6px 0"
                        fontSize="14px"
                        fontWeight="semibold"
                        bg="teal.500"
                        color="white"
                        _hover={{ bg: 'teal.600' }}
                        _active={{
                            bg: '#dddfe2',
                            transform: 'scale(0.98)',
                            borderColor: '#bec3c9',
                        }}
                        _focus={{
                            boxShadow: '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
                        }}
                    >
                        monthly
                    </Box>
                </ButtonGroup>
            </Flex>
        </div>
    )
}

export default AggregationPeriodButtons
