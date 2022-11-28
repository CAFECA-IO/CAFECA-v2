import ScrollArrow from "./scroll_down";
import style from "./animation.module.css";

function BackGroundItems() {
  return (
    <div className={style.container}>
      <img src="./cafeca/traffic_light.svg" className={style.balls}></img>

      <img src="./cafeca/circle.svg" className={style.circle}></img>
      <img src="./cafeca/wave_line_h.svg" className={style.waveh}></img>
      <img src="./cafeca/wave_line_v.svg" className={style.wavev}></img>

      <img src="./cafeca/future@2x.png" className={style.future}></img>

      <img
        src="./cafeca/leaning_card_front.svg"
        className={style.whitecard}
      ></img>

      <img src="./cafeca/credit_card@2x.png" className={style.creditcard}></img>
      <img src="./cafeca/digital_wallet@2x.png" className={style.wallet}></img>
      <img src="./cafeca/euro@2x.png" className={style.euro}></img>
      <img src="./cafeca/passport@2x.png" className={style.passport}></img>

      <div className={style.title}>THE NEXT GENERATION WALLET</div>
      <img src="./cafeca/cafeca.svg" className={style.cafeca}></img>
      <p>
        Combine wallets, keys and ID in one card. Explore the infinity in the
        future.
      </p>
      <div className={style.vline}></div>
      <div className={style.scroll}>
        <ScrollArrow />
      </div>
      <div className={style.hline}></div>
    </div>
  );
}
export default BackGroundItems;
