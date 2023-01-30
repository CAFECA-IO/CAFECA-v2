import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useState } from "react";

import myStyles from "../../styles/hiring.module.css";

function HiringItems(props: {
  name: string;
  details: string[];
  descriptions: string[];
  requirements: string[];
}) {
  const { t } = useTranslation("common");

  const jobDetails: string[] = props.details;
  const jobDescriptions: string[] = props.descriptions;
  const jobRequirements: string[] = props.requirements;

  //收合
  const [showHiring, setShowHiring] = useState(false);
  const toggle = () => setShowHiring(!showHiring);
  const itemStyle = showHiring
    ? myStyles.hiring_item_open
    : myStyles.hiring_item_close;
  const listStyle = showHiring ? myStyles.openHiring : myStyles.closeHiring;
  const btnStyle = showHiring
    ? myStyles.see_more_btn_open
    : myStyles.see_more_btn_close;

  //list
  function getList(arr: string[]) {
    const list = arr.map((v) => {
      return <li key={v}>{t(v)}</li>;
    });
    return list;
  }

  const jobDetailList = getList(jobDetails);
  const jobDescriptionList = getList(jobDescriptions);
  const jobRequirementList = getList(jobRequirements);

  return (
    <div className={itemStyle}>
      <div className={myStyles.hiring_main}>
        <h3>{t(`${props.name}`)}</h3>
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
        <ul>{jobDetailList}</ul>

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
        <ul>{jobDescriptionList}</ul>

        <h4>Requirements</h4>
        <ul>{jobRequirementList}</ul>
      </div>
    </div>
  );
}
export default HiringItems;
