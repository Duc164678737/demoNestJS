import { Column, Entity, Index, OneToMany } from "typeorm";
import { Product } from "./Product";

@Index("category_pkey", ["id"], { unique: true })
@Entity("category", { schema: "public" })
export class Category {
  @Column("uuid", { primary: true, name: "id" })
  id: string;

  @Column("character", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @OneToMany(() => Product, (product) => product.category)
  products: Product[];
}
