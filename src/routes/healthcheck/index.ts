import { Router } from 'express';
import { HealthCheckController } from '../../controllers/healthcheck';

export class HealthCheck {

    public router : Router;
    private controller : HealthCheckController;

    constructor(){
        this.router = Router();
        this.controller = new HealthCheckController();
        this.routes();
    }

    routes(){
        this.router.get('/',this.controller.healthcheck);
    }

}