import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userAddress: string;

  @Column({ nullable: true })
  transactionHash: string;

  @Column({ nullable: true })
  transactionTime: Date;
}
