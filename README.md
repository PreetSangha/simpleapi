First app using express.js

you need to set the `SERVER_PORT` environment variable with the port that this server will run on, either directly, using something like doppler or an .env file. If you're using doppler and also want an direct override use

```
doppler run --preserve-env ...
```
and the approppriate start command.

it can be started in dev with `npm start` and should output 

```
[nodemon] restarting due to changes...
[nodemon] starting `node src/index.js`
express server listening on port 3000
```


or in prod with `node .\src\index.js` and should output

```
express server listening on port 3000
```

