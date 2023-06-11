import React from "react";
import Link from "next/link";

export default function MobileNav() {
  return (
    <div className="mobileNav">
      <menu>
        <ul>
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
