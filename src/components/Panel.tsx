import React from 'react'
import { Image, Text, Box, Flex, LinkOverlay, LinkBox } from '@chakra-ui/react'
import YoutubeIcon from '../static/img/youtubeIcon.png'
import { PanelTypes } from '../apis/fetchYoutubeApi'

type Props = {
    videoData: PanelTypes
}

/**
 * タイトル文字数を数えて、長すぎるときは成形して返す
 * @param {string} sentence タイトル文字列
 * @returns {string} 長い場合は末尾に…をつけて返す
 */
const makeShortSentence = (sentence: string) => {
    const length = 75
    const isFullWiidth = (str: string) => {
        return str.match(/^[^\x01-\x7E\xA1-\xDF]+$/) ? true : false
    }
    const arr = sentence.split('')
    let counter = 0
    let titleLength = 0
    let maxTitleLength = 0
    for (const str of arr) {
        if (isFullWiidth(str)) {
            counter += 14 / 8
            titleLength++
        } else {
            counter += 1
            titleLength++
        }
        if (length <= counter && counter <= length + 1.5) {
            maxTitleLength = titleLength
        }
    }
    if (counter <= length) {
        return sentence
    } else {
        return sentence.slice(0, maxTitleLength) + '...'
    }
}

const Panel = ({ videoData }: Props) => {
    return (
        <LinkBox>
            <Box flexDirection="column" bg="teal.300" height="230px" width="200px" margin="7px">
                <LinkOverlay href={'https://www.youtube.com/watch?v=' + videoData.videoId}></LinkOverlay>
                <Image width={200} height="auto" src={videoData.thumbnailsUrl}></Image>
                <Text fontSize={13}>{videoData.title}</Text>
                <Flex flexDirection="row" alignItems="center">
                    <Image src={YoutubeIcon} width="auto" height="15px"></Image>
                    <Text> : {videoData.viewCount}</Text>
                </Flex>
            </Box>
        </LinkBox>
    )
}

export default Panel
