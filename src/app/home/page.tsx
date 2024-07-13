'use client'

import HomeContainer from "@/components/HomeContainer/HomeContainer";
import { FC, Suspense } from "react";

type HomeProps = {};

function SearchBarFallback() {
  return <>placeholder</>
}

const Home: FC<HomeProps> = () => {
  return (
    <Suspense fallback={<SearchBarFallback />}>
      <HomeContainer />
    </Suspense>
  );
};

export default Home;