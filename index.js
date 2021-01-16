const nunjucks = require('nunjucks')
const express = require('express')
const app = express()
const port = 5500

// will configure nunjucks with a relative folder called views
nunjucks.configure('views', {
    autoescape: true,
    express: app
});

// for / route, it will find index.html in views folder 
// and provide data in the second argument to the template

app.get('/', function(req, res) {
    res.render('index.html', { username: "ALBERT", 
    todo: [ {id:1, title: "hello world", status:false},
            {id:2, title: "learn express", status:false},
            {id:1, title: "learn node", status:true}, 
            ] 
    });
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})