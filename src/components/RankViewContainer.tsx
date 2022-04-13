import React from 'react'
import { Flex } from '@chakra-ui/react'
import RankCategoryContainer from './RankCategoryContainer'

const RankViewContainer = () => {
    return (
        <Flex flexDirection="row" minWidth="1250px" justifyContent="center" marginTop="30px">
            <RankCategoryContainer categoryName={''}></RankCategoryContainer>
            <RankCategoryContainer categoryName={'Java'}></RankCategoryContainer>
            <RankCategoryContainer categoryName={'Go'}></RankCategoryContainer>
            <RankCategoryContainer categoryName={'Ruby'}></RankCategoryContainer>
            <RankCategoryContainer categoryName={'PHP'}></RankCategoryContainer>
            <RankCategoryContainer categoryName={'JavaScript'}></RankCategoryContainer>
        </Flex>
    )
}

export default RankViewContainer
