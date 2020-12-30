// File index akan meload routing yang ada
// pada folder Routes

const app = require('./Routes/route.js');
port = 8080;
// server mendengar di port 8080
app.listen(port,()=>{
    console.log(`server running on port ${port} : http://127.0.0.1:${port}`);
});
