import Image from "next/image";

import myStyles from "../../styles/form.module.css";

function ContactUsForm() {
  return (
    <div>
      <h1 className={myStyles.formTitle}>CONTACT US</h1>
      <div className={myStyles.formContainer}>
        <div>
          <Image src="/img/card_front-2.svg" alt="" width={475} height={325} />
        </div>
        <form className={myStyles.formContent}>
          <div style={{ display: "inline-flex" }}>
            <input
              id="name"
              type="text"
              placeholder="姓名"
              className={myStyles.input_textbox}
              required
            ></input>
            <input
              id="company"
              type="text"
              placeholder="公司名稱"
              className={myStyles.input_textbox}
              required
            ></input>
          </div>
          <input
            id="email"
            type="text"
            placeholder="E-MAIL"
            className={myStyles.input_textbox}
            required
          ></input>
          <input
            id="phone"
            type="text"
            placeholder="聯絡電話"
            className={myStyles.input_textbox}
            style={{ marginBottom: "0" }}
            required
          ></input>
          <div className={myStyles.checkboxContainer}>
            <label className={myStyles.input_checkbox}>
              <input id="type" type="checkbox"></input>
              <span></span>
              技術詢問
            </label>
            <label className={myStyles.input_checkbox}>
              <input id="type" type="checkbox"></input>
              <span></span>
              合作洽談
            </label>
            <label className={myStyles.input_checkbox}>
              <input id="type" type="checkbox"></input>
              <span></span>
              報價詢問
            </label>
            <label className={myStyles.input_checkbox}>
              <input id="type" type="checkbox"></input>
              <span></span>
              其他
            </label>
          </div>
          <textarea
            id="message"
            rows={10}
            wrap="soft"
            placeholder="想說什麼..."
            className={myStyles.input_textarea}
            required
          ></textarea>

          <button type="submit" className={myStyles.btn}>
            <p>SEND</p>
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
