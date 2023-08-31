import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {

  const [active, setActive] = useState(false)
  const [open, setOpen] = useState(false)

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false)
  }
  useEffect(()=>{
    window.addEventListener("scroll", isActive)

    return () => {
        window.removeEventListener("scroll", isActive)
    }
  },[])

  const currentUser = {
    id:1,
    username:"John Doe",
    isSeller:true,
  }

  return (
    <div className={active ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to="/" className="link">
          <span className="text">fiverr</span>
          </Link>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {!currentUser && <button>Join</button>}
          {currentUser && (
            <div className="user" onClick={() => setOpen(!open)}>
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80"
                alt=""
              />
              <span>{currentUser?.username}</span>
              {open && (
                <div className="options">
                  {currentUser?.isSeller && (
                    <>
                      <Link className="link" to="/mygigs">Gigs</Link>
                      <Link className="link" to="/add">Add new Gig</Link>
                    </>
                  )}
                  <Link className="link" to="/orders">Orders</Link>
                  <Link className="link" to="/messages">Messages</Link>
                  <Link className="link" to="">Logout</Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {active && (
        <>
          <hr />
          <div className="menu">
            <span>test1</span>
            <span>test2</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
