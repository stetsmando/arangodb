const { database, databaseName, faker } = require('./helper')

const fakePeople = []
for (let i = 0; i < 100; i++) {
  fakePeople.push({
    _key: `${i}`,
    name: faker.name.firstName(),
    age: faker.random.number({ min: 18, max: 75 })
  })
}

;(async function () {
  try {
    database.useDatabase(databaseName)
    await database.collection('people').create()

    const addPeopleQuery = {
      query: `
        FOR person IN @fakePeople
          INSERT person INTO @@collection
      `,
      bindVars: { fakePeople, '@collection': 'people' }
    }

    await database.query(addPeopleQuery)
  } catch (error) {
    console.log(`🚨 ${error}`)
  }
})()
