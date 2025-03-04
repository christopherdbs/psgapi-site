import Logo from "../assets/logo.png";
import Github from "../assets/github.svg";
import React from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "../hooks/useAuth";

const Header = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  async function logoutHeader(e) {
    e.preventDefault();
    try {
      const response = logout();
      toast.success(response.message);
      navigate("/login");
    } catch (e) {
      toast.error(e);
    }
  }

  return (
    <header className="fixed top-0 z-[1] flex h-16 w-full flex-row justify-center bg-neutral-50 text-white  ">
      <nav className="flex w-full flex-row flex-wrap items-center justify-between p-3">
        <a className="" href="/">
          <img src={Logo} className="max-h-11 w-auto" alt="" />
        </a>
        <ul className="list-none">
          {isAuthenticated && (
            <>
              <li className="ms-5 inline font-semibold">
                <a className="a-primary" onClick={(e) => logoutHeader(e)}>
                  Log out
                </a>
              </li>
              <li className="ms-5 inline font-semibold">
                <a className="a-primary" href="/account">
                  Account
                </a>
              </li>
            </>
          )}
          {!isAuthenticated && (
            <>
              <li className="ms-5 inline font-semibold">
                <a className="a-primary" href="/login">
                  Log in
                </a>
              </li>
              <li className="ms-5 inline font-semibold">
                <a className="a-primary" href="/register">
                  Register
                </a>
              </li>
            </>
          )}
          <li className="ms-5 inline font-semibold">
            <a className="a-primary" href="/documentation">
              Docs
            </a>
          </li>
          <li className="ms-5 inline font-semibold">
            <a className="a-primary" href="/about">
              About
            </a>
          </li>
          <li className="ms-5 inline font-semibold">
            <a className="a-primary" href="/supportme">
              Support me
            </a>
          </li>
          <li className="ms-5 inline font-semibold">
            <a className="" href="https://github.com/christopherdbs/psgapi">
              <img src={Github} alt="" className="inline h-8" />
            </a>
          </li>
        </ul>
        <Toaster />
      </nav>
    </header>
  );
};
export default Header;
