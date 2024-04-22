import UserProfile from "./components/UserProfile";
import RepositoryCard from "./components/RepositoryCard";
import styles from "./page.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <UserProfile />
      <div>
        <Link href="/search-users">
          <button className="btn--green">Encontrar Usuários</button>
        </Link>

        <div className={styles["container-projects"]}>
          <RepositoryCard />
          <RepositoryCard />
          <RepositoryCard />
          <RepositoryCard />
          <RepositoryCard />
          <RepositoryCard />
        </div>
      </div>
    </main>
  );
}
