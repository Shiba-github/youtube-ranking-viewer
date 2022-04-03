import React from 'react'
import { Flex } from '@chakra-ui/react'
import RankCategoryContainer from './RankCategoryContainer'

const RankViewContainer = () => {
    return (
            <Flex flexDirection={'row'} minWidth={1250} justifyContent={'center'} marginTop={'30px'}>
                <RankCategoryContainer categoryName={''}></RankCategoryContainer>
                <RankCategoryContainer categoryName={'フィッシャーズ'}></RankCategoryContainer>
                <RankCategoryContainer categoryName={'HIKAKIN'}></RankCategoryContainer>
                <RankCategoryContainer categoryName={'SEIKIN'}></RankCategoryContainer>
                <RankCategoryContainer categoryName={'MASUO'}></RankCategoryContainer>
                <RankCategoryContainer categoryName={'東海オンエア'}></RankCategoryContainer>
                <RankCategoryContainer categoryName={'はじめしゃちょー'}></RankCategoryContainer>
            </Flex>
    )
}

export default RankViewContainer
