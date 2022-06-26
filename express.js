const express = require('express');

const app = express();

const port = 3000;

app.use(express.static(__dirname));
app.use(express.static(__dirname+'/components'));
app.use(express.static(__dirname+'/public'));


// app.get('/', (req, res)=> {
//
// });


app.listen(port, ()=>{
  console.log(`listening on port ${port}`);
})
