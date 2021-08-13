import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity()
export class Todo {
    @PrimaryGeneratedColumn()
    id: number;

    @IsString()
    @ApiProperty({
        example: 'Eat',
        description: '투두리스트의 제목'
    })
    @Column('varchar')
    title: string;

    @IsString()
    @ApiProperty({
        example: 'get energy',
        description: '투두리스트의 실횅'
    })
    @Column('varchar')
    desc: string;

    @Column('boolean', {default: false})
    isDone: Boolean;

    @CreateDateColumn()
    createDate: Date;

    @UpdateDateColumn()
    updateDate: Date;

}