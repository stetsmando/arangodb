# Let's have a look at ArangoDB

## Hey There 👋

This repo contains all the slides and code related to my talk **Let's Have a Look At ArangoDB**.

## Slides

The slides for this talk are powered by [Reveal.js](https://www.npmjs.com/package/reveal) and [reveal-md](https://www.npmjs.com/package/reveal-md).

To run the slides locally use `yarn slides`.

## Understanding The Files

```bash
|slides/
|--assets/ # Contains all media assets for the slides
|--slides.css # Custom styling for slides
|--slides.md # Actual slide contents
|src/
|--"microservices"/
|----hacker-phrase-search/
|------index.js # The actual service code
|------manifest.json # Information about the service
|------README.md
|------service.zip # The zipped contents of this directory
|--scripts/
|----helper.js # Reused code
|----init-database.js # Creates the database
|----init-people.js # Creates a new document collection
|----init-view.js # Creates a new ArangoSearch view
|--queries.json # Contains queries that can be imported
|--run_arango.sh # Runs the ArangoDB Docker container
```

## Versions

Any available recordings of this talk will be linked below:
