const axios = require('axios');
const { token } = require('morgan');


const fetcher = {};

const userHeader = (token) => {
    return{
        "Content-Type": "application/json",
        "Accept": "application/vnd.github.cloak-preview",
        "Authorization": `bearer ${token}`
    }
}

const contributorsHeader = (token) => {
    return{
        "Content-Type": "application/json",
        "Authorization": `bearer ${token}`
    }

}

fetcher.getContributorsList = (owner, repo, token, per_page, page) => {
    return axios({
      method: "get",
      url: `https://api.github.com/repos/${owner}/${repo}/contributors?per_page=${per_page}&page=${page}`,
      headers: contributorsHeader(token)
    });
}

fetcher.getUserInfo = (login, token) => {
    return axios({
      method: "get",
      url: `https://api.github.com/users/${login}`,
      headers: userHeader(token)
    });
}

fetcher.getUserReposInfo = (login, token, per_page, page) => {
    return axios({
      method: "get",
      url: `https://api.github.com/users/${login}/repos?per_page=${per_page}&page=${page}`,
      headers: userHeader(token)
    });
}

module.exports = fetcher;