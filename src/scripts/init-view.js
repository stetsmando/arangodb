const { database, databaseName, faker } = require('./helper')

;(async function () {
  try {
    database.useDatabase(databaseName)

    // Create new hackers collection
    const hackersCollection = database.collection('hackers')
    await hackersCollection.create()

    for (let i = 0; i < 4994; i++) {
      await hackersCollection.save({
        _key: `${i}`,
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        alias: faker.hacker.adjective(),
        mantra: faker.hacker.phrase()
      })
    }

    const realHackers = [
      {
        firstName: 'Emmanuel',
        lastName: 'Goldstein',
        alias: 'Cereal Killer',
        mantra:
          'When I was a child, I spake as a child, I understood as a child, I thought as a child: but when I became a man, I put away childish things!'
      },
      {
        firstName: 'Kate',
        lastName: 'Libby',
        alias: 'Acid Burn',
        mantra: `Never send a boy to do a woman's job.`
      },
      {
        firstName: 'Ramon',
        lastName: 'Sanchez',
        alias: 'Phantom Phreak',
        mantra: `If you want to be elite, you've got to do a righteous hack! `
      },
      {
        firstName: 'Paul',
        lastName: 'Cook',
        alias: 'Lord Nikon',
        mantra: `You're in the butter zone now, baby.`
      },
      {
        firstName: 'Eugene',
        lastName: 'Belford',
        alias: 'The Plague',
        mantra: `There is no right and wrong. There's only fun and boring.`
      },
      {
        firstName: 'Dade',
        lastName: 'Murphy',
        alias: 'Zero Cool',
        mantra: `Mess with the best, die like the rest.`
      }
    ]

    await database.query({
      query: `
        FOR h in @realHackers
          INSERT h INTO @@collection
      `,
      bindVars: { realHackers, '@collection': 'hackers' }
    })

    // Create a new view
    const view = database.arangoSearchView('watchlist')
    await view.create()
    const link = {
      includeAllFields: true,
      fields: { mantra: { analyzers: ['text_en'] } }
    }
    await view.setProperties({
      links: { hackers: link }
    })
  } catch (error) {
    console.log(`🚨 ${error}`)
  }
})()
