import { Type } from "./type"

export interface Pokemon {
  image: string
  name: string
  number: number
  type: Type[]
}
