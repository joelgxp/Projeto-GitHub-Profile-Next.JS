import Image from "next/image";

import ProfileImage from "../../assets/profile.png"
import styles from "./styles.module.scss"

export default function UserProfile() {
    return (
        <div className={styles.container}>
            <div className={styles["container-avatar"]}>
                <Image src={ProfileImage} alt="avatar" width={249} height={256} />
                <div>Meu Perfil</div>
             </div>

             <h1>Joel Vieira de Souza</h1>
             <span>joelgxp</span>
             <p>
             Developer: Android, VueJS, Quasar FrameWork, React JS, NodeJS, Javascript, PHP, Bootstrap, HTML5 e CSS3.
             </p>

             <div className={styles["items-container"]}>
                <span>joelvieirasouza@gmail.com</span>
                <span>joelsouza.com.br</span>
             </div>
        </div>
    );
}