const express = require('express');

const app = express();
app.use(express.static(__dirname + '/views'));
app.listen(3000,()=>{
  console.log("running....");
})
