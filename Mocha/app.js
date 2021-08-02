
const express = require('express');

const port = 8088;
const app = express();
app.get('/',(req,resp)=>{
	resp.send('hello')
})

app.listen( port,() => {
console.log(`App is listening at http://localhost:${port}`)
}
)