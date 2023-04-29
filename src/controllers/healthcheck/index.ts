import { Request, Response } from "express";

export class HealthCheckController {

    public healthcheck = async ( req: Request, res : Response) => {

        try{

            return res.status(200).json({
                status : 'success',
                message : 'server running'
            });

        }catch(err){
            return res.status(500).json({
                status : 'error',
                message : 'server error'
            });
        }

    }

}