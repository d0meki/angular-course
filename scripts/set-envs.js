

const { writeFileSync, mkdirSync } = require('fs');

require('dotenv').config();

const targetPathProd = './src/environments/environment.ts';
const targetPathDev = './src/environments/environment.development.ts';

const mapboxKey = process.env['MAPBOX_KEY'];
const giphyApiKey = process.env['GIPHY_API_KEY'];
const apiCountriesUrl = process.env['COUNTRY_API_URL'];
const giphyUrl = process.env['GIPHY_API_URL'];

if (!mapboxKey || !giphyApiKey || !apiCountriesUrl || !giphyUrl) {
    throw new Error('MAPS_API_KEY or GIPHY_API_KEY or COUNTRY_API_URL or GIPHY_API_URL is not defined');
}


const envFileContent = `export const environment = {
    // ApiKeys
    mapboxApiKey: "${mapboxKey}",
    giphyApiKey: "${giphyApiKey}",
    // Apis Urls
    apiCoutriesUrl: "${apiCountriesUrl}",
    giphyUrl: "${giphyUrl}",
};`;

mkdirSync('./src/environments', { recursive: true });
writeFileSync(targetPathDev, envFileContent);

writeFileSync(targetPathProd, envFileContent);