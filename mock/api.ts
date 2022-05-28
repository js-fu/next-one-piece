import { IItem } from "../types/item";

export const fetchList = (): Promise<IItem[]> => {
  return new Promise(async (resolve) => {
    const list = await fetch("https://dev.usemock.com/6291d29996fcf94db80ebb34/api/list").then((res) => res.json());
    resolve(list.filter((item) => !item.deleted));
  });
};

export const fetchDetail = async ({ name }): Promise<{ detail: IItem }> => {
  const list = await fetchList();
  return { detail: list.find((item) => !item.deleted && item.name === name) };
};
