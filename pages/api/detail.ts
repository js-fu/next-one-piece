import { fetchList } from "../../mock/api";

export default async function (req, res) {
  const list = await fetchList();
  res.status(200).json({ detail: list.find((item) => item.name === req.query.name) });
}
