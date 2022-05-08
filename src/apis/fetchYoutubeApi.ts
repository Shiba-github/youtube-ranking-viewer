import youtubeApiWrapper from './youtubeApiWrapper'

export type PanelTypes = {
    videoId: string
    thumbnailsUrl: string
    title: string
    viewCount: number
}

const MAX_RESULTS = 2 //表示件数

export const fetchPanelData = async (): Promise<PanelTypes[]> => {
    const youtubeApi = new youtubeApiWrapper()
    const searchData = await youtubeApi.fetchSearchApi({ q: 'java', maxResults: MAX_RESULTS }).catch((error) => console.log(error))
    if (typeof searchData === 'undefined') {
        return Promise.reject('search api error')
    }

    let queryIdList = '' //"id1, id2, id3, ..."
    for (const item of searchData.items) {
        queryIdList = queryIdList + item.id.videoId + ','
    }
    const videoData = await youtubeApi.fetchVideoApi({ part: 'statistics', id: queryIdList }).catch((error) => console.log(error))
    if (typeof videoData === 'undefined') {
        return Promise.reject('video api error')
    }

    const viewCounts: { [key: string]: number } = {}

    videoData.items.forEach((e) => {
        viewCounts[e.id] = +e.statistics.viewCount
    })

    return searchData.items.map((s) => {
        return {
            videoId: s.id.videoId,
            thumbnailsUrl: s.snippet.thumbnails.high.url,
            title: s.snippet.title,
            viewCount: viewCounts[s.id.videoId],
        }
    })
}
