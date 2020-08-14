const fetcher = require('../fetcher')

require("dotenv").config();

const GITHUB_TOKEN = process.env.GITHUB_TOKEN

const handler = {};


handler.requestHandler = async (req, res) =>{
    let result = [];
    let contributors = [];
    let tmp = {};
    let per_page = req.query.per_page;
    let page = req.query.page;
    try {
        const list_res = await fetcher.getContributorsList('pingcap', 'tidb', GITHUB_TOKEN, per_page, page);
        contributors = list_res.data
            contributors.forEach((contributor) => {
                //let stars = this.countStar(contributor.login)
              tmp = {
                login: contributor.login,
                avatar_url: contributor.avatar_url,
                html_url: contributor.html_url,
                contributions: contributor.contributions,
                //stars:  stars
              };
              result.push(tmp);
            });
        res.send(result)
    } catch (err) {
        console.log(err)
    }
}

module.exports = handler;