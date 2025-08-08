<script>
  import axios from "axios";

  let formData = {
    smokeFreePolicyInitial: "",
    programFeeInitial: "",
    releaseOfInfoInitial: "",
    personal: {
      name: { first: "", last: "" },
      address: {
        line1: "",
        line2: "",
        city: "",
        state: "",
        zip: "",
        country: "United States",
      },
      lengthAtAddress: "",
      birthDate: "",
      isUSCitizen: "",
      phone: "",
      isOkToCall: "",
      isOkToLeaveMessage: "",
    },
    relationship: {
      maritalStatus: "Select One",
      isRomantic: "",
      childrenTotal: "",
      childrenWithYou: "",
      isPregnant: "",
      dueDate: "",
    },
    history: {
      livedInShelter: "",
      where: "",
      referredBy: "",
      dates: "",
    },
    medications: "",
    additionalInfo: "",
  };

  const onSubmit = async () => {
    // Send all formData properties as flat keys to /api/mail
    const submissionData = new FormData();

    // Policy Agreements
    submissionData.append(
      "smokeFreePolicyInitial",
      formData.smokeFreePolicyInitial
    );
    submissionData.append("programFeeInitial", formData.programFeeInitial);
    submissionData.append(
      "releaseOfInfoInitial",
      formData.releaseOfInfoInitial
    );

    // Personal
    submissionData.append("firstName", formData.personal.name.first);
    submissionData.append("lastName", formData.personal.name.last);
    submissionData.append("addressLine1", formData.personal.address.line1);
    submissionData.append("addressLine2", formData.personal.address.line2);
    submissionData.append("city", formData.personal.address.city);
    submissionData.append("state", formData.personal.address.state);
    submissionData.append("zip", formData.personal.address.zip);
    submissionData.append("country", formData.personal.address.country);
    submissionData.append("lengthAtAddress", formData.personal.lengthAtAddress);
    submissionData.append("birthDate", formData.personal.birthDate);
    submissionData.append("isUSCitizen", formData.personal.isUSCitizen);
    submissionData.append("phone", formData.personal.phone);
    submissionData.append("isOkToCall", formData.personal.isOkToCall);
    submissionData.append(
      "isOkToLeaveMessage",
      formData.personal.isOkToLeaveMessage
    );

    // Relationship
    submissionData.append("maritalStatus", formData.relationship.maritalStatus);
    submissionData.append("isRomantic", formData.relationship.isRomantic);
    submissionData.append("childrenTotal", formData.relationship.childrenTotal);
    submissionData.append(
      "childrenWithYou",
      formData.relationship.childrenWithYou
    );
    submissionData.append("isPregnant", formData.relationship.isPregnant);
    submissionData.append("dueDate", formData.relationship.dueDate);

    // History
    submissionData.append("livedInShelter", formData.history.livedInShelter);
    submissionData.append("where", formData.history.where);
    submissionData.append("referredBy", formData.history.referredBy);
    submissionData.append("dates", formData.history.dates);

    // Medications & Additional Info
    submissionData.append("medications", formData.medications);
    submissionData.append("additionalInfo", formData.additionalInfo);

    try {
      const res = await fetch("/api/mail", {
        method: "POST",
        body: submissionData,
      });
      const result = await res.json();
      alert(result.message);
    } catch (error) {
      alert("There was an error submitting your application.");
      console.error(error);
    }
  };

  export let data; // we get it straight from +page.server.js
</script>

<div class="container">
  <div class="columnLeft">
    <h2 class="columnLeftH2">{data.title}</h2>
    <p class="mktP">
    {data.subTitle}
    </p>
    <div class="form-container">
      <form on:submit|preventDefault={onSubmit}>
        <fieldset>
          <legend>{data.TwoInputsBlock.Title}</legend>
          <div class="form-group">
            <label for="smoke-policy"
              >I read and agree to the smoke-free facility policy. <span
                class="required">*</span
              ></label
            >
            <input
              id="smoke-policy"
              type="text"
              bind:value={formData.smokeFreePolicyInitial}
              placeholder="Initial Here"
              maxlength="4"
              required
            />
          </div>
          <div class="form-group">
            <label for="fee-policy"
              >I am aware of the program fee. <span class="required">*</span
              ></label
            >
            <input
              id="fee-policy"
              type="text"
              bind:value={formData.programFeeInitial}
              placeholder="Initial Here"
              maxlength="4"
              required
            />
          </div>
        </fieldset>

        <fieldset>
          <legend>Personal Information</legend>
          <div class="form-row">
            <div class="form-group">
              <label for="first-name">First Name</label>
              <input
                id="first-name"
                type="text"
                bind:value={formData.personal.name.first}
                placeholder="Jane"
              />
            </div>
            <div class="form-group">
              <label for="last-name">Last Name</label>
              <input
                id="last-name"
                type="text"
                bind:value={formData.personal.name.last}
                placeholder="Doe"
              />
            </div>
          </div>
          <div class="form-group">
            <label for="address1">Address Line 1</label>
            <input
              id="address1"
              type="text"
              bind:value={formData.personal.address.line1}
              placeholder="123 Main St"
            />
          </div>
          <div class="form-group">
            <label for="address2">Address Line 2</label>
            <input
              id="address2"
              type="text"
              bind:value={formData.personal.address.line2}
              placeholder="Apartment, studio, or floor"
            />
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="city">City</label>
              <input
                id="city"
                type="text"
                bind:value={formData.personal.address.city}
                placeholder="Anytown"
              />
            </div>
            <div class="form-group">
              <label for="state">State / Province</label>
              <input
                id="state"
                type="text"
                bind:value={formData.personal.address.state}
                placeholder="CA"
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="zip">Zip / Postal Code</label>
              <input
                id="zip"
                type="text"
                bind:value={formData.personal.address.zip}
                placeholder="90210"
              />
            </div>
            <div class="form-group">
              <label for="country">Country</label>
              <select
                id="country"
                bind:value={formData.personal.address.country}
              >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
                <option>United Kingdom</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label for="length-address">Length of time at current address</label
            >
            <input
              id="length-address"
              type="text"
              bind:value={formData.personal.lengthAtAddress}
              placeholder="e.g., 2 years"
            />
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="birth-date">Birth Date</label>
              <input
                id="birth-date"
                type="date"
                bind:value={formData.personal.birthDate}
              />
            </div>
            <div class="form-group">
              <label for="phone">Phone Number</label>
              <input
                id="phone"
                type="tel"
                bind:value={formData.personal.phone}
                placeholder="(555) 123-4567"
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group radio-group">
              <p>Are you a US Citizen?</p>
              <label
                ><input
                  type="radio"
                  bind:group={formData.personal.isUSCitizen}
                  value="Yes"
                /> Yes</label
              >
              <label
                ><input
                  type="radio"
                  bind:group={formData.personal.isUSCitizen}
                  value="No"
                /> No</label
              >
            </div>
            <div class="form-group radio-group">
              <p>Is it OK to call?</p>
              <label
                ><input
                  type="radio"
                  bind:group={formData.personal.isOkToCall}
                  value="Yes"
                /> Yes</label
              >
              <label
                ><input
                  type="radio"
                  bind:group={formData.personal.isOkToCall}
                  value="No"
                /> No</label
              >
            </div>
          </div>
          {#if formData.personal.isOkToCall === "Yes"}
            <div class="form-row">
              <div
                class="form-group radio-group centered-radio"
                style="margin: 0 auto; max-width: 400px; background: rgba(255,255,255,0.12); box-shadow: 0 2px 12px rgba(0,0,0,0.10); border: 1px solid #e0e0e0;"
              >
                <p style="color:#fffff; font-weight:bold; text-align:center;">
                  Is it OK to leave a message?
                </p>
                <div style="display:flex; justify-content:center; gap:2rem;">
                  <label style="margin:0; color:#fffff;"
                    ><input
                      type="radio"
                      bind:group={formData.personal.isOkToLeaveMessage}
                      value="Yes"
                    /> Yes</label
                  >
                  <label style="margin:0; color:#fffff;"
                    ><input
                      type="radio"
                      bind:group={formData.personal.isOkToLeaveMessage}
                      value="No"
                    /> No</label
                  >
                </div>
              </div>
            </div>
          {/if}
        </fieldset>

        <fieldset>
          <legend>Relationship & Family</legend>
          <div class="form-group">
            <label for="marital-status">Marital Status</label>
            <select
              id="marital-status"
              bind:value={formData.relationship.maritalStatus}
            >
              <option>Select One</option><option>Single</option><option
                >Married</option
              ><option>Separated</option><option>Divorced</option><option
                >Widowed</option
              >
            </select>
          </div>
          <div class="form-row">
            <div class="form-group radio-group">
              <p>In a romantic relationship?</p>
              <label
                ><input
                  type="radio"
                  bind:group={formData.relationship.isRomantic}
                  value="Yes"
                /> Yes</label
              >
              <label
                ><input
                  type="radio"
                  bind:group={formData.relationship.isRomantic}
                  value="No"
                /> No</label
              >
            </div>
            <div class="form-group radio-group">
              <p>Are you currently pregnant?</p>
              <label
                ><input
                  type="radio"
                  bind:group={formData.relationship.isPregnant}
                  value="Yes"
                /> Yes</label
              >
              <label
                ><input
                  type="radio"
                  bind:group={formData.relationship.isPregnant}
                  value="No"
                /> No</label
              >
            </div>
          </div>
          {#if formData.relationship.isPregnant === "Yes"}
            <div class="form-group">
              <label for="due-date">Anticipated Due Date</label>
              <input
                id="due-date"
                type="date"
                bind:value={formData.relationship.dueDate}
              />
            </div>
          {/if}
          <div class="form-row">
            <div class="form-group">
              <label for="children-total">Total number of children</label>
              <input
                id="children-total"
                type="text"
                bind:value={formData.relationship.childrenTotal}
                placeholder="e.g., 3"
              />
            </div>
            <div class="form-group">
              <label for="children-with-you">Children living with you</label>
              <input
                id="children-with-you"
                type="text"
                bind:value={formData.relationship.childrenWithYou}
                placeholder="e.g., 1"
              />
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>History</legend>
          <div class="form-group radio-group centered-radio">
            <p>Ever lived in a shelter/transitional housing?</p>
            <label
              ><input
                type="radio"
                bind:group={formData.history.livedInShelter}
                value="Yes"
              /> Yes</label
            >
            <label
              ><input
                type="radio"
                bind:group={formData.history.livedInShelter}
                value="No"
              /> No</label
            >
          </div>
          {#if formData.history.livedInShelter === "Yes"}
            <div class="form-group">
              <label for="where-shelter">If so, where?</label>
              <input
                id="where-shelter"
                type="text"
                bind:value={formData.history.where}
              />
            </div>
            <div class="form-row">
              <div class="form-group">
                <label for="referred-by">Who referred you?</label>
                <input
                  id="referred-by"
                  type="text"
                  bind:value={formData.history.referredBy}
                />
              </div>
              <div class="form-group">
                <label for="dates-stay">Date of stay</label>
                <input
                  id="dates-stay"
                  type="date"
                  bind:value={formData.history.dates}
                />
              </div>
            </div>
          {/if}
        </fieldset>

        <fieldset>
          <legend>Medications & Other Information</legend>
          <div class="form-group">
            <label for="meds"
              >List any prescription and non-prescription medication you take
              with dosage and frequency.</label
            >
            <textarea
              id="meds"
              rows="4"
              bind:value={formData.medications}
              placeholder="e.g., Ibuprofen, 200mg, as needed for pain..."
            ></textarea>
          </div>
          <div class="form-group">
            <label for="roi-policy"
              >I will sign a release of information for all providers. <span
                class="required">*</span
              ></label
            >
            <input
              id="roi-policy"
              type="text"
              bind:value={formData.releaseOfInfoInitial}
              placeholder="Initial Here"
              maxlength="4"
              required
            />
          </div>
          <div class="form-group">
            <label for="additional-info"
              >Is there anything else you'd like us to know?</label
            >
            <textarea
              id="additional-info"
              rows="4"
              bind:value={formData.additionalInfo}
            ></textarea>
          </div>
        </fieldset>

        <div class="submit-container">
          <button type="submit" class="mktButton">Submit Application</button>
        </div>
      </form>
    </div>
  </div>
</div>

<style>
  .container {
    display: grid;
    place-items: center;
    padding: 3rem 1rem;
    font-family: "Questrial", sans-serif;
  }

  .columnLeft {
    width: 100%;
    max-width: 800px;
    border-radius: 20px;
    background-image: linear-gradient(120deg, #1c792e, #13541d);
    padding: 2rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }

  .columnLeftH2,
  .mktP {
    text-align: center;
    color: #ffffff;
  }

  .columnLeftH2 {
    font-size: 2rem;
    line-height: 1.2;
    margin-bottom: 0.5rem;
  }

  .mktP {
    font-size: 1.1rem;
    max-width: 600px;
    margin: 0 auto 2rem auto;
    opacity: 0.9;
  }

  .form-container {
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 15px;
    padding: 2rem;
  }

  fieldset {
    border: none;
    padding: 0;
    margin: 0 0 2rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding-bottom: 2rem;
  }
  fieldset:last-of-type {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  legend {
    font-size: 1.5rem;
    font-weight: bold;
    color: #ffffff;
    margin-bottom: 1.5rem;
    width: 100%;
    text-align: center;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.25rem;
  }

  .form-row {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }

  @media (min-width: 768px) {
    .form-row {
      grid-template-columns: 1fr 1fr;
    }
  }

  label,
  .radio-group p {
    color: #f0f0f0;
    margin-bottom: 0.5rem;
    font-size: 1rem;
  }

  .required {
    color: #ffcdd2;
    font-weight: bold;
  }

  input[type="text"],
  input[type="tel"],
  input[type="date"],
  select,
  textarea {
    width: 100%;
    box-sizing: border-box;
    padding: 0.75rem 1rem;
    background-color: rgba(255, 255, 255, 0.9);
    border: 1px solid transparent;
    border-radius: 8px;
    font-size: 1rem;
    font-family: "Questrial", sans-serif;
    color: #333;
    transition:
      border-color 0.3s,
      box-shadow 0.3s;
    margin: 0;
    appearance: none;
  }

  /* Style the calendar icon for date inputs */
  input[type="date"]::-webkit-calendar-picker-indicator {
    filter: invert(0.4) sepia(1) saturate(5) hue-rotate(90deg);
    cursor: pointer;
    height: 1.25em;
    width: 1.25em;
  }
  input[type="date"]::-webkit-input-placeholder {
    color: #888;
  }
  input[type="date"]::-moz-placeholder {
    color: #888;
  }
  input[type="date"]:-ms-input-placeholder {
    color: #888;
  }
  input[type="date"]::placeholder {
    color: #888;
  }

  /* Remove default arrow for date input in Firefox */
  input[type="date"]::-webkit-inner-spin-button,
  input[type="date"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Make all form groups consistent */
  .form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.25rem;
    width: 100%;
  }

  .form-row {
    display: flex;
    flex-wrap: wrap;
    gap: 1.25rem;
  }

  .form-row .form-group {
    flex: 1 1 0;
    min-width: 180px;
    margin-bottom: 0;
  }

  @media (max-width: 600px) {
    .form-row {
      flex-direction: column;
      gap: 0.5rem;
    }
    .form-row .form-group {
      min-width: 0;
    }
  }

  input:focus,
  select:focus,
  textarea:focus {
    outline: none;
    border-color: #00a86b;
    box-shadow: 0 0 0 3px rgba(0, 168, 107, 0.3);
  }

  textarea {
    resize: vertical;
    min-height: 80px;
  }

  .radio-group {
    background-color: rgba(0, 0, 0, 0.15);
    padding: 1rem;
    border-radius: 8px;
    margin-bottom: 1.25rem;
    box-sizing: border-box;
    width: 100%;
  }
  .radio-group p {
    margin: 0 0 0.75rem 0;
    text-align: center;
    font-weight: bold;
    color: #f0f0f0;
  }
  .radio-group label {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin: 0 1.5rem 0 0;
    color: #ffffff;
    font-weight: 500;
  }
  .radio-group label:last-child {
    margin-right: 0;
  }
  .radio-group div {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }
  .centered-radio {
    margin-left: auto;
    margin-right: auto;
    max-width: 400px;
  }
  input[type="radio"] {
    margin-right: 0.5rem;
    accent-color: #ffffff;
    width: 1.2em;
    height: 1.2em;
  }
  .centered-radio {
    grid-column: 1 / -1;
  }

  .submit-container {
    text-align: center;
    margin-top: 2rem;
  }
  .mktButton {
    font-weight: bold;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    border: 2px solid #ffffff;
    border-radius: 50px;
    text-decoration: none;
    cursor: pointer;
    line-height: 1.62;
    padding: 0.8rem 2.5rem;
    background-color: #ffffff;
    font-size: 1.1rem;
    letter-spacing: 0.7px;
    text-align: center;
    color: #13541d;
    text-transform: uppercase;
  }

  .mktButton:hover {
    background-color: transparent;
    color: #ffffff;
  }
</style>
