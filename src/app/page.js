import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/Components/Header/Header";
import { OverLay } from "@/Pages/OverLay/OverLay";

export default function Home() {
  return (
    <>
      <OverLay>
        <Header />
      </OverLay>
    </>
  );
}
