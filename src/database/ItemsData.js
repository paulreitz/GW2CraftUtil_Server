import sql from 'mssql';
import dbConfig from './dbConfig';

export const getCoverItems = () => {
    return new Promise((resolve, reject) => {
        // const connection = sql.ConnectionError(dbConfig);
        sql.connect(dbConfig, (err) => {
            if (err) {
                reject(err);
            }
            else {
                const req = new sql.Request();
                // req.query(`SELECT TOP 30 * FROM Items WHERE vendor_value > 10000`)
                req.query(`SELECT TOP 60 * FROM Items`)
                .then((set) => {
                    const results = [];
                    set.recordset.forEach((result) => {
                        results.push(result);
                    });
                    resolve(results);
                })
                .catch((error) => {
                    console.log('getCoverItems', error);
                    console.log('crafting mat');
                    reject(error);
                })
            }
        });
    });
}

export const getSearchResults = (data) => {
    const queries = [];
    let minLevel = data.minLevel ? data.minLevel : 0;
    let maxLevel = data.maxLevel ? data.maxLevel : 80;
    
    // adjust min level to legal values
    minLevel = minLevel >= 0 ? minLevel : 0;
    minLevel = minLevel <= 80 ? minLevel : 80;
    minLevel = minLevel <= maxLevel ? minLevel : maxLevel;

    // adjust max level to legal values
    maxLevel = maxLevel <= 80 ? maxLevel : 80;
    maxLevel = maxLevel >= 0 ? maxLevel : 0;
    maxLevel = maxLevel >= minLevel ? maxLevel : minLevel;
    data.types && data.types.length && queries.push(`type in ('${data.types.join('\', \'')}')`);
    data.rarities && data.rarities.length && queries.push(`rarity in ('${data.rarities.join('\',\'')}')`);
    // data.minLevel && queries.push(`rating >= ${data.minLevel}`);
    queries.push(`rating >= ${minLevel}`);
    queries.push(`rating <= ${maxLevel}`);
    const allQueries = queries.length ? `WHERE ${queries.join(' AND ')}` : '';
    const queryString = `SELECT TOP 100 * FROM Items ${allQueries}`;
    console.log(queryString);
    return new Promise((resolve, reject) => {
        sql.connect(dbConfig, (err) => {
            if (err) {
                reject(err);
            }
            else {
                const req = new sql.Request();
                req.query(queryString)
                .then((set) => {
                    const results = [];
                    set.recordset.forEach((result) => {
                        results.push(result);
                    })
                    resolve(results);
                })
                .catch((error) => {
                    console.log('getSearchResults', error);
                    reject(error);
                })
            }
        })
    })
}

