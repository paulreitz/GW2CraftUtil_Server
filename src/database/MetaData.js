import sql from 'mssql';
import dbConfig from './dbConfig';

export const getTypes = () => {
    return new Promise((resolve, reject) => {
        // const connection = sql.Connection(dbConfig);
        sql.connect(dbConfig, (err) => {
            if (err) {
                console.log('error connecting to database...', err);
                reject(err);
            }
            else {
                const req = new sql.Request();
                req.query('SELECT DISTINCT type FROM Items')
                .then((set) => {
                    const types = [];
                    set.recordset.forEach((type) => {
                        types.push(type.type);
                    });
                    resolve(types);
                })
                .catch((error) => {
                    console.log('getTypes', error);
                    console.log('user', process.env.CRAFT_UTIL_DB_USER)
                    reject(error);
                })
            }
        })
    });
}

export const getRarities = () => {
    return new Promise((resolve, reject) => {
        sql.connect(dbConfig, (err) => {
            if (err) {
                console.log('error connecting to database', err)
                reject(err);
            }
            else {
                const req = new sql.Request();
                req.query('SELECT DISTINCT rarity FROM Items')
                .then((set) => {
                    const rarities = [];
                    set.recordset.forEach((rarity) => {
                        rarities.push(rarity.rarity);
                    })
                    resolve(rarities);
                })
                .catch((error) => {
                    console.log('getRarities', error);
                    reject(error);
                })
            }
        })
    })
}