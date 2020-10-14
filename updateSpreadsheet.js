async function updateSpreadsheet(rowInput, numRows, gsapi) {
    const updateOptions = {
        spreadsheetId: "1oxPgyBgQGdktdBFJwhytm5bSgDf96Prh1j0AhoNhufY",
        range: `testContacted!A${numRows+1}:A`, //string template to start new data after last filled row
        valueInputOption: 'USER_ENTERED',
        resource: {values: rowInput}
    }
    let res = await gsapi.spreadsheets.values.update(updateOptions);
   
}

module.exports = updateSpreadsheet