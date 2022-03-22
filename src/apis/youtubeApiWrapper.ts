const axios = require("axios").default
type youtubeSearchTypes = {
    part?:string;
    channelId?:string;
    maxResults?:number;
    order?:string;
    channelType?:string;
    eventType?:string;
    pageToken?:string;
    publishedAfter?:string;
    publishedBefore?:string;
    q?:string;
    regionCode?:string;
    safeSearch?:string;
    topicId?:string;
    type?:string;
    videoCaption?:string;
    videoCategoryId?:string;
    videoDefinition?:string;
    videoDimension?:string;
    videoDuration?:string;
    videoEmbeddable?:string;
    videoLicense?:string;
    videoSyndicated?:string;
    videoType?:string;
}

type youtubeVideosTypes = {
    part?:string;
    chart?:string;
    id?:string;
    maxResults?:number;
    regionCode?:string;
    videoCategoryId?:string;
}

class YoutubeApiWrapper {
    constructor() {
    }
    readonly API_KEY = ""
    readonly BASE_URL = "https://www.googleapis.com/youtube/v3";

    /**
     * youtubeAPIのSearchリクエストを利用しJSONが格納されたPromeiseオブジェクトを返す
     * 認証が必要なパラメータは除外してます
     * https://developers.google.com/youtube/v3/docs/search/list?hl=ja
     * @param {string} part
     * part パラメータには、API レスポンスに含める 1 つまたは複数の search リソースのプロパティをカンマ区切りリストの形式で指定します。
     * このパラメータに指定できる part 名は id と snippet です。
     * このパラメータに子プロパティを持つプロパティが指定されている場合、その子プロパティもレスポンスに含まれます。
     * たとえば、search の結果では、snippet プロパティには、結果のタイトルや説明などを識別する別のプロパティが含まれます。
     * この場合、part=snippet と設定すると、API レスポンスには、ネストされているプロパティもすべて含まれることになります。
     * @param {string} channelId
     * channelId パラメータは、チャンネルによって作成されたリソースのみが API レスポンスに含まれるように指定します。
     * @param {string} channelType
     * channelType パラメータでは、検索対象を特定のタイプのチャンネルに制限できます。
     * 以下の値を指定できます。
     * any – すべてのチャンネルを返します。
     * show – 番組のみを取得します。
     * @param {string} eventType
     * eventType パラメータは、検索対象をブロードキャスト イベントに制限します。
     * 以下の値を指定できます。
     * completed – 完了したブロードキャストのみを含めます。
     * live – アクティブなブロードキャストのみを含めます。
     * upcoming – 今後配信予定のブロードキャストのみを含めます。
     * @param {string} maxResults
     * maxResults パラメータには、結果セットとして返されるアイテムの最大数を指定します。0 以上 50 以下の値を指定できます。
     * デフォルト値は 5 です。
     * @param {string} order
     * order パラメータには、API レスポンス内のリソースの並べ替え方法を指定します。デフォルト値は SEARCH_SORT_RELEVANCE です。
     * 以下の値を指定できます。
     * date – リソースを作成日の新しい順に並べます。
     * rating – リソースを評価の高い順に並べます。
     * relevance – リソースを検索クエリの関連性が高い順に並べます。このパラメータのデフォルト値です。
     * title – リソースをタイトルのアルファベット順に並べます。
     * videoCount – アップロード動画の番号順（降順）にチャンネルを並べます。
     * viewCount – リソースを再生回数の多い順に並べます。
     * @param {string} pageToken
     * pageToken パラメータには、返される結果セットに含める特定のページを指定します。
     * API レスポンスでは、nextPageToken と prevPageToken プロパティは取得可能な他のページを表します。
     * @param {Date} publishedAfter
     * publishedAfter パラメータは、指定した日時より後に作成されたリソースのみが API レスポンスに含まれるように指定します。
     * この値は RFC 3339 形式の date-time 値です（1970-01-01T00:00:00Z）。
     * @param {Date} publishedBefore
     * publishedBefore パラメータは、指定した日時より前に作成されたリソースのみが API レスポンスに含まれるように指定します。
     * この値は RFC 3339 形式の date-time 値です（1970-01-01T00:00:00Z）。
     * @param {string} q
     * q パラメータは検索クエリを指定します。
     * @param {string} regionCode
     * regionCode パラメータは、指定した国の検索結果を返すように API に指示します。パラメータの値は ISO 3166-1 alpha-2 の国コードです。
     * @param {string} safeSearch
     * safeSearch パラメータは、検索結果に標準コンテンツの他、制限コンテンツも含めるかどうかを指定します。
     * 以下の値を指定できます。
     * moderate – 検索結果のコンテンツに対して一定のフィルタリングを行い、少なくともアプリケーションの言語/地域で制限されているコンテンツは除外します。
     * 動画の内容によっては、検索結果から動画が削除されたり検索結果内での優先度が下がったりすることがあります。これはデフォルトのパラメータ値です。
     * none – YouTube は検索結果セットのフィルタリングを行いません。
     * strict – 検索結果セットから制限コンテンツをすべて除外します。
     * 動画の内容によっては、検索結果から動画が削除されたり検索結果内での優先度が下がったりすることがあります。
     * @param {string} topicId
     * topicId パラメータは、指定したトピックに関連するリソースのみが API レスポンスに含まれるように指定します。
     * この値は Freebase トピック ID を識別します。
     * @param {string} type
     * type パラメータは、検索クエリの対象を特定のタイプのリソースのみに制限します。値はカンマで区切られたリソースのタイプのリストです。デフォルト値は video,channel,playlist です。
     * 以下の値を指定できます。
     * channel,
     * playlist,
     * video
     * @param {string} videoCaption
     * videoCaption パラメータは、字幕の有無に基づいて動画の検索結果をフィルタリングするように指定します。
     * 以下の値を指定できます。
     * any – 字幕の有無に基づいた結果のフィルタリングを行いません。
     * closedCaption – 字幕がある動画のみを含めます。
     * none – 字幕がない動画のみを含めます。
     * @param {string} videoCategoryId
     * videoCategoryId パラメータは、動画の検索結果をカテゴリに基づいてフィルタリングします。
     * @param {string} videoDefinition
     * videoDefinition パラメータを使用すると、検索結果を HD（高解像度）または SD（標準解像度）のみに制限できます。HD 動画は 720p 以上で再生できます。
     * また 1080p など、さらに高い解像度も利用できる場合があります。
     * 以下の値を指定できます。
     * any – 解像度に関係なく、すべての動画を返します。
     * high – HD 動画のみを取得します。
     * standard – SD 動画のみを取得します。
     * @param {string} videoDimension
     * videoDimension パラメータでは、検索結果を 2D 動画または 3D 動画のみに限定できます。
     * 以下の値を指定できます。
     * 2d – 検索結果から 3D 動画を除外します。
     * 3d – 検索結果を 3D 動画に限定します。
     * any – 返される結果に 3D 動画と 3D 以外の動画の両方を含めます。これはデフォルトの値です。
     * @param {string} videoDuration
     * videoDuration パラメータは、動画の検索結果を期間に基づいてフィルタリングします。
     * 以下の値を指定できます。
     * any – 検索結果を期間に基づいてフィルタリングしません。これはデフォルトの値です。
     * long – 20 分を超える動画のみを含めます。
     * medium – 4 分以上 20 分以下の動画のみを含めます。
     * short – 4 分未満の動画のみを含めます。
     * @param {string} videoEmbeddable
     * videoEmbeddable パラメータでは、Web ページに埋め込み可能な動画のみを検索するように制限できます。
     * 以下の値を指定できます。
     * any – 埋め込み可能かどうかにかかわらず、すべての動画を返します。
     * true – 埋め込み動画のみを取得します。
     * @param {string} videoLicense
     * videoLicense パラメータは、特定のライセンスがある動画のみが検索結果に含まれるようにフィルタリングします。
     * YouTube では、動画をアップロードしたユーザーが、動画ごとにクリエイティブ・コモンズ ライセンスまたは標準の YouTube ライセンスを設定できます。
     * 以下の値を指定できます。
     * any – ライセンスの種類にかかわらず、クエリ パラメータに一致するすべての動画を返します。
     * creativeCommon – クリエイティブ・コモンズ ライセンスを持つ動画のみを返します。このライセンスを持つ動画は、動画作成時に誰でも再利用できます。詳細
     * youtube – 標準の YouTube ライセンスを持つ動画のみを返します。
     * @param {string} videoSyndicated
     * videoSyndicated パラメータでは、検索対象を youtube.com 以外で再生できる動画のみに限定できます。
     * 以下の値を指定できます。
     * any – シンジケートされているかどうかにかかわらず、すべての動画を返します。
     * true – シンジケートされている動画のみを取得します。
     * @param {string} videoType
     * videoType パラメータでは、検索対象を特定のタイプの動画に制限できます。
     * 以下の値を指定できます。
     * any – すべての動画を返します。
     * episode – 番組のエピソードのみを取得します。
     * movie – 動画のみを取得します。
     * 
     * @returns {Promise}
     */
    public fetchSearchApi({
        part="snippet",
        channelId="",
        channelType="any",
        eventType="completed",
        maxResults=5,
        order="viewCount",
        pageToken="",
        publishedAfter="",
        publishedBefore="",
        q="",
        regionCode="",
        safeSearch="none",
        topicId="",
        type="video",
        videoCaption="any",
        videoCategoryId="0",
        videoDefinition="any",
        videoDimension="any",
        videoDuration="any",
        videoEmbeddable="any",
        videoLicense="any",
        videoSyndicated="any",
        videoType="any",
    }:youtubeSearchTypes):Promise<JSON> {
        return axios.get(this.BASE_URL+"/search", {
                params:{
                    key: this.API_KEY,
                    part: part,
                    channelId: channelId,
                    channelType: channelType,
                    eventType: eventType,
                    maxResults: maxResults,
                    order: order,
                    pageToken: pageToken,
                    // publishedAfter: publishedAfter,
                    // publishedBefore: publishedBefore,
                    q: q,
                    // regionCode: regionCode,
                    safeSearch: safeSearch,
                    topicId: topicId,
                    type: type,
                    videoCaption: videoCaption,
                    // videoCategoryId: videoCategoryId,
                    videoDefinition: videoDefinition,
                    videoDimension: videoDimension,
                    videoDuration: videoDuration,
                    videoEmbeddable: videoEmbeddable,
                    videoLicense: videoLicense,
                    videoSyndicated: videoSyndicated,
                    videoType: videoType,
                }
            })
    }

    /**
     * youtubeAPIのVideosリクエストを利用しJSONが格納されたPromeiseオブジェクトを返す
     * @param {string} part
     * part パラメータには、API レスポンスに含まれる 1 つまたは複数の video リソース プロパティをカンマ区切りリストの形式で指定します。
     * パラメータ値に指定できる part 名は、
     * id、 
     * snippet、 
     * contentDetails、 
     * fileDetails、 
     * iveStreamingDetails、 
     * player、 
     * processingDetails、 
     * recordingDetails、 
     * statistics、 
     * status、 
     * suggestions、 
     * topicDetails などです。
     * このパラメータに子プロパティを持つプロパティが指定されている場合、その子プロパティもレスポンスに含まれます。
     * たとえば、video リソースで、snippet プロパティに channelId、title、description、tags、categoryId などのプロパティが含まれているとします。
     * この場合、part=snippet と設定すると、API レスポンスにはこれらのプロパティすべてが含まれることになります。
     * @param {string} chart
     * chart パラメータには、取得するグラフを指定します。
     * 以下の値を指定できます。
     * mostPopular – 指定したコンテンツ地域および動画のカテゴリに関して最も人気のある動画を返します。
     * @param {string} id
     * id パラメータには、取得するリソースの YouTube 動画 ID をカンマ区切りリストの形式で指定します。video リソースの場合、id プロパティには動画の ID を指定します。
     * @param {number} maxResults
     * maxResults パラメータには、結果セットで返されるアイテムの最大数を指定します。
     * 注: このパラメータは myRating パラメータと組み合わせて使用できますが、id と一緒に使用することはできません。1 以上 50 以下の値を指定できます。デフォルト値は 5 です。
     * @param {string} regionCode
     * regionCode パラメータでは、指定された地域で使用できる動画グラフを選択するように API に指示します。
     * このパラメータを使用する場合は、グラフも設定する必要があります。このパラメータの値は ISO 3166-1 alpha-2 の国コードです。
     * @param {string} videoCategoryId
     * videoCategoryId パラメータには、グラフを取得する動画のカテゴリを指定します。
     * このパラメータは、必ず chart パラメータと組み合わせて使用しなければなりません。
     * デフォルトでは、グラフは特定のカテゴリに制限されていません。デフォルト値は 0 です。
     */
    public fetchVideoApi({
        part="snippet",
        chart="mostPopular",
        id="",
        maxResults=5,
        regionCode="",
        videoCategoryId="0",
    }:youtubeVideosTypes):Promise<JSON> {
        return axios.get(this.BASE_URL+"/videos", {
            params:{
                key: this.API_KEY,
                part: part,
                // chart: chart,
                id: id,
                maxResults: maxResults,
                // regionCode: regionCode,
                videoCategoryId: videoCategoryId
            }
        })
    }
}

export default YoutubeApiWrapper