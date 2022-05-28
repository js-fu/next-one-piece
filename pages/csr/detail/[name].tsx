import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IItem } from "../../../types/item";
import { Profile } from "../../../components/profile";

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

  return <Profile detail={detail} />;
}
