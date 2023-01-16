import Image from "next/image";
import { useTranslation } from "next-i18next";

import myStyles from "../../styles/form.module.css";

function ContactUsForm() {
  const { t } = useTranslation("common");

  return (
    <div>
      <h1 className={myStyles.formTitle}>{t("contact.title")}</h1>
      <div className={myStyles.formContainer}>
        <div>
          <Image src="/img/card_front-2.svg" alt="" width={475} height={325} />
        </div>
        <form className={myStyles.formContent}>
          <div style={{ display: "inline-flex" }}>
            <input
              id="name"
              type="text"
              placeholder={`${t("contact.name")}`}
              className={myStyles.input_textbox}
              required
            ></input>
            <input
              id="company"
              type="text"
              placeholder={`${t("contact.company")}`}
              className={myStyles.input_textbox}
              required
            ></input>
          </div>
          <input
            id="email"
            type="text"
            placeholder={`${t("contact.email")}`}
            className={myStyles.input_textbox}
            required
          ></input>
          <input
            id="phone"
            type="text"
            placeholder={`${t("contact.phone")}`}
            className={myStyles.input_textbox}
            style={{ marginBottom: "0" }}
            required
          ></input>
          <div className={myStyles.checkboxContainer}>
            <label className={myStyles.input_checkbox}>
              <input id="type" type="checkbox"></input>
              <span></span>
              {t("contact.type1")}
            </label>
            <label className={myStyles.input_checkbox}>
              <input id="type" type="checkbox"></input>
              <span></span>
              {t("contact.type2")}
            </label>
            <label className={myStyles.input_checkbox}>
              <input id="type" type="checkbox"></input>
              <span></span>
              {t("contact.type3")}
            </label>
            <label className={myStyles.input_checkbox}>
              <input id="type" type="checkbox"></input>
              <span></span>
              {t("contact.type4")}
            </label>
          </div>
          <textarea
            id="message"
            rows={10}
            wrap="soft"
            placeholder={`${t("contact.message")}`}
            className={myStyles.input_textarea}
            required
          ></textarea>

          <button type="submit" className={myStyles.btn}>
            <p>{t("contact.button")}</p>
            <div className={myStyles.btnImg}>
              <Image
                src="/img/send.svg"
                alt=""
                width={25}
                height={25}
                style={{ zIndex: "1" }}
              />
            </div>
          </button>
        </form>
      </div>
    </div>
  );
}
export default ContactUsForm;
