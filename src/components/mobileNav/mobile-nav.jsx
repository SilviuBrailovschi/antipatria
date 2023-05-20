import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function MobileNav() {
  return (
    <div className="mobileNav">
      <Image
        className="burger-menu-icon"
        src={"/icons/burger-menu.png"}
        alt="burgermenu"
        width={50}
        height={50}
        onClick={() => {
          setIsopen(!isOpen);
        }}
      />
      <menu>
        <ul>
          <li>
            <Image
              className="logo-img"
              src={"/images/Antipatria_LOGO_NoBackground.png"}
              alt="logo"
              width={60}
              height={50}
            />
          </li>
          <li>
            <Link className="nav-link" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" href="/products">
              Product
            </Link>
          </li>
          <li>
            <Link className="nav-link" href="/aboutUs">
              About
            </Link>
          </li>
          <li>
            <Link className="nav-link" href="/contactUs">
              Contact
            </Link>
          </li>
        </ul>
      </menu>
    </div>
  );
}
