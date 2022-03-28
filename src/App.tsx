import React, { useState } from 'react'
import Header from './components/Header'
import AggregationPeriodButtons from './components/AggregationPeriodButtons'
import { ChakraProvider } from '@chakra-ui/react'

const App = () => {
    const [selectedPeriod, setSelectedPeriod] = useState('daily')
    return (
        <ChakraProvider>
            <Header></Header>
            <AggregationPeriodButtons onSelectedPeriod={(period: string) => setSelectedPeriod(period)}></AggregationPeriodButtons>
        </ChakraProvider>
    )
}

export default App
