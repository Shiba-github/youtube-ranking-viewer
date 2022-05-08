import React, { useState, useEffect } from 'react'
import { Center, Flex } from '@chakra-ui/react'
import { fetchPanelData, PanelTypes } from '../apis/fetchYoutubeApi'
import Panel from './Panel'

type Props = {
    categoryName: string
}

const RankCategoryContainer = ({ categoryName }: Props) => {
    const [videoData, setVideoData] = useState<PanelTypes[]>()

    useEffect(() => {
        // 即時実行関数
        ;(async () => {
            setVideoData(await fetchPanelData())
        })()
    }, [])
    if (typeof videoData === 'undefined') {
        return <div>loading now...</div>
    }
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
            {videoData.map((video) => {
                return <Panel key={video.videoId} videoData={video}></Panel>
            })}
        </Flex>
    )
}

export default RankCategoryContainer
