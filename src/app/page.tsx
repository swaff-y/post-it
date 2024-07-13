'use client'

import { Suspense } from 'react'
import HomeContainer from "@/components/HomeContainer/HomeContainer";
import { FC } from "react";

type HomeProps = {
  params: {
    [key: string]: string;
  };
};

function SearchBarFallback() {
  return <>placeholder</>
}

const Home:FC<HomeProps> = ({params}) => {
  return (
  <Suspense fallback={<SearchBarFallback />}>
    <HomeContainer />
  </Suspense>
  );
};

export default Home;