import React from 'react'
import { Flex } from '@chakra-ui/react'
import RankCategoryContainer from './RankCategoryContainer'

const RankViewContainer = () => {
    return (
        <Flex flexDirection={'row'} minWidth={1250} justifyContent={'center'} marginTop={'30px'}>
            <RankCategoryContainer categoryName={'java'}></RankCategoryContainer>
        </Flex>
    )
}

export default RankViewContainer
