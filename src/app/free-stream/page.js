import styles from "./page.module.css";
import Link from "next/link";
import IframeWrapper from "@/components/IframeWrapper";
import BackLight from "@/components/backLigth/BackLight";
export default function Personal() {
  return (
    <>
      <main className={styles.main}>
        <BackLight />
        <Link
          href={"/free-stream"}
          style={{ textDecoration: "none", marginBottom: "1.5rem" }}
        >
          <h1>Free Stream</h1>
        </Link>
        <IframeWrapper />
        <p
          style={{
            marginTop: "auto",
            marginTop: "6rem",
            textAlign: "center",
          }}
        >
          Highly suggested to use an Ad blocker like{" "}
          <Link
            href={
              "https://chromewebstore.google.com/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm"
            }
            target="_blank"
          >
            uBlock
          </Link>
          {", or "}
          <Link
            href={
              "https://chromewebstore.google.com/detail/adblock-%E2%80%94-best-ad-blocker/gighmmpiobklfepjocnamgkkbiglidom"
            }
            target="_blank"
          >
            Adblock.
          </Link>
        </p>
        <p style={{ margin: "1rem" }}>
          For mobile use{" "}
          <Link
            href={
              "https://play.google.com/store/apps/details?id=com.brave.browser"
            }
            target="_blank"
          >
            Brave Browser
          </Link>
        </p>
        <Link
          href={"https://github.com/Sourav9063/watchtogether"}
          target="_blank"
          style={{ textDecoration: "none", marginBottom: "1.5rem" }}
        >
          Please give it a star!⭐
        </Link>
      </main>
    </>
  );
}
