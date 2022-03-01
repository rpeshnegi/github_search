import { IRepository } from "../../types/IRepository";

export type RepositoriesState = {
  loading: boolean;
  items: IRepository[];
  incomplete_results: boolean,
  total_count: number,
  error: any;
}

export type IRepositoryActions = {
  type: string;
  payload: IRepository[] | [];
};

export type IRepositoryRes = {
  incomplete_results: boolean
  items: any[] | IRepository[],
  total_count: number
}