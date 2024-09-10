import React from 'react';
import styles from "../../styles/ItemCards.module.css"

function ItemCards({name,img,sale ,saleFree}) {
    return (
        <div className={saleFree ? styles.CardsFree : styles.Cards}>
            <span>{name}</span>
            <div className={styles.Carditems}>
                {saleFree ? ( <span className={styles.saleFree}>{saleFree}</span>) :(<span>{sale}</span>) }
                <img src={img} alt="icon"/>
            </div>
        </div>
    );
}

export default ItemCards;