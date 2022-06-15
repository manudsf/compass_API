const connect = require('../config/connect')

class CategoryController {

    // get 
    static getCategory(req, res) {
        connect.query('SELECT * FROM category', (err, rows) => {
            if (err) {
                res.status(500).json({
                    message: 'erro ao acessar categoria'
                })
                console.log(err)
            } else {
                res.json(rows)
            }
        })
    }

    /*get all category by page
    static getCategoryByPage(req, res) {
        const page = req.params.page
        const limit = 10
        const offset = (page - 1) * limit
        connect.query('SELECT * FROM category LIMIT ? OFFSET ?', [limit, offset], (err, rows) => {
            if (err) {
                res.status(500).json({
                    message: 'error ao acessar categoria'
                })
                console.log(err)
            } else {res.json({
                proxPage: (Number(page) + 1),
                antesPage: (page - 1) > 0 ? (Number(page) - 1) : 1,
                atualPage: rows
            })
        }
    })
}*/

// get a category by id
static getCategoryByID (req, res) {
    const id = req.params.id
    connect.query('SELECT * FROM category WHERE id = ?', id,
        (err, rows) => {
            if (err) {
                res.status(500).json({
                    message: 'erro ao acessar categoria'
                })
                console.log(err)
            } else {
                res.json(rows)

            }
        })
}

// insert new category
static insertCategory(req, res) {
    connect.query(`INSERT INTO category (id, nome) values (
            ${req.body.id},
            ${req.body.nome}
            )`, (err, rows) => {
        if (err) {
            console.log(err)
            res.status(500).json({
                message: 'erro ao inserir categoria'
            })
            return}
            res.json({
                message: 'categoria inserida com sucesso'
            })
        })
    }

    // update a category by id
    static updateCategory(req, res) {
        const id = req.params.id
        connect.query(`UPDATE category SET ? WHERE id = ?`, [req.body, id], (err, rows) => {
            if (err) {
                console.log(err)
                res.status(500).json({
                    message: 'erro ao atualizar categoria'
                })
                return
            }
            res.json({
                message: 'categoria atualizada com sucesso',
                update: req.body
            })
        })
    }

    // delete a category by id
    static deleteCategory(req, res) {
        const id = req.params.id
        connect.query('DELETE FROM category WHERE id = ?', id, (err, rows) => {
            if (err) {
                console.log(err)
                res.status(500).json({
                    message: 'Error deleting category'
                })
                return}
                res.json({
                    message: 'category deleted successfully'
                })
            })
        }

    
        //procura com paginação
        static searchCategoryWithPagination(req, res) {
            const query = req.query.search
            const value = req.query.value
            const page = Number(req.query.page)
            const limit = 5
            const offset = (page - 1) * limit
            connect.query(`SELECT * FROM category WHERE ${query} LIKE ${value} LIMIT ? OFFSET ?`, [limit, offset], (err, rows) => {
                if (err) {
                    console.log(err)
                    res.status(500).json({
                        message: 'erro ao procurar categoria'
                    })
                    return
                }
                res.json({
                    proxPage: (Number(page) + 1),
                    antesPage: (page - 1) > 0 ? (Number(page) - 1) : 1,
                    atualPage: rows        })
                })
            }
        
        }
        

            //procura usando query
        /* static searchCategory(req, res) {
            const query = req.query.search
            const value = req.query.value
            connect.query(`SELECT * FROM category WHERE ${query} LIKE ${value}`, (err, rows) => {
                if (err) {
                    console.log(err)
                    res.status(500).json({
                        message: 'erro ao procurar categoria'
                    })
                    return
                }
                res.json(rows)
            })
        } */
        
        module.exports = CategoryController