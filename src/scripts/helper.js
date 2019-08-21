const { Database } = require('arangojs')
const faker = require('faker/locale/en_US')
const databaseName = 'demo'
const database = new Database('http://localhost:8529').useBasicAuth(
  'root',
  'openSesame'
)

module.exports = {
  database,
  databaseName,
  faker
}
