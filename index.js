const fetch = require("node-fetch")
const TOKEN = `5358446083:AAF0FxxdxJivuBQ5qOdzSwkJwr8vZxgiE-8`
  ; (async () => {
    let response = await fetch(`https://api.telegram.org/bot${TOKEN}/getUpdates`)
    response = await response.json()

    console.log(response.result[0]);
  })()