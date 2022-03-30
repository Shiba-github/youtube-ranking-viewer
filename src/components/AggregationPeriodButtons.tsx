import React from 'react'
import { ButtonGroup, Box, Flex } from '@chakra-ui/react'
type Props = {
    onSelectedPeriod: (selectedPeriod: string) => void
}

const Options = [
    {
        borderColor: 'teal.50',
        bg: 'teal.200',
        hoverBackground: 'teal.300',
        active: {
            bg: '#dddfe2',
            transform: 'scale(0.98)',
            borderColor: 'teal.50',
        },
        period: 'hourly',
    },
    {
        borderColor: 'teal.50',
        bg: 'teal.300',
        hoverBackground: 'teal.400',
        active: {
            bg: '#dddfe2',
            transform: 'scale(0.98)',
            borderColor: 'teal.50',
        },
        period: 'daily',
    },
    {
        borderColor: 'teal.50',
        bg: 'teal.400',
        hoverBackground: 'teal.500',
        active: {
            bg: '#dddfe2',
            transform: 'scale(0.98)',
            borderColor: 'teal.50',
        },
        period: 'weekly',
    },
    {
        borderColor: 'teal.50',
        bg: 'teal.500',
        hoverBackground: 'teal.600',
        active: {
            bg: '#dddfe2',
            transform: 'scale(0.98)',
            borderColor: 'teal.50',
        },
        period: 'monthly',
    },
]

const AggregationPeriodButtons = ({ onSelectedPeriod }: Props) => {
    return (
        <Flex justify="right">
            <ButtonGroup mt={7} mr={7} margin-left="auto" spacing={0} overflow="hidden" borderRadius="12">
                {Options.map((value) => (
                    <Box
                        key={value.period}
                        borderColor={value.borderColor}
                        bg={value.bg}
                        _hover={{ bg: value.hoverBackground }}
                        _active={value.active}
                        onClick={() => onSelectedPeriod(value.period)}
                        color="white"
                        as="button"
                        height="40px"
                        width="92px"
                        lineHeight="1.2"
                        transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                        border="1px"
                        px="8px"
                        fontSize="14px"
                        fontWeight="semibold"
                        _focus={{
                            boxShadow: '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
                        }}
                    >
                        {value.period}
                    </Box>
                ))}
            </ButtonGroup>
        </Flex>
    )
}

export default AggregationPeriodButtons
