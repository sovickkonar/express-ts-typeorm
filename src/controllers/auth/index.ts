import { AppSource } from '../../db';
import { UserEntity } from '../../db/user.entity';
import { Request, Response } from 'express';

export class Auth { 

    private user_repo : any;

    constructor(){

        this.user_repo = AppSource.getRepository(UserEntity);
    }

    public register = async (req : Request,res : Response) =>{
        try {

            
        } catch (err) {
            
        }
    }

    
}