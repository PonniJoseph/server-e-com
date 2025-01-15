const jsonServer = require("json-server")
const ECServer = jsonServer.create()

const middleware=jsonServer.defaults()
const PORT = 3000

const route =jsonServer.router('db.json')

ECServer.use(middleware)
ECServer.use(route)

ECServer.listen(PORT,()=>{
    console.log(`ECServer started running at port:${PORT} and its waiting for client request`);
    
})