import UserProfile from "../components/UserProfile";
import RepositoryCard from "../components/RepositoryCard";
import styles from "./styles.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles["main--search"]}>
        <input type="text" placeholder="Nome do usuário"></input>
        <button className="btn--green">buscar</button>
      </div>
      <div className={styles["main--body"]}>
        <UserProfile />
        <div>
          <div className={styles["container-projects"]}>
            <RepositoryCard />
            <RepositoryCard />
            <RepositoryCard />
            <RepositoryCard />
            <RepositoryCard />
            <RepositoryCard />
          </div>
        </div>
      </div>
    </main>
  );
}
