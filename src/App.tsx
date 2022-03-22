import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Header from './components/Header'
import AggregationPeriodButtons from './components/AggregationPeriodButtons'

export const App = () => (
    <ChakraProvider>
        <Header></Header>
        <AggregationPeriodButtons></AggregationPeriodButtons>
    </ChakraProvider>
)

export default App
