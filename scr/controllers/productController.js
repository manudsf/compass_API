const connect = require('../config/connect')


class productController {

    // get 
    static getProduct(req, res) {
        connect.query('SELECT * FROM product', (err, rows) => {
            if (err) {
                res.status(500).json({
                    message: 'erro ao acessar produto'
                })
                console.log(err)
            } else {
                res.json(rows)
            }
        })
    }

    //acessar todos os produtos
   /* static getProductByPage(req, res) {
        const page = req.params.page
        const limit = 10
        const offset = (page - 1) * limit
        connect.query('SELECT * FROM product LIMIT ? OFFSET ?', [limit, offset], (err, rows) => {
            if (err) {
                res.status(500).json({
                    message: 'error ao acessar produtos'
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

// acessar um produto pelo id
static getProductById(req, res) {
    const id = req.params.id
    connect.query('SELECT * FROM product WHERE id = ?', id,
        (err, rows) => {
            if (err) {
                res.status(500).json({
                    message: 'erro ao acessar produto'
                })
                console.log(err)
            } else {
                res.json(rows)

            }
        })
}

// inserir novo produto
static insertProduct(req, res) {
    connect.query(`INSERT INTO product (id, nome, preço, peso, category_id) values (
            ${req.body.id},
            ${req.body.nome},
            ${req.body.preço},
            ${req.body.peso},
            ${req.body.category_id},

            )`, (err, rows) => {
        if (err) {
            console.log(err)
            res.status(500).json({
                message: 'erro ao inserir produto'
            })
            return}
            res.json({
                message: 'produto inserido com sucesso'
            })
        })
    }

    // atualizar produto pelo id
    static updateProduct(req, res) {
        const id = req.params.id
        connect.query(`UPDATE product SET ? WHERE id = ?`, [req.body, id], (err, rows) => {
            if (err) {
                console.log(err)
                res.status(500).json({
                    message: 'erro ao atualizar produto'
                })
                return
            }
            res.json({
                message: 'produto atualizado com sucesso',
                update: req.body
            })
        })
    }

    // deletar um produto pelo id
    static deleteProduct(req, res) {
        const id = req.params.id
        connect.query('DELETE FROM product WHERE id = ?', id, (err, rows) => {
            if (err) {
                console.log(err)
                res.status(500).json({
                    message: 'erro ao deletar produto'
                })
                return}
                res.json({
                    message: 'produto deletado com sucesso'
                })
            })
        }
    
    
     //procura com paginação
      static searchProductWithPagination(req, res) {
        const query = req.query.search
         const value = req.query.value
         const page = Number(req.query.page)  
         const limit = 5
         const offset = (page - 1) * limit
         connect.query(`SELECT * FROM product WHERE ${query} LIKE ${value} LIMIT ? OFFSET ?`, [limit, offset], (err, rows) => {
             if (err) {
                console.log(err)
                 res.status(500).json({
                 message: 'erro ao procurar produto'
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
        /* static searchProduct(req, res) {
            const query = req.query.search
            const value = req.query.value
            connect.query(`SELECT * FROM product WHERE ${query} LIKE ${value}`, (err, rows) => {
                if (err) {
                    console.log(err)
                    res.status(500).json({
                        message: 'erro ao procurar produto'
                    })
                    return
                }
                res.json(rows)
            })
        } */
    
        module.exports = productController