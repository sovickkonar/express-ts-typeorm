import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity('user')
export class UserEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstname: string


    @Column()
    middlename: string

    @Column()
    lastname: string


    @Column()
    username: string

    @Column()
    email : string

    @Column()
    password : string

    @CreateDateColumn()
    createdAt: Date;
    
    @UpdateDateColumn()
    updatedAt: Date;

}