const xml_js = require('xml-js')
const axios = require('axios')
const nodemailer = require('nodemailer')

var data

const run = () => {
    axios.get('https://cm.ihu.gr/index.php?action=feed&feed=rss2')
    .then(res => {
        data = xml_js.xml2json(res.data,{compact: true, spaces: 4})
    })
    .catch(err => console.log(err))
    .finally(() => {
        console.log(data)
    })
}
run()