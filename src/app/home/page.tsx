import HomeContainer from "@/components/HomeContainer/HomeContainer";
import { FC } from "react";

type HomeProps = {
  params: {
    [key: string]: string;
  };
};

const Home: FC<HomeProps> = ({ params }) => {
  console.log(params.location);
  return (
    <HomeContainer />
  );
};

export default Home;