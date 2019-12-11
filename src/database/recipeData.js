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
                    const recipeSet = [];
                    set.recordset.forEach((recipe) => {
                        recipeSet.push(recipe);
                    });
                    if (recipeSet.length === 1) {
                        let ingredients = [];
                        let itemIds = [itemId];
                        const parsedIngredients = JSON.parse(recipeSet[0].ingredients);
                        parsedIngredients.forEach((ingredient) => {
                            const item_id = ingredient.item_id;
                            ingredients.push({
                                item_id: item_id,
                                count: ingredient.count
                            });
                            addItemId(item_id, itemIds);
                        })
                        let root = recipeSet[0].output_item_id;
                        const nodes = {};
                        const items = {};
                        nodes[`node-${root}`] = {
                                                    id: root,
                                                    ingredients
                                                };
                        buildNodes(nodes, itemIds).then(() => {
                            return buildItems(items, itemIds);
                            
                        })
                        .then(() => {
                            let recipe = {
                                root,
                                nodes,
                                items
                            }
                            resolve({
                                status: 1,
                                recipe
                            });
                        })
                    }
                    else {
                         resolve({
                            status: 0,
                            recipe: {}
                        });
                    }
                })
            }
        })
    })
}

const addItemId = (itemId, arr) => {
    if (!arr.some(id => id === itemId)) {
        arr.push(itemId);
    }
}

const buildNodes = (nodes, itemIds) => {
    return new Promise((resolve, reject) => {
        nextNode(nodes, itemIds, 0, resolve, reject);
    })
}

const nextNode = (nodes, itemIds, current, resolve, reject) => {
    if (current < itemIds.length) {
        sql.connect(dbConfig, (err) => {
            if (err) {
                reject(err);
            }
            else {
                const req = new sql.Request();
                req.query(`SELECT * FROM Recipes WHERE output_item_id=${itemIds[current]}`)
                .then((set) => {
                    if (set.recordset.length) {
                        const parsedIngredients = JSON.parse(set.recordset[0].ingredients);
                        let ingredients = [];
                        parsedIngredients.forEach((ingredient) => {
                            const item_id = ingredient.item_id;
                            addItemId(item_id, itemIds);
                            ingredients.push({
                                item_id,
                                count: ingredient.count
                            });
                        });
                        const nodeKey = `node-${itemIds[current]}`;
                        nodes[nodeKey] = nodes[nodeKey] || {
                            id: itemIds[current],
                            ingredients
                        }
                    }
                    nextNode(nodes, itemIds, current + 1, resolve, reject);
                })
                .catch((error) => {
                    reject(error)
                })
            }
        })

    }
    else {
        resolve();
    }
}

const buildItems = (items, itemIds) => {
    return new Promise((resolve, reject) => {
        nextItem(items, itemIds, resolve, reject);
    })
}

const nextItem = (items, itemIds, resolve, reject) => {
    if (itemIds.length) {
        const currentId = itemIds.pop();
        sql.connect(dbConfig, (err) => {
            if (err) {
                reject(err);
            }
            else {
                const req = new sql.Request();
                req.query(`SELECT * FROM Items WHERE id=${currentId}`).then((set) => {
                    if (set.recordset.length) {
                        const itemKey = `item-${currentId}`;
                        items[itemKey] = items[itemKey] || set.recordset[0];
                    }
                    nextItem(items, itemIds, resolve, reject);
                })
                .catch((error) => {
                    reject(error);
                })
            }
        })
    }
    else {
        resolve();
    }
}