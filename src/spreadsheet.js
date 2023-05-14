const {GoogleSpreadsheet} = require('google-spreadsheet');

const credenciales = require('./json/credenciales.json');

let googleId = "1-T9p6myvK1P5MJpvFAJgUYIaBmVPm0FaMFmSTNbWeXw";

async function accederGoogleSheet(){
    const documento = new GoogleSpreadsheet(googleId);
    await documento.useServiceAccountAuth(credenciales);
    await documento.loadInfo();
    const sheet = documento.sheetsByIndex[0];
    const registros = await sheet.getRows();
    console.log(registros); 
}

accederGoogleSheet();

module.exports = {
    accederGoogleSheet: accederGoogleSheet,
}