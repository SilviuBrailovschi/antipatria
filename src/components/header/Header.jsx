import Image from "next/image";
import Link from "next/link";

export const Header = () => (
  <header>
    <div className="logo-container">
      <Link href="/">
        <Image
          className="logo-img"
          src={"/antipatriaFav.png"}
          alt="logo"
          width={60}
          height={50}
        />
      </Link>
      <Link href="/">
        {" "}
        <p>Antipatrea's Perfection</p>
      </Link>
    </div>
    <nav>
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
            About Us
          </Link>
        </li>
        <li>
          <Link className="nav-link" href="/contactUs">
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);
