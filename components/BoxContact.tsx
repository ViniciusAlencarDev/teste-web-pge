import React from 'react';
import styles from '../styles/BoxContact.module.css'

export default function BoxContact() {

    return(
        <div className={styles.container}>
            <a href="" target="_blank"><img className={styles.imgLink} src="https://i.pinimg.com/736x/a3/b1/3a/a3b13a13b0b6b656ea890f1572b32096.jpg" /></a>
            <div className={styles.boxContact}>
                <a href="" target="_blank"><span className={styles.small}>Atendimento pelo WhatsApp</span></a>
                <a href="" target="_blank"><span className={styles.large}>Segunda a Sexta, das 7h às 13h.</span></a>
            </div>
            <div className={styles.boxLink}>
                <div className={styles.boxContact}>
                    <a href="" target="_blank"><span className={styles.small}>(79) 99191-2162</span></a>
                    <a href="" target="_blank"><span className={styles.large}>Suporte</span></a>
                </div>
                <div className={styles.boxContact}>
                    <a href="" target="_blank"><span className={styles.small}>(79) 99191-2482</span></a>
                    <a href="" target="_blank"><span className={styles.large}>Desenvolvimento</span></a>
                </div>
            </div>
        </div>
    );

}
