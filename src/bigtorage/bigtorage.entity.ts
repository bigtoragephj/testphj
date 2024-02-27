import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class Bigtorage {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ name: 'e-mail' })
  email: string;

  @Column()
  password: string;

  @Column()
  username: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdDt: Date;
}
