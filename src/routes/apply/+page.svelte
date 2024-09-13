
<script>
  import axios from "axios";
  const rawHtml = ``;
  let firstName = ``;
  let lastName = ``;
  let telephoneNumber = ``;
  let email = ``;
  let message = ``;
 

  const onSubmit =async () =>{
    const formData = new FormData();
    formData.append("firstName",firstName);
    console.log(firstName);
    formData.append("lastName",lastName);
    formData.append("telephoneNumber",telephoneNumber);
    formData.append("email",email);
    formData.append("message",message); 
    const res = await axios({
  method: "post",
  url: "/api/mail",
  data: formData,
  headers: { "Content-Type": "multipart/form-data" },
});
    
console.log(await res.json());
  };
</script>

<div class="container">
  <!-- {@html rawHtml} -->
  <div class="rowWrapper column">
    <div class="columnLeft"><h2 class="columnLeftH2">Start Your Journey with Harwood Houses</h2><p class="mktP">
      Harwood Houses provides supportive sober living environments tailored for recovery. Apply below to secure a place in our top-rated sober houses and begin your journey to a healthier lifestyle.
  </p><div class="theForm"><div class="formWrapper"><form class="mktForm"><div class="mktFormRow"><div class="mktFormCol"><div class="mktFieldWrap">
        <input
                name="firstName"
                placeholder="First Name"
                class="mktInputText"
                bind:value={firstName}
                /></div></div><div class="mktFormCol"><div class="mktFieldWrap">
                <input
                name="lastName"
                placeholder="Last Name"
                class="mktInputText"
                bind:value={lastName}
              /></div></div></div><div class="mktFormRow"><div class="mktFormCol"><div class="mktFieldWrap"><input
                type="tel"
                name="telephoneNumber"
                placeholder="Phone Number"
                class="mktInputText"
                bind:value={telephoneNumber}
              /></div></div><div class="mktFormCol"><div class="mktFieldWrap"><input
                name="email"
                placeholder="Email"
                class="mktInputText"
                bind:value={email}
              /></div></div></div><div class="mktFormRowSingle"><div class="mktFormCol"><div class="mktFieldWrap"><textarea
                name="message"
                placeholder="Message"
                class="mktInputTextArea"
                bind:value={message}
              ></textarea></div></div></div><div class="mktButtonRow"><span class="mktButtonSpan"><button on:click={onSubmit} type="submit" class="mktButton">Submit</button></span></div></form>
            </div>
          </div>
        </div>
      </div>
</div>

<style>
  /* Base styles */
  .container {
    display: grid;
    place-items: center;
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
  @media screen and (max-width: 768px) {
  .container {
    padding-top: 3rem;
    padding-bottom: 6.5rem;
  }
}

.theForm {
  display: grid;
  place-items: center;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  padding-bottom: 6.5rem;
}

.columnLeftH2 {
  font-family: "Questrial", sans-serif;
  color: #ffffff;
  font-size: 34px;
  max-width: 100%;
  padding: 20px 20px 10px;
  text-align: center;
  line-height: 1.2;
}

.rowWrapper {
  display: grid;
  grid-template-columns: minmax(150px, 100%) 1fr;
  place-items: center;
  overflow: hidden;
  -webkit-perspective: 1px;
  perspective: 1px;
  max-width: 650px;
}

.titleWrap {
  text-align: center;
}

.titleWrapSpan {
  font-size: 26px;
  display: inline-block;
  font-weight: 600;
  padding: 1rem;
  margin-bottom: 5px;
  color: #ffffff;
}

.columnLeft {
  visibility: visible;
  animation-delay: 0.4s;
  animation-name: fadeInUp;
  height: 100%;
  width: 100%;
  vertical-align: top;
  border-radius: 33px;
  /* background-image: linear-gradient(120deg, #00a86b, #004d00); */
  /* background-image: linear-gradient(120deg, #009874, #005a46); */
  background-image: linear-gradient(120deg, #1c792e, #13541d);
  /* background-image: linear-gradient(120deg, #1c792e, #092f18); */

}

.columnRight {
  position: relative;
  height: 100%;
  width: 100%;
  display: block;
}

.formWrapper {
  /* max-width: 550px; */
  margin-top: 25px;
  margin-bottom: 150px;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.3);
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.16);
  border-radius: 30px 30px;
}

.mktForm {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 13px;
  color: rgb(51, 51, 51);
  margin-top: 10px;
  width: 100% !important;
  text-align: left;
  padding-top: 1rem;
}

.mktFormRow {
  width: 100%;

  margin-top: 10px;
  clear: both;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  padding-left: 1rem;
  padding-right: 1rem;

}

/* Media query for screens 768px or smaller */
@media (max-width: 768px) {
  .mktFormRow {
    grid-template-columns: 1fr; /* Stack the columns vertically */
    padding-left: 1rem; /* Adjust padding as needed */
    padding-right: 1rem; /* Adjust padding as needed */
    margin-top: 0px;
  }

  .mktFormCol {
    width: 100%; /* Ensure each column takes full width */
    margin-bottom: 10px; /* Add spacing between stacked columns if needed */
    max-width: 240px;
  }

  .mktFieldWrap {
    width: 100%; /* Ensure the field wrapper takes full width */
  }

  .mktInputText {
    width: 100%; /* Make the input field take full width of the container */
  }
}

.mktFormCol {
  /* margin-left: 0 !important; */
  width: 95%;
  margin: 0 10px;
  float: left;
  position: relative;
  min-height: 2em;
  margin-bottom: 15px;
}

.mktFieldWrap {
  position: relative;
  width: 100%;
  margin-bottom: 10px;
  float: left;
  text-align: left;
  margin: 0;
  padding: 0;
  display: grid;
  place-items: center;
}

.mktInputText {
  border: 1px solid #ebebeb !important;
  padding: 3px 30px 3px 20px;
  max-width: 100%;
  font-family: "Tenon", arial;
  box-shadow: 0 0 0 50px transparent inset;
  -webkit-box-shadow: 0 0 0 50px transparent inset;
  color: #888888;
  border: 1px solid transparent;
  background-color: #ffffff;
  height: 41px;
  font-size: 16px;
  margin: 0;
  outline: none;
  cursor: pointer;
  -webkit-box-shadow: none;
  box-shadow: none;
  border-radius: 50px;
  color: #888888;
  position: relative;
  z-index: 1;
}

.mktInputTextArea {
  border: 1px solid #ebebeb !important;
  padding: 10px 30px 3px 20px;
  width: 100%;
  font-family: "Tenon", arial;
  box-shadow: 0 0 0 50px transparent inset;
  -webkit-box-shadow: 0 0 0 50px transparent inset;
  color: #888888;
  border: 1px solid transparent;
  background-color: #ffffff;
  font-size: 16px;
  margin: 0;
  outline: none;
  cursor: pointer;
  -webkit-box-shadow: none;
  box-shadow: none;
  border-radius: 20px;
  color: #888888;
  position: relative;
  z-index: 1;
  height: 100px;

}

.mktFormRowSingle {
  width: 100%;
  padding-left: 50px;
  padding-right: 50px;
  margin-top: 20px;
  clear: both;
  box-sizing: border-box;
}

.mktButtonRow {
  position: relative;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -o-transform: translateX(-50%);
  transform: translateX(-50%);
  display: inline-block;
  text-align: left;
  margin: 0;
  padding: 0;
}

.mktButtonSpan {
  margin-left: 0 !important;
  display: inline-block;
  color: #ffffff;
  font-size: 18px;
  font-weight: normal;
  line-height: 1.67;
  padding-top: 1rem;
}

.mktButton {
  font-weight: 700;
  margin-top: 10px;
  margin-bottom: 40px;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  position: relative;
  border: 2px solid;
  border-radius: 100vmax;
  text-decoration: none;
  cursor: pointer;
  background-image: none;
  overflow: hidden;
  line-height: 1.62;
  padding: 0.4rem 1.7rem 0.3rem;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  white-space: nowrap;
  background-color: #ffffff;
  border-color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.7px;
  text-align: center;
  color: #13541d;
  text-transform: uppercase;
  white-space: nowrap;
  text-shadow: none;
  width: auto;
  font-family: "Tenon", Arial;
  box-shadow: none;
  -webkit-box-shadow: none;
}

.mktButton:hover {
  color: #ffffff;
  background-color: #1964ee;
  border-color: #1964ee;
  text-decoration: none;
}

.imgWrapper {
  visibility: visible;
  animation-delay: 0.2s;
  animation-name: fadeInRight;
  height: 100%;
  width: 100%;
}

.mktImg {
  width: 100%;
  height: 100%;
  max-height: 1000px;
  position: relative;
  margin: 0;
  padding: 0;
  -o-object-fit: cover;
  font-family: "object-fit:cover;object-position:center";
  object-fit: cover;
  -o-object-position: center;
  object-position: center;
  width: 100%;
  max-width: 100%;
  border: 0;
  vertical-align: top;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  overflow-clip-margin: content-box;
  overflow: clip;
  aspect-ratio: auto 645 / 976;
}

.mktP {
  font-family: "Questrial", sans-serif;
  font-size: 19px;
  line-height: 1.56;
  letter-spacing: normal;
  margin-bottom: 16px;
  font-weight: normal;
  color: #ffffff;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  /* padding-left: 65px;
  max-width: 90%; */
  padding: 0 2rem 2rem;
}

.close-button {
  border: none;
  display: inline-block;
  vertical-align: middle;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  background-color: inherit;
  text-align: center;
  cursor: pointer;
  white-space: nowrap;
  font-size: xx-large;
  z-index: 1;
}

/* Media Queries */

/* Small screens: 275px - 480px */
@media screen and (min-width: 275px) and (max-width: 480px) {
  .titleWrapSpan {
    font-size: 20px;
  }
 
  .mktButton {
    font-size: 20px;
    padding: 0.3rem 1.4rem 0.2rem;
  }
}

/* Medium screens: 481px - 767px */
@media screen and (min-width: 481px) and (max-width: 767px) {
  .titleWrapSpan {
    font-size: 22px;
  }
  .mktInputText, .mktInputTextArea {
    font-size: 15px;
    padding: 3px 25px 3px 18px;
    margin-right: 6px;

  }
  .mktButton {
    font-size: 15px;
    padding: 0.35rem 1.5rem 0.25rem;
  }
}

/* Large screens: 768px - 1024px */
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .titleWrapSpan {
    font-size: 24px;
  }
  .mktInputText, .mktInputTextArea {
    font-size: 16px;
    padding: 3px 30px 3px 20px;
    margin-right: 6px;

  }
  .mktButton {
    font-size: 16px;
    padding: 0.4rem 1.7rem 0.3rem;
  }
}

/* Extra large screens: 1025px and up */
@media screen and (min-width: 1025px) {
  .titleWrapSpan {
    font-size: 26px;
  }
  .mktInputText, .mktInputTextArea {
    font-size: 17px;
    padding: 3px 30px 3px 20px;
  }
  .mktButton {
    font-size: 18px;
    padding: 0.4rem 1.7rem 0.3rem;
  }
}



 
</style>