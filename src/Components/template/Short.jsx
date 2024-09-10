import React, {useState} from 'react';
import svg1 from "../../image/volume_up.svg"
import svg2 from "../../image/bookmark_border.svg"
import svg3 from "../../image/Frame-172.svg"
import styles from "../../styles/StyleShort.module.css"


function Short(props) {
    const [cards, setCards] = useState(false)


    const startCARRD = () => {
        setCards(true)
    }


    return (
        <div className={styles.CardShort}>
            <div className={styles.Card}>
                <div className={styles.textCard}>
                    <div className={styles.itemtextCard}>
                        <span>miglioramento/ <strong> Noun</strong>  </span>
                        <div className={styles.IMGCard}>
                            <img src={svg1} alt="icon"/>
                            <img src={svg2} alt="icon"/>
                        </div>
                    </div>
                    <div className={styles.ItemCard}>
                        <p>Betterment . Gain . rising . improvement. rising . improvement. </p>
                    </div>
                </div>

                <div className={styles.ButtonCard}>
                    <button onClick={startCARRD}>Show more</button>
                    <img src={svg3} alt="icon"/>
                </div>
            </div>

            {cards ? (
                <div className={styles.long}>

                    <div className={styles.textCard}>
                        <div className={styles.itemtextCard}>
                            <span>miglioramento/ <strong> Noun</strong>  </span>
                            <div className={styles.IMGCard}>
                                <img src={svg1} alt="icon"/>
                                <img src={svg2} alt="icon"/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.CardTexts}>
                        <div className={styles.Meaning}>
                            <span>Meaning</span>
                            <div>
                                <p>Betterment . Gain . rising . improvement. rising . improvement. Betterment . Gain .
                                    rising . improvement. rising . improvement. Betterment . Gain . rising .
                                    improvement. rising . improvement. Betterment . Gain . rising . improvement. rising
                                    . improvement. Betterment . Gain . rising . improvement. rising . improvement.
                                    Betterment . Gain . rising . improvement. rising . improvement. Betterment . Gain .
                                    rising . improvement. rising . improvement. Betterment . Gain . rising .
                                    improvement. rising </p>
                            </div>
                        </div>
                        <div className={styles.Synonym}>
                            <span>Synonym</span>
                            <div>
                               <p>Betterment . Gain . rising . improvement.  rising improvement  Betterment  Gain . rising . improvement.  rising . improvement. Betterment Gain . rising . improvement.  rising . improvement. Betterment</p>
                            </div>
                        </div>
                        <div className={styles.Opposite}>
                            <span>Opposite</span>
                            <div>
                                <p>Betterment . Gain . rising . improvement.  rising . improvement. Betterment . Gain . rising .</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.icons}>
                        <img src={svg3} alt="icon"/>
                    </div>

                </div>) : null}
        </div>
    );
}

export default Short;