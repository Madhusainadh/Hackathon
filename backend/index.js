const express = require('express')
const connect = require('./Config/Config')

const RoadDamage = require("./Router/RoadDamage.router")
const cors = require("cors");
const app = express()
app.use(express.json());

app.use(cors());
app.get('/', (req, res) => res.send('hello'))
app.use("/roaddamage",RoadDamage)


app.listen(8080, () => {
  connect().then(()=>
  console.log('server started on port 8080')
  ).catch((err)=>console.log(err.message))
})