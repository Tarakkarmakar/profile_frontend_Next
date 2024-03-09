import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/router";

const Navbar = () => {
  const { user, logout } = useAuth();
  const router = useRouter();
  const handleLogout = () => {
    logout();
    router.push("/");
  };
  console.log(user);
  return (
    <div
      className=" container-fluid gradient-background 
d-flex justify-content-between pl-4 pr-5"
      style={{ height: "70px", width: "100%" }}
    >
      <ul className="nav justify-content-start ">
        <li className="nav-item">
          <Link href="/">
            <p className="nav-link  text-black" aria-current="page" href="#">
              Home
            </p>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/about">
            <p className="nav-link text-black">About</p>
          </Link>
        </li>
      </ul>

      <ul className="nav justify-content-start ">
        {user ? (
          <li className="nav-item">
            <Link href={`/profile/${user.id}`}>
              <p className="nav-link text-black">Profile</p>
            </Link>
          </li>
        ) : (
          <></>
        )}
        {user ? (
          <li className="nav-item">
            <button
              className="nav-link text-black"
              aria-current="page"
              onClick={handleLogout}
            >
              Logout
            </button>
          </li>
        ) : (
          <li className="nav-item">
            <Link href="/login">
              <button className="nav-link text-black" aria-current="page">
                Login
              </button>
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
