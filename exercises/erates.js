export async function getLatestExchangeRates(appID) {

 const response = await fetch (`https://openexchangerates.org/api/latest.json?app_id=${appId}`) 

 const data = await response.json()

 return data.rates;

 

}