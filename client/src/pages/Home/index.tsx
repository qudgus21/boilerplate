import { FC } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import Button from "@/components/Common/Button";

const Home: FC = () => {
  return (
    <>
      <div>홈!</div>
      <Header />
      <Footer />
      <Link to="/login">
        <Button />
      </Link>
    </>
  );
};

export default Home;
