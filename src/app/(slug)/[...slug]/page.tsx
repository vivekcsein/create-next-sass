import React from "react";

type props = {
  params: {
    slug: string | number | undefined;
  };
};
const page = ({ params: { slug } }: props) => {
  console.log(slug);
  return (
    <div className="fullscreen bg-secondary">
      <h1>{slug}</h1>
    </div>
  );
};

export default page;
