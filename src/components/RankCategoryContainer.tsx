import React, { useState } from 'react'
import { Center, Flex, Text } from '@chakra-ui/react'
import YoutubeApiWrapper from '../apis/youtubeApiWrapper'
import Panel from './Panel'

type Props = {
    categoryName: string
}

const MAX_RESULTS = 7 //表示件数

const RankCategoryContainer = ({ categoryName }: Props) => {
    const [apiItems, setApiItems] = useState('')
    const [videoApiItems, setVideoApiItems] = useState('')
    const indexNumberArray = [...Array(MAX_RESULTS)].map((_, index) => index)
    if (categoryName) {
        let queryIdList = '' //"id1, id2, id3, ..."
        const youtubeApiWrapper = new YoutubeApiWrapper()
        const fetchResult = youtubeApiWrapper.fetchSearchApi({ q: categoryName, maxResults: MAX_RESULTS })
        fetchResult
            .then(function res(response: JSON) {
                const stringify = JSON.stringify(response)
                const parse = JSON.parse(stringify)
                setApiItems(JSON.stringify(parse.data.items))
                for (const item of parse.data.items) {
                    queryIdList = queryIdList + item.id.videoId + ','
                }
                youtubeApiWrapper
                    .fetchVideoApi({ part: 'statistics', id: queryIdList })
                    .then(function res(response: JSON) {
                        const stringify = JSON.stringify(response)
                        const parse = JSON.parse(stringify)
                        setVideoApiItems(JSON.stringify(parse.data.items))
                    })
                    .catch(function err(error: JSON) {
                        console.log(error)
                    })
            })
            .catch(function err(error: JSON) {
                console.log(error)
            })

        return (
            <Flex flexDirection="column" padding="16px" borderRight="1px" borderColor="blackAlpha.300">
                <Center
                    marginBottom="16px"
                    borderBottom="2px"
                    borderColor="blackAlpha.600"
                    borderStyle="solid"
                    color="blackAlpha.700"
                    fontSize="32px"
                    fontWeight="medium"
                    height="50px"
                    width="300px"
                    borderRadius="2px"
                >
                    {categoryName}
                </Center>
                {indexNumberArray.map((index) => {
                    return <Panel key={index} index={index} apiItems={apiItems} videoApiItems={videoApiItems}></Panel>
                })}
            </Flex>
        )
    } else {
        return (
            <Flex flexDirection="column" marginTop="82px">
                {indexNumberArray.map((index) => {
                    return (
                        <Flex key={index} alignItems="center" justifyContent="center" marginBottom="16px" height="232px" fontSize={60}>
                            <Text color="blackAlpha.600">{index + 1}</Text>
                        </Flex>
                    )
                })}
            </Flex>
        )
    }
}

export default RankCategoryContainer
