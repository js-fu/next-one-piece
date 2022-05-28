import { IItem } from "../types/item";
import db from "./db";

export const fetchList = (): Promise<IItem[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(db);
    }, 30);
  });
};

export const fetchDetail = async ({ name }): Promise<{ detail: IItem }> => {
  const list = await fetchList();
  return { detail: list.find((item) => item.name === name) };
};
