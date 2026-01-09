<script>
  import bannerImage from "$lib/images/HarwoodHousesLogo.webp";
  import welcome_fallback from "$lib/images/svelte-welcome.png";

  const businessName = "Harwood Houses";
  const contactEmail = "contact@harwoodhouses.com";
  const lastUpdated = "January 9, 2026"; 
</script>

<svelte:head>
  <title>Privacy Policy | {businessName}</title>
  <meta name="description" content="Privacy Policy for {businessName}. Learn how we handle your contact information and SMS communications." />
</svelte:head>

<section class="banner" data-color="white">
  <div class="container banner-wrapper">
    <picture>
      <source srcset={bannerImage} type="image/webp" />
      <img src={welcome_fallback} alt="Welcome" />
    </picture>
  </div>
  <h1>Privacy Policy</h1>
</section>

<section>
  <div class="container">
    <div class="long-text-span-privacy">
      <p class="last-updated">Last Updated: {lastUpdated}</p>

      <h2>1. Information We Collect</h2>
      <p>
        We collect information you voluntarily provide via our contact forms, applications, or email. This includes your <strong>name, email address, and phone number</strong>. 
      </p>

      <h2>2. SMS Program Description & Consent</h2>
      <p>
        When you provide your phone number via our contact form, you are providing express written consent to receive SMS messages from {businessName} regarding your housing inquiry, application status, or resident support. 
      </p>
      <ul style="margin-top: 1rem; list-style-type: disc; padding-left: 1.5rem;">
        <li><strong>Opt-In:</strong> By submitting a contact form, you agree to receive text messages.</li>
        <li><strong>Opt-Out:</strong> You can cancel the SMS service at any time. Just text "<strong>STOP</strong>" to our number. After you send "STOP", we will send you an SMS to confirm that you have been unsubscribed.</li>
        <li><strong>Help:</strong> If you are experiencing issues with the messaging program, you can reply with the keyword "<strong>HELP</strong>" for more assistance.</li>
        <li><strong>Frequency:</strong> Message frequency varies based on your interaction with our staff.</li>
        <li><strong>Rates:</strong> Message and data rates may apply for any messages sent to you from us and to us from you.</li>
      </ul>

      <h2>3. Third-Party Sharing Disclosure</h2>
      <p>
        <strong>No mobile information will be shared with third parties/affiliates for marketing/promotional purposes.</strong> All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties. 
      </p>
      <p>
        We do not sell, rent, or lease our contact lists to third parties.
      </p>

      <h2>4. How We Use Your Information</h2>
      <p>
        Information is used strictly to respond to inquiries regarding our sober living residences. We do not use your contact information for automated marketing newsletters without explicit secondary consent.
      </p>

      <h2>5. Data Security</h2>
      <p>
        We implement industry-standard security protocols to ensure your data is encrypted. However, no method of transmission over the internet or via mobile network is 100% secure.
      </p>

      <h2>6. Your Rights</h2>
      <p>
        To request access to or deletion of your information, please contact us at 
        <a href="mailto:{contactEmail}" class="privacy-link" style="color: #1c792e; text-decoration: underline;">{contactEmail}</a>.
      </p>
    </div>
  </div>
</section>

<style>
  .banner { width: 100%; background-color: white; color: #151515; text-align: center; display: grid; place-items: center; padding-bottom: 2rem; }
  .banner-wrapper { display: block; position: relative; width: 100%; height: 0; padding: 0 0 calc(100% * 495 / 2048) 0; }
  .banner-wrapper img { position: absolute; width: 100%; height: 100%; top: 0; display: block; object-fit: cover; }
  h1 { font-family: "Questrial", sans-serif; color: #151515; font-size: 48px; margin-top: 2rem; }
  h2 { font-family: "Questrial", sans-serif; font-size: 28px; margin-top: 2.5rem; color: #1c792e; }
  .long-text-span-privacy { font-family: "Questrial", sans-serif; color: #151515; font-size: 20px; padding-bottom: 6rem; line-height: 1.6; max-width: 800px; margin: 0 auto; }
  .last-updated { font-style: italic; color: #666; margin-bottom: 2rem; }
  a { color: blue; }
  @media (max-width: 768px) { h1 { font-size: 32px; } .long-text-span-privacy { font-size: 18px; } }
</style>