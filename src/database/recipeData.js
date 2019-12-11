import sql from 'mssql';
import dbConfig from './dbConfig';

export const getRecipe = (itemId) => {
    return new Promise((resolve, reject) => {
        sql.connect(dbConfig, (err) => {
            if (err) {
                reject(err);
            }
            else {
                const req = new sql.Request();
                req.query(`SELECT * FROM Recipes WHERE output_item_id=${itemId}`)
                .then((set) => {
                    const recipes = [];
                    set.recordset.forEach((recipe) => {
                        recipes.push(recipe);
                    });
                    if (recipes.length === 1) {
                        return {
                            status: 1,
                            recipe: recipes[0]
                        }
                    }
                    else {
                        return {
                            status: 0,
                            recipe: {}
                        }
                    }
                })
            }
        })
    })
}