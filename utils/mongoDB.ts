import { ObjectId } from "mongodb";

export default class Cluster0 {
  constructor(
    public name: string,
    public price: number,
    public category: string,
    public id?: ObjectId
  ) {}
}
