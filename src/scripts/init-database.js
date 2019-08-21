const { database, databaseName } = require('./helper')

;(async function () {
  try {
    console.log(await database.createDatabase(databaseName))
  } catch (error) {
    console.log(`🚨 ${error}`)
  }
})()
