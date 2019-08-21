'use strict'
const { db, aql } = require('@arangodb')
const createRouter = require('@arangodb/foxx/router')
const router = createRouter()
const joi = require('joi')

module.context.use(router)

router
  .post('/search', (req, res) => {
    const { phrase } = req.body
    const query = aql`
      FOR suspect IN watchlist
        SEARCH PHRASE(suspect.mantra, ${phrase}, 'text_en')
        RETURN suspect
    `

    const result = db._query(query)
    res.send(result)
  })
  .body(
    joi
      .object({
        phrase: joi.string().required()
      })
      .required()
  )
  .description('Search the watchlist for a provided phrase ')
