import sql from 'mssql';
import dbConfig from './dbConfig';

export const getCoverItems = () => {
    return new Promise((resolve, reject) => {
        sql.connect(dbConfig, (err) => {
            if (err) {
                reject(err);
            }
            else {
                const req = new sql.Request();
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
    
    minLevel = minLevel >= 0 ? minLevel : 0;
    maxLevel = maxLevel >= 0 ? maxLevel : 0;

    minLevel = minLevel <= 80 ? minLevel : 80;
    maxLevel = maxLevel <= 80 ? maxLevel : 80;

    minLevel = minLevel <= maxLevel ? minLevel : maxLevel;
    data.types && data.types.length && queries.push(`type in ('${data.types.join('\', \'')}')`);
    data.rarities && data.rarities.length && queries.push(`rarity in ('${data.rarities.join('\', \'')}')`);
    
    queries.push(`rating >= ${minLevel}`);
    queries.push(`rating <= ${maxLevel}`);

    data.search && queries.push(`name like '%${data.search}%'`);

    const allQueries = `WHERE ${queries.join(' AND ')}`;
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
                    reject(error);
                })
            }
        })
    })
}

