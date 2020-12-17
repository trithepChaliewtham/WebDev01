const axios = require('axios');

axios.get('https://api.exchangeratesapi.io/latest').then( 
    function (res)
    {
        // console.log(res);
        // console.log(res["data"]);
        // console.log(res['data']['rates']);
        console.log(`${res.data.date}`);

    }
);
