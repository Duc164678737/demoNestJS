import { Column, Entity, Index } from "typeorm";

@Index("user_pkey", ["id"], { unique: true })

@Entity("user", { schema: "public" })
export class User {
  @Column("uuid", { primary: true, name: "id" })
  id: string;

  @Column("character", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("character", { name: "email", nullable: true, length: 255 })
  email: string | null;

  @Column("integer", { name: "age", nullable: true })
  age: number | null;
}
