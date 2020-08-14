// serverless api in vercel
const handler = require('../handler')

module.exports = (req, res) => {
    handler.requestHandler(req, res)
}
