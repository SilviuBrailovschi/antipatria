import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { HomePage } from "@/components/home/home-page";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Antipatria's Perfection</title>
        <meta
          name="description"
          content="High quality cold pressed olive oil"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/antipatriaFav.png" />
      </Head>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          padding: "20px 30px",
          background: "#0e2131",
          display: "flex",
          alignItems: "center",
          zIndex: 100,
        }}
      >
        <div
          style={{ display: "flex", alignItems: "center", gap: ".5rem" }}
          class="logo-container"
        >
          <img
            style={{
              width: "15%",
              mixBlendMode: "normal",
              objectFit: "contain",
            }}
            src="/antipatriaFav.png"
            alt="Antipatria_LOGO.png"
          />
          <a
            href="#"
            class="logo"
            style={{
              fontSize: "25px",
              color: "#e5c01a",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Antipatrea's Perfection
          </a>
        </div>
        <nav>
          <a
            style={{
              fontSize: "18px",
              color: "#fff",
              textDecoration: "none",
              fontWeight: "500",
              marginLeft: "35px",
              transition: ".3s",
            }}
            href="#home"
            class="active"
          >
            Home
          </a>
          <a
            style={{
              fontSize: "18px",
              color: "#fff",
              textDecoration: "none",
              fontWeight: "500",
              marginLeft: "35px",
              transition: ".3s",
            }}
            href="#about"
          >
            Products
          </a>
          <a
            style={{
              fontSize: "18px",
              color: "#fff",
              textDecoration: "none",
              fontWeight: "500",
              marginLeft: "35px",
              transition: ".3s",
            }}
            href="#services"
          >
            About Us
          </a>
          <a
            style={{
              fontSize: "18px",
              color: "#fff",
              textDecoration: "none",
              fontWeight: "500",
              marginLeft: "35px",
              transition: ".3s",
            }}
            href="#portofolio"
          >
            Contact Us
          </a>
        </nav>
      </header>
      <HomePage />
    </>
  );
}
