
import Header from "./components/header/Header";
import styles from "./Home.module.css";
import "./index.css";
import RoadmapSlider from "./components/UI/RoadMapSlider";
import Form from "./components/form/Form";
import BuyButton from "./components/UI/BuyButton";
import RotatingSun from "./components/RotatingSun";
import Footer from "./components/footer/Footer";

function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
            <div className={styles.sun}>
              <div className={styles.bannerTxt}>
              <p className={styles.p1}>Learn about $SURV</p>
              <h2>$SURV</h2>
              <p>ca: 0x9458F085CFAcd94422fa2CDfF69b2d9C2de5f34A</p>
              <BuyButton>Buy $SURV</BuyButton>
              </div>
            <RotatingSun size={300}/>
            </div>
        <div className={styles.about}>
  <div className={styles.info}>
    <div className={styles.firstBlunk}>
      <p className={styles.pBlank}>
        REAL OG<br />
        TUTORIAL<br />
        TOKEN IS $SURV
      </p>
    </div>

    <div className={styles.centeredBlank}>
      <p>
        10 month ago dev recorded the first tutorial for BNB chain on how to launch a token.
      </p>
      <p>
        This OG token was on testnet, now it is on the mainnet!
      </p>
      <p>
        Tutorial is a memecoin created by real Builders
      </p>
      <img src="/pictures/surv.png" alt="logo" />
    </div>
    <div className={styles.imageContainer}>

      <div  style={{ textAlign: 'right', marginBottom: '10px', display:'flex',alignItems:'center', justifyContent:'flex-start', gap:'10px'  }}>
        <img style={{width:'45px'}} src="pictures/play.svg" alt="" />
        <span style={{ color: 'rgb(255, 238, 181)', fontSize: '16px' }}>Watch the video</span>
      </div>
      
    </div>
  </div>
  <div style={{ position: 'relative', bottom: '150px' }}>
    <BuyButton>Go to X</BuyButton>
  </div>
</div>
          <div className={styles.roadMap}>
            <div className={styles.txtInfo}>
              <div className={styles.roadTxt}>
                <h2>ROAD MAP</h2>
              </div>
              <div className={styles.coin}>
                <img src="pictures/surv.png" alt="" />
              </div>
            </div>
            <RoadmapSlider />
          </div>
          <Form />
        </div>
        <Footer/>
      </main>
    </>
  );
}

export default Home;
