const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'global-market-data.p.rapidapi.com',
        'X-RapidAPI-Key': '4413f618e1mshd0f0456944bd00cp1f9e71jsn6c817e07fc6c'
    }
};

// export async function fetchHistoricalData(optionData){
//     const fetchData = !optionData ? "remix-run" : search;
//         let res = await fetch(`https://global-market-data.p.rapidapi.com/crypto/historical_data?to_date=${data.endData}&crypto=Bitcoin&from_date=${data.startDate}&interval=${data.frequency}`)
//      return res;
//  }