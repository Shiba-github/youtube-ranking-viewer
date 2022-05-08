import React from 'react'
import { MdCalendarToday as DateIcon, MdThumbUpOffAlt as GoodCountIcon, MdSmartDisplay as PlayCountIcon } from 'react-icons/md'
import SampleThumbnail from '../static/img/sample_ thumbnail.png'
import SampleChannelIcon from '../static/img/sample_channel_icon.jpeg'
import { Image, Text, Flex, LinkOverlay, LinkBox, Spacer, Icon, Center } from '@chakra-ui/react'
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
    const length = 20
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
            <Flex flexDirection="column" marginBottom="16px" bg="white" boxShadow="md" rounded="8px" height="232px" width="300px">
                <LinkOverlay href={'https://www.youtube.com/watch?v=' + videoData.videoId}></LinkOverlay>
                <Image width="300px" height="168px" src={videoData.thumbnailsUrl} roundedTop="8px"></Image>
                <Flex margin="8px" flexDirection="column">
                    <Flex marginBottom="4px">
                        <Text color="blackAlpha.600" fontWeight="normal" fontSize="16px" lineHeight="24px">
                            {makeShortSentence(videoData.title)}
                        </Text>
                        <Spacer />
                        <Flex flexDirection="row" alignItems="center">
                            <Image marginRight="4px" width="24px" height="auto" rounded="8px" src={SampleChannelIcon}></Image>
                            <Text color="blackAlpha.600" fontWeight="medium" fontSize="14px" lineHeight="22px">
                                Bro Code
                            </Text>
                        </Flex>
                    </Flex>
                    <Flex flexDirection="row">
                        <Spacer />
                        <Flex marginRight="8px" alignItems="center">
                            <Icon as={DateIcon} color="blackAlpha.500" marginRight="2px"></Icon>
                            <Text color="blackAlpha.500" fontSize="12px" lineHeight="20px">
                                2022/02/16
                            </Text>
                        </Flex>
                        <Flex marginRight="8px" alignItems="center">
                            <Icon as={PlayCountIcon} color="blackAlpha.500" marginRight="2px"></Icon>
                            <Text color="blackAlpha.500" fontSize="12px" lineHeight="20px">
                                {videoData.viewCount}
                            </Text>
                        </Flex>
                        <Flex alignItems="center">
                            <Icon as={GoodCountIcon} color="blackAlpha.500" marginRight="2px"></Icon>
                            <Text color="blackAlpha.500" fontSize="12px" lineHeight="20px">
                                980
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </LinkBox>
    )
    // return (
    //     <LinkBox>
    //         <Flex flexDirection="column" marginBottom="16px" bg="white" boxShadow="md" rounded="8px" height="232px" width="300px">
    //             <LinkOverlay href={'https://www.youtube.com/watch?v=' + videoData.videoId}></LinkOverlay>
    //             <Image width="300px" height="auto" src={videoData.thumbnailsUrl} roundedTop="8px"></Image>
    //             <Text fontSize={13}>{videoData.title}</Text>
    //             <Flex flexDirection="row" alignItems="center">
    //                 <Image src={YoutubeIcon} width="auto" height="15px"></Image>
    //                 <Text> : {videoData.viewCount}</Text>
    //             </Flex>
    //         </Flex>
    //     </LinkBox>
    // )
}

export default Panel
