import { useMemo } from "react";

import { GetStaticProps } from "next";

import { useMediaQuery } from "../../hooks/useMediaQuery";
import { prefetchCMSHomepage } from "../../lib/fetchCMSData";
import client from "../../lib-sanity/config";

export default async function Homepage() {
  const { isMobile } = useMediaQuery();

  const pets = await client.fetch(`*[_type == 'footer'][0]`);
  console.log("pets: ", pets);

  return <></>;
}

export const getStaticProps: GetStaticProps = async () => {
  const homepage_cms_data = await prefetchCMSHomepage();

  return {
    props: {
      HomeData: homepage_cms_data,
    },
  };
};
