import Image from "next/image";

export const Profile = ({ detail }) => {
  return (
    <div className="text-center">
      <div>
        <Image src={detail.img} width={300} height={300} objectFit="contain" />
      </div>
      <div>
        <div>{detail.nameCn}</div>
        <div>{detail.devilFruit}</div>
      </div>
    </div>
  );
};
