import express from 'express';
import  {  BaseRoutes } from './routes';
import { data_source } from './db';

class Server {
    
    private app : express.Application;
    private port : number;
    private baseRoutes : BaseRoutes;
    
    constructor(){
        this.app = express();
        this.port = 3000;
        this.setMiddlewares();
        this.baseRoutes = new BaseRoutes();
        this.routes();
    }

    setMiddlewares(){
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended : true}));
    }

    start(){
        this.app.listen(this.port,()=>{
            console.log(`Server started on : http://localhost:${this.port}`);
        })
    }

    routes(){
        this.app.use('/api',this.baseRoutes.router);
    }


}

const server = new Server();
server.start();

// Initialize DB
data_source.initialize()
.then(()=>{
    console.log('connection to db successfully');
})
.catch(err=>{
    console.log('connection to db failed');
})