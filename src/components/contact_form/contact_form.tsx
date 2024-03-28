import React, {useState} from 'react';

const ContactForm = () => {
  const [inputName, setInputName] = useState('');
  const [inputLastName, setInputLastName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputPhone, setInputPhone] = useState('');
  const [inputMessage, setInputMessage] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const [showAnim, setShowAnim] = useState(false);
  const [animation, setAnimation] = useState('');

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

  const failedProcess = async () => {
    setAnimation('ERROR');
    setShowAnim(true);
  };

  const successProcess = async () => {
    setAnimation('SUCCESS');
    setShowAnim(true);

    await new Promise(resolve => setTimeout(resolve, 3000));
    setInputName('');
    setInputLastName('');
    setInputPhone('');
    setInputEmail('');
    setInputMessage('');
    setShowAnim(false);
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
    if (!emailIsValid) return;
    event.preventDefault();

    setAnimation('LOADING');
    setShowAnim(true);

    try {
      await sendEmail();
    } catch (error) {
      await failedProcess();
    }
  };

  const retryHandler = async () => {
    setAnimation('LOADING');
    setShowAnim(true);

    try {
      await sendEmail();
    } catch (error) {
      await failedProcess();
    }
  };

  return (
    <div>
      <div className="flex relative flex-col mb-24 max-w-[330px] sm:max-w-full mx-auto lg:w-[712px] max-md:mb-10 z-50 -mt-48">
        <div className="flex flex-col self-center max-w-full text-center w-[616px]">
          <div className="justify-center text-5xl font-bold leading-[52.8px] text-gray900 max-md:max-w-full max-md:text-4xl">
            Get In Touch
          </div>
          <div className="mt-2 text-lg leading-6 text-gray-500 max-md:max-w-full">
            Please fill the form below, we will reply you as soon as possible.
          </div>
        </div>
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
                    className="flex flex-col justify-center items-start px-8 py-4 mt-2 text-gray-400 bg-white rounded-md border border-solid border-gray900 max-md:px-5"
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
                    className="flex flex-col justify-center items-start px-8 py-4 mt-2 text-gray-400 bg-white rounded-md border border-solid border-gray900 max-md:px-5"
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
                  // className="flex gap-5 px-8 py-4 mt-2 text-gray-400 whitespace-nowrap bg-white rounded-md border border-solid border-gray900 max-md:flex-wrap max-md:px-5"
                  className="flex gap-5 px-8 py-4 mt-2 text-gray-400 whitespace-nowrap bg-white rounded-md border border-solid border-gray900 bg-[url('https://cdn.builder.io/api/v1/image/assets/TEMP/40c2635188b5534b35019b7ef634ae9fd34ef71c4c3bae044c900bdf1ba623ec?apiKey=0e17b0b875f041659e186639705112b1&')] bg-no-repeat bg-left max-md:flex-wrap max-md:px-5"
                  style={{paddingLeft: '45px', backgroundPosition: '10px center'}} // Adjust this value based on the size of your icon
                  placeholder={`e.g. +886-XXXXXXXXX`}
                />
              </div>
              <div className="flex flex-col mt-4 whitespace-nowrap max-md:max-w-full">
                <div className="justify-center self-start py-1.5 font-bold text-gray900">
                  E-Mail
                </div>
                <input
                  type="email"
                  value={inputEmail}
                  onChange={emailChangeHandler}
                  className={`flex gap-5 px-8 py-4 mt-2 text-gray-400 bg-white rounded-md border border-solid ${emailValid ? 'border-gray900' : 'border-red-500'} bg-[url('https://cdn.builder.io/api/v1/image/assets/TEMP/f48d35a029e435c7dded6940ab7143b762a7279c089f6078fedc0ebd39a4a586?apiKey=0e17b0b875f041659e186639705112b1&')] bg-no-repeat bg-left max-md:flex-wrap max-md:px-5`}
                  style={{paddingLeft: '45px', backgroundPosition: '10px center'}} // Adjust this value based on the size of your icon
                  required
                  placeholder={`e.g. XXXXXX@gmail.com`}
                />
                {!emailValid && <p className="mt-1 text-xs text-red-500">Invalid email format</p>}
              </div>
              <div className="flex flex-col mt-4 max-md:max-w-full">
                <div className="justify-center self-start py-1 font-bold whitespace-nowrap text-gray900">
                  Message
                </div>
                <textarea
                  value={inputMessage}
                  onChange={messageChangeHandler}
                  className="flex flex-col justify-center items-start px-8 py-4 mt-2 text-gray-400 bg-white rounded-md border border-solid border-gray900 max-md:px-5 max-md:max-w-full"
                  rows={5}
                  required
                  placeholder={`What do you want to tell us...`}
                ></textarea>
              </div>
              <div className="flex flex-col justify-end items-end px-0 mt-4 font-bold whitespace-nowrap text-neutral-100 max-md:pl-5 max-md:max-w-full">
                <button
                  type="submit"
                  className="flex gap-2 justify-center px-12 py-4 bg-primaryPurple rounded-xl max-md:px-5"
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
        <div
          className={`${
            showAnim ? 'relative' : 'hidden'
          } mx-auto mt-20 flex h-700px w-800px max-w-full flex-col items-center justify-center rounded-2xl bg-secondaryBlue p-12 shadow-xl max-md:mt-10 max-md:px-5`}
        >
          <div
            className={`absolute left-0 top-0 ${
              showAnim ? 'flex' : 'hidden'
            } h-full w-full items-center justify-center`}
          >
            {animation === 'LOADING' ? (
              // <div className="flex flex-col items-center space-y-10">
              //   <img
              //     src="/animations/Loading.svg"
              //     width={100}
              //     height={100}
              //     alt="loading_animation"
              //   />
              //   <p className="text-sm">Sending...</p>
              // </div>

              <div className="flex justify-center items-center px-16 py-20 text-base leading-6 text-center whitespace-nowrap bg-white rounded-3xl shadow-2xl max-w-[712px] text-zinc-800 max-md:px-5">
                <div className="flex flex-col mt-56 w-[69px] max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5cbf45b488adbe517dd6656e2f67c09e5315f4ba885790f96aded326fe7ded8?apiKey=0e17b0b875f041659e186639705112b1&"
                    className="self-center w-12 aspect-square"
                  />
                  <div className="mt-9">Sending...</div>
                </div>
              </div>
            ) : animation === 'SUCCESS' ? (
              // <div className="flex flex-col items-center space-y-10">
              //   <img
              //     src="/animations/success.gif"
              //     width={150}
              //     height={150}
              //     alt="loading_animation"
              //   />
              //   <p className="text-sm">Message sent successfully!</p>
              // </div>
              <div className="flex flex-col items-center py-20 font-bold bg-white rounded-3xl shadow-2xl max-w-[712px]">
                <div className="shrink-0 mt-14 h-[124px] w-[124px] max-md:mt-10" />
                <div className="flex flex-col self-stretch px-5 mt-3 text-center leading-[110%] max-md:max-w-full space-y-3">
                  <div className="w-full text-6xl text-purple-500 max-md:max-w-full max-md:text-4xl">
                    Thank You
                  </div>
                  <div className="mt-2 w-full text-4xl text-slate-800 max-md:max-w-full">
                    Your request is sent
                  </div>
                </div>
                <div className="mt-5 text-base leading-6 text-center text-zinc-800 w-[504px]">
                  Our team will contact you as soon as possible.
                  <br />
                  Thank you for your patience.
                </div>
                <div className="flex gap-2 justify-center px-12 py-4 mt-28 text-base leading-6 whitespace-nowrap bg-purple-500 rounded-xl text-neutral-100 max-md:px-5 max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a126d09900cde217aa14ba46ca121a6cd6d5cb24a9de88946d6be6e6ec23bfd1?apiKey=0e17b0b875f041659e186639705112b1&"
                    className="shrink-0 w-6 aspect-square"
                  />
                  <div>Back</div>
                </div>
              </div>
            ) : animation === 'ERROR' ? (
              <div className="flex flex-col items-center">
                <img src="/animations/error.gif" width={100} height={100} alt="error_animation" />
                <p className="text-sm">Failed to send message.</p>
                <button
                  type="button"
                  onClick={retryHandler}
                  className="mt-6 rounded-lg bg-primaryPurple px-10 py-3 text-white hover:bg-white hover:text-black"
                >
                  Try Again
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

// const ContactForm = () => {
//   return (
//     <div>
//       <div className="flex relative flex-col mb-24 max-w-full w-[712px] max-md:mb-10 z-50 -mt-48">
//         <div className="flex flex-col self-center max-w-full text-center w-[616px]">
//           <div className="justify-center text-5xl font-bold leading-[52.8px] text-gray900 max-md:max-w-full max-md:text-4xl">
//             Get In Touch
//           </div>
//           <div className="mt-2 text-lg leading-6 text-gray-500 max-md:max-w-full">
//             Please fill the form below, we will reply you as soon as possible.
//           </div>
//         </div>
//         <div className="flex flex-col justify-center p-12 mt-20 text-base leading-6 bg-white rounded-3xl shadow-2xl max-md:px-5 max-md:mt-10 max-md:max-w-full">
//           <div className="flex flex-col max-md:max-w-full">
//             <div className="flex gap-4 max-md:flex-wrap max-md:max-w-full">
//               <div className="flex flex-col flex-1">
//                 <div className="justify-center self-start py-1.5 font-bold text-gray900">
//                   First Name
//                 </div>
//                 <div className="flex flex-col justify-center items-start px-8 py-4 mt-2 text-gray-400 bg-white rounded-md border border-solid border-gray900 max-md:px-5">
//                   <div className="justify-center py-1.5">Ex: Eric</div>
//                 </div>
//               </div>
//               <div className="flex flex-col flex-1">
//                 <div className="justify-center self-start py-1.5 font-bold text-gray900">
//                   Last Name
//                 </div>
//                 <div className="flex flex-col justify-center items-start px-8 py-4 mt-2 text-gray-400 bg-white rounded-md border border-solid border-gray900 max-md:px-5">
//                   <div className="justify-center py-1">Ex: Chang</div>
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-col mt-4 max-md:max-w-full">
//               <div className="justify-center self-start py-1.5 font-bold text-gray900">
//                 Phone Number
//               </div>
//               <div className="flex gap-5 px-8 py-4 mt-2 text-gray-400 whitespace-nowrap bg-white rounded-md border border-solid border-gray900 max-md:flex-wrap max-md:px-5">
//                 <img
//                   loading="lazy"
//                   src="https://cdn.builder.io/api/v1/image/assets/TEMP/40c2635188b5534b35019b7ef634ae9fd34ef71c4c3bae044c900bdf1ba623ec?apiKey=0e17b0b875f041659e186639705112b1&"
//                   className="shrink-0 w-6 aspect-square"
//                 />
//                 <div className="justify-center self-start py-1.5">+886-9-XXXXXXXX</div>
//               </div>
//             </div>
//             <div className="flex flex-col mt-4 whitespace-nowrap max-md:max-w-full">
//               <div className="justify-center self-start py-1.5 font-bold text-gray900">E-Mail</div>
//               <div className="flex gap-5 px-8 py-4 mt-2 text-gray-400 bg-white rounded-md border border-solid border-gray900 max-md:flex-wrap max-md:px-5">
//                 <img
//                   loading="lazy"
//                   src="https://cdn.builder.io/api/v1/image/assets/TEMP/f48d35a029e435c7dded6940ab7143b762a7279c089f6078fedc0ebd39a4a586?apiKey=0e17b0b875f041659e186639705112b1&"
//                   className="shrink-0 w-6 aspect-square"
//                 />
//                 <div className="justify-center self-start py-1.5">XXXX@mail.com</div>
//               </div>
//             </div>
//             <div className="flex flex-col mt-4 max-md:max-w-full">
//               <div className="justify-center self-start py-1 font-bold whitespace-nowrap text-gray900">
//                 Message
//               </div>
//               <div className="flex flex-col justify-center items-start px-8 py-4 mt-2 text-gray-400 bg-white rounded-md border border-solid border-gray900 max-md:px-5 max-md:max-w-full">
//                 <div className="justify-center py-1 mb-8">What do you want to tell us...</div>
//               </div>
//             </div>
//             <div className="flex flex-col justify-end items-end px-0 mt-4 font-bold whitespace-nowrap text-neutral-100 max-md:pl-5 max-md:max-w-full">
//               <div className="flex gap-2 justify-center px-12 py-4 bg-primaryPurple rounded-xl max-md:px-5">
//                 <div>Send</div>
//                 <img
//                   loading="lazy"
//                   src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a6c3749a72786030e3e56880cc709bd53c0ee9f79e21bc692d17e9da32df93e?apiKey=0e17b0b875f041659e186639705112b1&"
//                   className="shrink-0 w-6 aspect-square"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;
