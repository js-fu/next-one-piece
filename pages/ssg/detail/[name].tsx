import { useRouter } from "next/router";
import Image from "next/image";
import { IItem } from "../../../types/item";
import { fetchList, fetchDetail } from "../../../mock/api";

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps(context) {
  console.log("getStaticProps context", context);
  const res = await fetchDetail({ name: context.params.name });

  return {
    props: {
      detail: res.detail,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the path has not been generated.
export async function getStaticPaths() {
  const list = await fetchList();

  // Get the paths we want to pre-render based on posts
  const paths = list.map((item) => ({
    params: { name: item.name },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: "blocking" };
}

export default function Detail({ detail }) {
  const router = useRouter();
  console.log("router", router.query.name);

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
