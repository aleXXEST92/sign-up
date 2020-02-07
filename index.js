const express = require('express')
const usersRouter = require('./routers/newUsers');

const app = express();
const port = process.env.PORT || 4001;
app.use('newUsers', usersRouter)

app.get('/', (req, res) => {
    res.send('Welcome to our server!')
  })

app.listen(port, () => {
    console.log(`Web server is listening on port ${port}!`);
   });