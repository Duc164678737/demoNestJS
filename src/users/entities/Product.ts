import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Category } from "./Category";

@Index("product_pkey", ["id"], { unique: true })
@Entity("product", { schema: "public" })
export class Product {
  @Column("uuid", { primary: true, name: "id" })
  id: string;

  @Column("character", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @ManyToOne(() => Category, (category) => category.products)
  @JoinColumn([{ name: "categoryID", referencedColumnName: "id" }])
  category: Category;
}
