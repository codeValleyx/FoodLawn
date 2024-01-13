import { useEffect, useState } from "react";
import "./Header.css"
import Search from './Search'
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { loggedIn, loggedOut } from "../utils/userSlice";
import axios from "axios";

const Header = () => {
  let navbarMenu = document.getElementById("menu");
  let bgOverlay = document.querySelector(".overlay");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(()=>{
    navbarMenu = document.getElementById("menu");
    bgOverlay = document.querySelector(".overlay");

    axios.get("http://localhost:8000/user/isAuth" , {withCredentials: true}).then((res) => {
      if(res.status == 200){
        dispatch(loggedIn(res.data));
      }
    })
    .catch(err => {
        res.json(err);
    })
  }, [])

  const user = useSelector(store => store.user);

  const handleClick_burgerMenu = (e) => {
    navbarMenu.classList.add("is-active");
    bgOverlay.classList.toggle("is-active");
  }

  const handleClick_bgOverlay = (e) => {
    navbarMenu.classList.remove("is-active");
    bgOverlay.classList.toggle("is-active");
  }

  const handleClick_menuLink = (e) => {
    navbarMenu.classList.remove("is-active");
    bgOverlay.classList.remove("is-active");
  };

  const handleCartClick = () => {
    navigate("/cart");
  }

  const handleRegister = (e)=>{
    e.preventDefault();
    navigate("/user/sign-up");
  }

  const handleLogin = (e)=>{
    e.preventDefault();
    navigate("/user/sign-in");
  }

  const toggleAfter = () => {
    let classes = "hidden, flex, justify-center, absolute, z-20".split(", ");

    classes.map((style)=>{
      document.getElementById("profileOptions").classList.toggle(style);
    })
  }

  const handleLogout = ()=>{
    axios.post("http://localhost:8000/user/logout", {}, {withCredentials: true}).then(res => {
      if(res.status === 200){
        dispatch(loggedOut());
        navigate("/user/sign-in");
      }
    })
  }

  const cartCount = useSelector(store => store.cart.count);

  return (
    <header className="header" id="header">
      <nav className="navbar container">
        <a href="/" className="brand">Food Lawn</a>
        <div className="burger" id="burger" onClick={handleClick_burgerMenu}>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </div>
        <span className="overlay" onClick={handleClick_bgOverlay}></span>
        <div className="menu" id="menu">
          <ul className="menu-inner flex items-center">
            <li className="menu-item"><button className="menu-link" href="" onClick={()=>{handleClick_menuLink(); navigate("/")}}>Home</button></li>
            <li className="menu-item"><button className="menu-link" href="" onClick={handleClick_menuLink}>About</button></li>
            <li className="menu-item"><span className="menu-link" href="" onClick={handleClick_menuLink}><button onClick={()=>{navigate("/shop")}}>Shops</button></span></li>
            <li className="menu-item relative">
              
              {user.name
              ?
              <>
                <div onClick={toggleAfter} id="profile" className="hover:cursor-pointer underline">{user.name}</div>
                <div id="profileOptions" className="hidden bg-[#515660] transition-opacity rounded-lg w-28 p-4 -right-3">
                  <button onClick={handleLogout} className="bg-blue-300 rounded-lg p-2 text-sm">Logout</button>

                </div>
              </>
              :
              (<><a className="menu-link" href="" onClick={handleClick_menuLink}>
                <button className="bg-sky-600 rounded-lg p-2" onClick={handleLogin}>Login</button>
              </a>
              <a className="menu-link" href="" onClick={handleClick_menuLink}>
                <button className="bg-sky-600 rounded-lg p-2 ml-2" onClick={handleRegister}>Register</button>
              </a></>)}
            </li>

            <li className="menu-item relative h-full cursor-pointer" onClick={handleCartClick}>
              {cartCount? <div className="w-5 h-5 absolute bg-orange-500 z-10 -right-3 -top-3 rounded-full flex justify-center items-center text-white">{cartCount}</div>:""}
              <img src="../../public/cart.png" className="menu-link w-8 h-8"></img>
            </li>
          </ul>
        </div>
        <Search />
      </nav>
    </header>
  )
}

export default Header