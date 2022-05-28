import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import { IItem } from "../../../types/item";

export default function Detail() {
  const router = useRouter();
  console.log("router", router.query.name);
  const [detail, setDetail] = useState<IItem>();

  const fetchDetail = async () => {
    const res = await fetch(`/api/detail?name=${router.query.name}`).then((res) => res.json());
    console.log("fetch", res);
    setDetail(res.detail);
  };

  useEffect(() => {
    if (router.query.name) {
      fetchDetail();
    }
  }, [router.query.name]);

  if (!detail) {
    return null;
  }

  return (
    <div className="flex items-center">
      <div className="w-[300px] mr-[16px]">
        <Image src={detail.img} width={300} height={300} objectFit="contain" />
      </div>
      <div className="flex-1">
        <div>名字：{detail.nameCn}</div>
        <div>恶魔果实：{detail.devilFruit}</div>
      </div>
    </div>
  );
}
