var fetcher = require('../fetcher')
var expect = require('chai').expect

require("dotenv").config();

const GITHUB_TOKEN = process.env.GITHUB_TOKEN

describe('Fetcher', () => {
    it('Fetch contributors data', () => {
        // test Promise in chai.expect
        return fetcher.getContributorsList('pingcap', 'tidb', GITHUB_TOKEN, 20, 1)
            .then((res) => {
                expect(res.status).to.equal(200);
                expect(res.data).to.be.an('array')
            })
    }).timeout(5000)
})