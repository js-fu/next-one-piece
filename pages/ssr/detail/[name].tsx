import { useRouter } from "next/router";
import { fetchDetail } from "../../../mock/api";
import { Profile } from "../../../components/profile";

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

  return <Profile detail={detail} />;
}
