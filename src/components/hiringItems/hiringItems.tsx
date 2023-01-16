import Image from "next/image";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";

import myStyles from "../../styles/hiring.module.css";

const jobDetails = [1, 2, 3];

function HiringItems(props: any) {
  const { t } = useTranslation("common");

  //收合
  const [showHiring, setShowHiring] = useState(false);
  const toggle = () => setShowHiring(!showHiring);
  const listStyle = showHiring ? myStyles.openHiring : myStyles.closeHiring;
  const btnStyle = showHiring
    ? myStyles.see_more_btn_open
    : myStyles.see_more_btn_close;

  //job detail
  /*   const jobDetail = jobDetails.map((v) => {
    return <li>{t(`hiring.job1.detail${v}`)}</li>;
  }); */

  return (
    <div className={myStyles.hiring_item}>
      <div className={myStyles.hiring_main}>
        <h3>{props.name}</h3>
        <button className={myStyles.apply_btn}>
          <p>Apply</p>
          <div className={myStyles.apply_btnImg}>
            <Image
              src="/img/apply.svg"
              alt=""
              width={25}
              height={25}
              style={{ zIndex: "1" }}
            />
          </div>
        </button>
      </div>
      <div onClick={toggle} className={myStyles.hiring_detail}>
        <ul>
          <li>{props.detail1}</li>
          <li>{props.detail2}</li>
          <li>{props.detail3}</li>
        </ul>

        <Image
          src="/img/see_more.svg"
          alt=""
          width={24}
          height={24}
          className={btnStyle}
        />
      </div>
      <div className={listStyle}>
        <h4>Job descriptions</h4>
        <ul>
          <li>{t("hiring.job1.description1")}</li>
          <li>{t("hiring.job1.description2")}</li>
        </ul>

        <h4>Requirements</h4>
        <ul>
          <li>{t("hiring.job1.requirement1")}</li>
          <li>{t("hiring.job1.requirement2")}</li>
        </ul>
      </div>
    </div>
  );
}
export default HiringItems;
