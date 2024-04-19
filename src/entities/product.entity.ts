import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  DeleteDateColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
} from "typeorm";

import { User } from "./users.entity";

@Entity({ name: "product" })
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 128, nullable: false })
  name!: string;

  @Column({ type: "varchar", length: 256, nullable: false })
  color!: string;

  @ManyToMany(() => User, { cascade: true })
  users: User[];

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @UpdateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP",
    onUpdate: "CURRENT_TIMESTAMP",
  })
  updatedAt: Date;

  @DeleteDateColumn({ type: "timestamp", nullable: true })
  deletedAt: Date | null;
}
