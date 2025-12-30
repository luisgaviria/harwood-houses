<script>
  import bannerImage from "$lib/images/HarwoodHousesLogo.webp";
  import welcome_fallback from "$lib/images/svelte-welcome.png";

  // Configuration for your specific business details
  const businessName = "Harwood Houses";
  const contactEmail = "contact@harwoodhouses.com"; // Replace with your actual email
  const lastUpdated = "October 24, 2023"; 
</script>

<svelte:head>
  <title>Privacy Policy | {businessName}</title>
  <meta name="description" content="Privacy Policy for {businessName}. Learn how we handle your contact information." />
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
        We only collect information that you voluntarily provide to us through our contact forms or email inquiries. This typically includes your <strong>name, email address, phone number</strong>, and any specific details you include in your message.
      </p>

      <h2>2. How We Use Your Information</h2>
      <p>
        The information you provide is used strictly to respond to your inquiries regarding our sober living residences and support services. We do not use your contact information for marketing newsletters or automated promotional campaigns unless you explicitly opt-in to such services at a later date.
      </p>

      <h2>3. Data Sharing & Third Parties</h2>
      <p>
        We value your privacy. <strong>We do not sell, rent, or share your personal information</strong> with third-party marketers. Data is only shared with internal staff members who need the information to assist with your housing inquiry or application.
      </p>

      <h2>4. Data Security</h2>
      <p>
        We implement industry-standard security protocols to ensure that the data transmitted from our website to our backend servers is encrypted and secure. However, please note that no method of transmission over the internet is 100% secure.
      </p>

      <h2>5. Your Rights & Choice</h2>
      <p>
        You have the right to request access to the information we have on file for you, or to request that we delete your contact information from our records. To exercise these rights, please contact us at 
        <a href="mailto:{contactEmail}" class="privacy-link">{contactEmail}</a>.
      </p>

      <h2>6. Consent</h2>
      <p>
        By using our website and submitting our contact forms, you hereby consent to our Privacy Policy and agree to its terms.
      </p>
    </div>
  </div>
</section>

<style>
  /* Reuse your existing Questrial font and basic layout styles */
  .banner {
    width: 100%;
    background-color: white;
    color: #151515;
    text-align: center;
    display: grid;
    place-items: center;
    padding-bottom: 2rem;
  }

  .banner-wrapper {
    display: block;
    position: relative;
    width: 100%;
    height: 0;
    padding: 0 0 calc(100% * 495 / 2048) 0;
  }

  .banner-wrapper img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    display: block;
    object-fit: cover;
  }

  h1 {
    font-family: "Questrial", sans-serif;
    color: #151515;
    font-size: 48px;
    margin-top: 2rem;
  }

  h2 {
    font-family: "Questrial", sans-serif;
    font-size: 28px;
    margin-top: 2.5rem;
    color: #1c792e; /* Using your brand green for headers */
  }

  .long-text-span-privacy {
    font-family: "Questrial", sans-serif;
    color: #151515;
    font-size: 20px;
    padding-bottom: 6rem;
    line-height: 1.6;
    max-width: 800px;
    margin: 0 auto;
  }

  .last-updated {
    font-style: italic;
    color: #666;
    margin-bottom: 2rem;
  }

  a {
    color: blue;
  }

  hr {
    margin-top: 4rem;
    margin-bottom: 4rem;
  }

  @media (max-width: 768px) {
    h1 { font-size: 32px; }
    .long-text-span-privacy { font-size: 18px; }
  }
</style>