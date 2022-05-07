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
        return <div>loading now....</div>
    }
    return (
        <Flex flexDirection="column">
            <Center bg="lightgray" height="50px" width="200px" marginLeft="7px">
                {categoryName}
            </Center>
            {videoData.map((video) => {
                return <Panel key={video.videoId} videoData={video}></Panel>
            })}
        </Flex>
    )
}

export default RankCategoryContainer
