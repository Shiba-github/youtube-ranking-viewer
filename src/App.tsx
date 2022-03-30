import React, { useState } from 'react'
import Header from './components/Header'
import AggregationPeriodButtons from './components/AggregationPeriodButtons'
import RankViewContainer from './components/RankViewContainer'
import { ChakraProvider } from '@chakra-ui/react'

const App = () => {
    const [selectedPeriod, setSelectedPeriod] = useState('daily')
    return (
        <ChakraProvider>
            <Header></Header>
            <AggregationPeriodButtons onSelectedPeriod={(period: string) => setSelectedPeriod(period)}></AggregationPeriodButtons>
            <RankViewContainer></RankViewContainer>
        </ChakraProvider>
    )
}

export default App
