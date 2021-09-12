import axios from "axios"

export default class PostService {
    
    static async getAll(limit = 10, page = 1) {
        const getPostsLink = "https://jsonplaceholder.typicode.com/posts";

        const response = await axios.get(getPostsLink, {
            params: {
                _limit: limit,
                _page: page
            }
        })
        return response;

    }

    static async getById(id) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        return response;
    }

    static async getCommentsByPostId(id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        return response;
    }
}