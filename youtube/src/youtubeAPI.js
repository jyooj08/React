class YoutubeAPI{
    constructor(key){
        this.key = key;
        this.requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
    }

    async mostPopular(){
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`, this.requestOptions);
        return await response.json();
    }

    async search(query){
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${this.key}`, this.requestOptions);
        return await response.json();
    }

    async video(videoId){
        const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${this.key}`, this.requestOptions);
        return await response.json();
    }
}

export default YoutubeAPI;