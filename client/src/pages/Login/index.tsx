import { FC } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Login/Header";
import Footer from "@/components/Login/Footer";
import Button from "@/components/Common/Button";

const Login: FC = () => {
  return (
    <>
      <div>로그인!</div>
      <Header />
      <Footer />
      <Link to="/">
        <Button />
      </Link>
    </>
  );
};

export default Login;
