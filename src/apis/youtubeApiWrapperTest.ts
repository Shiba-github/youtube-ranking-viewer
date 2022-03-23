import YoutubeApiWrapper from "./youtubeApiWrapper"

// test(仮)
// TODO：そのうちちゃんとやる
const youtubeApiWrapper = new YoutubeApiWrapper();
youtubeApiWrapper.fetchVideoApi({part:"statistics", id:"Tc-e1yhQYnM"}).then(function res (response:JSON){
    const stringify = JSON.stringify(response);
    const parse = JSON.parse(stringify)
    console.log(parse);
}).catch(function err(error:JSON) {
    console.log(error);
})

youtubeApiWrapper.fetchSearchApi({q:"Music"}).then(function res(response:JSON){
    const stringify = JSON.stringify(response);
    const parse = JSON.parse(stringify)
    console.log(parse);
})
.catch(function err(error:JSON) {
    console.log(error);
})