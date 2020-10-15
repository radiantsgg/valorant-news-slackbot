# Valorant News Slackbot :robot:

A Slack bot named **ReconBolt** that sends you spicy Valorant news from https://playvalorant.com/en-us/news/.

[![Add to Slack](https://platform.slack-edge.com/img/add_to_slack.png)](https://slack.com/oauth/v2/authorize?client_id=1228929719924.1258741992420&scope=incoming-webhook&user_scope=)


#### Screenshots

![](https://github.com/radiantsgg/valorant-news-slackbot/blob/master/assets/sample-post.png?raw=true)

---

## Development

### Prerequisites

Create a new slack app https://api.slack.com/apps?new_app=1

Retrieve apps client ID and client Secret and fill in `.env`

```
SLACK_CLIENT_ID=''
SLACK_CLIENT_SECRET=''
```

Add the redirection URL `http://localhost:3000/install` to your app

### Installation

Postgres database required. https://www.postgresql.org/download/

Update `knexfile.js` with your database information:

```
module.exports = {
  development: {
    client: 'pg',
    connection: {
      port: 5432,
      host: 'localhost',
      database: 'slackbots',
      user: 'root',
      password: '',
    }
  }
}
```

Install dependencies

```
npm install
```

Migrate database to create required tables

```
npm run migrate
```

Start development server

```
npm run dev
```

### Endpoints

`localhost:3000/install`

The install endpoint handles OAuth tokens and saves Slack server channel's required information to push messages.

`localhost:3000/update`

The endpoint is used to trigger a search for new articles. When new articles are found they are pushed to servers. By default the included cron job runs every five minutes.


## Deployment

Deploy to your favorite service that runs docker containers. Update `knexfile.js` and `.env` with your production database connection information.

To start production mode

```
npm run start
```

## Built With

* [Knex](http://knexjs.org/) - A SQL Query Builder for Javascript
* [Axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js

## Authors

* **James Vansteenkiste** - *Initial work* - [jvanst](https://github.com/jvanst)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
