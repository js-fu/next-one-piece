import { useRouter } from "next/router";
import Image from "next/image";
import { IItem } from "../../../types/item";
import { fetchDetail } from "../../../mock/api";

export async function getServerSideProps(context) {
  console.log("context", context.query);

  const res = await fetchDetail({ name: context.query.name });

  return {
    props: {
      detail: res.detail,
    }, // will be passed to the page component as props
  };
}

export default function Detail({ detail }) {
  const router = useRouter();
  console.log("router", router.query.name);

  if (!detail) {
    return <div>{router.query.name} not found</div>;
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
