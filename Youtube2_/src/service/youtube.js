import axios from 'axios';

class Youtube{
    constructor(key){
        this.youtube = axios.create({
            baseURL: 'https://youtube.googleapis.com/youtube/v3',
            params: {key: key}
        });
        // this.youtube = httpClient;
    }

    async mostPopular(){  
        // const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
        //     this.getRequestOptions);
        // const result_1 = await response.json();
        // return result_1.items;
        const response = await this.youtube.get('videos', {
            params:{
                part: 'snippet',
                chart: 'mostPopular',
                maxResults: 25
            }
        });
        return response.data.items;
    }

    async search(query){
        // const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=25&q=${query}&key=${this.key}`,
        //     this.getRequestOptions);
        // const result_1 = await response.json();
        // return result_1.items.map(item => ({ ...item, id: item.id.videoId }));
        const response = await this.youtube.get('search', {
            params:{
                part: 'snippet',
                type: 'video',
                maxResults: 25,
                q: query
            }
        });
        return response.data.items.map(item => ({...item, id: item.id.videoId}));
    }
}

export default Youtube;