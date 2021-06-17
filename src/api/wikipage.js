import axios from 'axios';
import { base } from './config';

export default {
    async showWikiList() {
        return await axios({
            method: 'GET',
            url: `${base}/showWikiList`,
            data: {},
            headers: {}
        }).then((res) => {
            return res.data;
        })
    }
}