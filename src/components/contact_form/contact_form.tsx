import React, {useState} from 'react';
import SpinnerAnimation from '../spinner_animation/spinner_animation';
import CheckAnimation from '../check_animation/check_animation';

enum Animation {
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

const ContactForm = () => {
  const [inputName, setInputName] = useState('');
  const [inputLastName, setInputLastName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputPhone, setInputPhone] = useState('');
  const [inputMessage, setInputMessage] = useState('');
  const [emailValid, setEmailValid] = useState(true);

  const [showAnim, setShowAnim] = useState(false);
  const [animation, setAnimation] = useState(Animation.LOADING);

  const emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
  const emailIsValid = emailRule.test(inputEmail);

  const nameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputName(event.target.value);
  };
  const lastNameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputLastName(event.target.value);
  };
  const phoneChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputPhone(event.target.value);
  };
  const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputEmail(event.target.value);
  };
  const messageChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputMessage(event.target.value);
  };

  const backClickHandler = () => {
    setAnimation(Animation.LOADING);
    setShowAnim(false);
  };

  const failedProcess = async () => {
    setAnimation(Animation.ERROR);
    setShowAnim(true);
  };

  const successProcess = async () => {
    setAnimation(Animation.SUCCESS);
    setShowAnim(true);

    await new Promise(resolve => setTimeout(resolve, 3000));
    setInputName('');
    setInputLastName('');
    setInputPhone('');
    setInputEmail('');
    setInputMessage('');
  };

  const sendEmail = async () => {
    const now = new Date().toLocaleString('zh-TW', {timeZone: 'Asia/Taipei'});

    const emailData = {
      comment: `<h3>姓名：${inputName} ${inputLastName}</h3><h3>手機：${inputPhone}</h3><h3>Email：${inputEmail}</h3><h3>意見：${inputMessage}</h3><p>${now}<p>`,
    };

    await new Promise(resolve => setTimeout(resolve, 3000));

    const res = await fetch('/api/email', {
      method: 'POST',
      body: JSON.stringify(emailData),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    });
    const result = await res.json();

    const {success} = result;
    if (success) {
      await successProcess();
    } else {
      await failedProcess();
    }
  };

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!emailIsValid) return;

    setAnimation(Animation.LOADING);
    setShowAnim(true);

    try {
      await sendEmail();
    } catch (error) {
      await failedProcess();
    }
  };

  const retryHandler = async () => {
    setAnimation(Animation.LOADING);
    setShowAnim(true);

    try {
      await sendEmail();
    } catch (error) {
      await failedProcess();
    }
  };

  const formPart = (
    <div
      className={`flex relative flex-col mb-24 max-w-[330px] sm:max-w-full mx-auto lg:w-[712px] max-md:mb-10 z-50 -mt-48`}
    >
      {' '}
      <div className={` flex flex-col self-center max-w-full text-center w-[616px]`}>
        <div className="justify-center text-5xl font-bold leading-[52.8px] text-gray900 max-md:max-w-full max-md:text-4xl">
          Get In Touch
        </div>
        <div className="mt-2 text-lg leading-6 text-gray-500 max-md:max-w-full">
          Please fill the form below, we will reply you as soon as possible.
        </div>
      </div>
      {/* Info: Form part */}
      <div
        className={`${showAnim ? 'hidden' : 'flex'} flex-col justify-center p-12 mt-20 text-base leading-6 bg-white rounded-3xl shadow-2xl max-md:px-5 max-md:mt-10 max-md:max-w-full`}
      >
        <form onSubmit={submitHandler}>
          <div className="flex flex-col max-md:max-w-full">
            <div className="flex gap-4 max-md:flex-wrap max-md:max-w-full">
              <div className="flex flex-col flex-1">
                <div className="justify-center self-start py-1.5 font-bold text-gray900">
                  First Name
                </div>
                <input
                  type="text"
                  value={inputName}
                  onChange={nameChangeHandler}
                  className="flex flex-col justify-center items-start px-8 py-4 mt-2 text-gray300 bg-white rounded-md border border-solid border-gray900 max-md:px-5"
                  required
                  placeholder={`e.g. Eric`}
                />
              </div>
              <div className="flex flex-col flex-1">
                <div className="justify-center self-start py-1.5 font-bold text-gray900">
                  Last Name
                </div>
                <input
                  type="text"
                  value={inputLastName}
                  onChange={lastNameChangeHandler}
                  className="flex flex-col justify-center items-start px-8 py-4 mt-2 text-gray300 bg-white rounded-md border border-solid border-gray900 max-md:px-5"
                  required
                  placeholder={`e.g. Chang`}
                />
              </div>
            </div>
            <div className="flex flex-col mt-4 max-md:max-w-full">
              <div className="justify-center self-start py-1.5 font-bold text-gray900">
                Phone Number
              </div>
              <input
                type="tel"
                value={inputPhone}
                onChange={phoneChangeHandler}
                className="flex gap-5 px-8 py-4 mt-2 text-gray300 whitespace-nowrap bg-white rounded-md border border-solid border-gray900 bg-[url('https://cdn.builder.io/api/v1/image/assets/TEMP/40c2635188b5534b35019b7ef634ae9fd34ef71c4c3bae044c900bdf1ba623ec?apiKey=0e17b0b875f041659e186639705112b1&')] bg-no-repeat bg-left max-md:flex-wrap max-md:px-5"
                style={{paddingLeft: '45px', backgroundPosition: '10px center'}} // Adjust this value based on the size of your icon
                placeholder={`e.g. +886-XXXXXXXXX`}
              />
            </div>
            <div className="flex flex-col mt-4 whitespace-nowrap max-md:max-w-full">
              <div className="justify-center self-start py-1.5 font-bold text-gray900">E-Mail</div>
              <input
                type="email"
                value={inputEmail}
                onChange={emailChangeHandler}
                className={`flex gap-5 px-8 py-4 mt-2 text-gray300 bg-white rounded-md border border-solid ${emailValid ? 'border-gray900' : 'border-lightRed'} bg-[url('https://cdn.builder.io/api/v1/image/assets/TEMP/f48d35a029e435c7dded6940ab7143b762a7279c089f6078fedc0ebd39a4a586?apiKey=0e17b0b875f041659e186639705112b1&')] bg-no-repeat bg-left max-md:flex-wrap max-md:px-5`}
                style={{paddingLeft: '45px', backgroundPosition: '10px center'}} // Adjust this value based on the size of your icon
                required
                placeholder={`e.g. XXXXXX@gmail.com`}
              />
              {!emailValid && <p className="mt-1 text-xs text-lightRed">Invalid email format</p>}
            </div>
            <div className="flex flex-col mt-4 max-md:max-w-full">
              <div className="justify-center self-start py-1 font-bold whitespace-nowrap text-gray900">
                Message
              </div>
              <textarea
                value={inputMessage}
                onChange={messageChangeHandler}
                className="flex flex-col justify-center items-start px-8 py-4 mt-2 text-gray300 bg-white rounded-md border border-solid border-gray900 max-md:px-5 max-md:max-w-full"
                rows={5}
                required
                placeholder={`What do you want to tell us...`}
              ></textarea>
            </div>
            <div className="flex flex-col justify-end items-end px-0 mt-4 font-bold whitespace-nowrap text-gray50 max-md:pl-5 max-md:max-w-full">
              <button
                type="submit"
                className="flex gap-2 justify-center px-12 py-4 bg-primaryPurple hover:bg-primaryPurpleHover rounded-xl max-md:px-5"
              >
                <div>Send</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a6c3749a72786030e3e56880cc709bd53c0ee9f79e21bc692d17e9da32df93e?apiKey=0e17b0b875f041659e186639705112b1&"
                  className="shrink-0 w-6 aspect-square"
                />
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* Info: Animation part */}
      <div
        className={`${
          showAnim ? 'relative' : 'hidden'
        } flex flex-col self-center w-full text-center mt-20 `}
      >
        {animation === Animation.LOADING ? (
          <div className="h-[800px] flex justify-center items-center px-16 py-20 text-base leading-6 text-center whitespace-nowrap bg-white rounded-3xl shadow-2xl max-w-[712px] text-coolGray90 max-md:px-5">
            <div className="flex flex-col mt-0 w-[69px] max-md:mt-10 justify-center items-center">
              <SpinnerAnimation />

              <div className="mt-9 text-base text-center">Sending...</div>
            </div>
          </div>
        ) : animation === Animation.SUCCESS ? (
          <div className="flex flex-col items-center justify-center pt-5 pb-20 font-bold bg-white rounded-3xl shadow-2xl max-w-[712px]">
            <div className="shrink-0 mt-0 h-[124px] w-[124px] max-md:mt-10" />
            <div className="h-[130px] w-[130px]">
              <CheckAnimation />
            </div>
            <div className="flex flex-col self-stretch px-5 mt-3 text-center leading-[110%] max-md:max-w-full space-y-3">
              <div className="w-full text-6xl text-primaryPurple max-md:max-w-full max-md:text-4xl">
                Thank You
              </div>
              <div className="mt-2 w-full text-4xl text-gray900 max-md:max-w-full">
                Your request is sent
              </div>
            </div>
            <div className="mt-5 text-base text-center text-gray900 font-normal">
              Our team will contact you as soon as possible.
              <br />
              Thank you for your patience.
            </div>
            <button
              onClick={backClickHandler}
              className="flex gap-2 justify-center px-12 py-4 mt-28 text-base leading-6 whitespace-nowrap bg-primaryPurple hover:bg-primaryPurpleHover rounded-xl text-gray50 max-md:px-5 max-md:mt-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                fill="none"
                viewBox="0 0 24 25"
              >
                <path
                  fill="#FBFBFC"
                  d="M17.303 22.005a1.5 1.5 0 000-2.121l-7.425-7.425 7.425-7.425a1.5 1.5 0 00-2.12-2.121l-8.486 8.485a1.5 1.5 0 000 2.121l8.485 8.486a1.5 1.5 0 002.121 0z"
                ></path>
              </svg>
              <p>Back</p>
            </button>
          </div>
        ) : animation === Animation.ERROR ? (
          <div className="flex flex-col items-center justify-center h-[700px] gap-5 font-bold bg-white rounded-3xl shadow-2xl max-w-[712px]">
            <div className="flex flex-col self-stretch px-5 mt-3 text-center leading-[110%] max-md:max-w-full space-y-3">
              <div className="w-full text-4xl text-primaryPurple max-md:max-w-full max-md:text-4xl">
                Failed to send message.
              </div>
            </div>
            <div className="mt-5 text-xl leading-6 text-center text-gray900 w-[504px]">
              Something went wrong. <br />
            </div>
            <button
              type="button"
              onClick={retryHandler}
              className="mt-6 rounded-lg bg-primaryPurple px-10 py-3 text-white hover:bg-primaryPurpleHover"
            >
              Try Again
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );

  return <div>{formPart}</div>;
};

export default ContactForm;
