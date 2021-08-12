import { IsString } from "class-validator";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity()
export class Todo {
    @PrimaryGeneratedColumn()
    id: number;

    @IsString()
    @Column('varchar')
    title: string;

    @IsString()
    @Column('varchar')
    desc: string;

    @Column('boolean', {default: false})
    isDone: Boolean;

    @CreateDateColumn()
    createDate: Date;

    @UpdateDateColumn()
    updateDate: Date;

}