import axios from 'axios';
import { base } from './config';

export default {
    async insertBlog(bloginfo) {
        return await axios({
            method: 'post',
            url: `${base}/insertBlog`,
            data: {
                "title": bloginfo.title,
                "pageInfo": bloginfo.pageInfo,
                "username": bloginfo.username,
                "description": bloginfo.description,
            },
            headers: {}
        }).then((res) => {
            return res;
        })
    }
}