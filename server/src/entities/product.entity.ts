import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  DeleteDateColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
} from "typeorm";

import { User } from "./users.entity";
import { ItemStatusEnum, ItemSexEnum } from "../interfaces/enums";

@Entity({ name: "products" })
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", nullable: false, default: "" })
  articles: string;

  @Column({ type: "varchar", nullable: false, default: "" })
  brand: string;

  @Column({ type: "varchar", length: 128, nullable: false })
  name!: string;

  @Column({ type: "varchar", nullable: false, default: "" })
  description: string;

  @Column({ type: "integer", nullable: false, default: 0 })
  quantity: number;

  @Column({
    type: "numeric",
    precision: 10,
    scale: 2,
    nullable: false,
    default: 0,
  })
  price: number;

  @Column({ type: "varchar", nullable: false, default: "" })
  barcode: string;

  @Column({ type: "varchar", length: 256, nullable: false })
  color!: string;

  @Column({ type: "varchar", nullable: false, default: "" })
  size: string;

  @Column({
    type: "enum",
    enum: ItemStatusEnum,
    default: ItemStatusEnum.NEW,
  })
  role: ItemStatusEnum;

  @Column({
    type: "enum",
    enum: ItemSexEnum,
    default: ItemSexEnum.UNISEX,
  })
  sex: ItemSexEnum;

  @Column({ type: "varchar", nullable: false, default: "" })
  category: string;

  @Column({ nullable: true })
  photoUrl?: string;

  @Column({ nullable: true })
  videoUrl?: string;

  @Column({ nullable: true })
  documentUrl?: string;

  @ManyToMany(() => User, (user) => user.products)
  @JoinTable({
    name: "product-user",
    joinColumn: { name: "product_id", referencedColumnName: "id" },
    inverseJoinColumn: { name: "user_id", referencedColumnName: "id" },
  })
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
