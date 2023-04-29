import { Router } from 'express';
import { HealthCheck } from './healthcheck';

export class BaseRoutes {

    public router : Router;
    private healthcheckroutes : HealthCheck;

    constructor(){
        this.router = Router();
        this.healthcheckroutes = new HealthCheck();
        this.routes();
    }

    routes(){
        this.router.use('/health-check',this.healthcheckroutes.router);
    }

}