import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Header from './components/Header'
import AggregationPeriodButtons from './components/AggregationPeriodButtons'
import RankViewContainer from './components/RankViewContainer'

export const App = () => (
    <ChakraProvider>
        <Header></Header>
        <AggregationPeriodButtons></AggregationPeriodButtons>
        <RankViewContainer></RankViewContainer>
    </ChakraProvider>
)

export default App
