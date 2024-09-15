<script>
	import bannerImage from '$lib/images/HarwoodHousesLogo.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
</script>


<svelte:head>
    <title>About Us | Harwood Houses</title>
    <meta name="description" content="Learn about Harwood Houses, offering sober living residences in Lynn, Salem, and Malden, MA. Discover our commitment to recovery and support.">
</svelte:head>


<section class="banner" data-color="white">
	<div class="container banner-wrapper">
		<picture>
			<source srcset={bannerImage} type="image/webp" />
			<img src={welcome_fallback} alt="Welcome" />
		</picture>
	</div>
	<h1>
		Begin your journey in recovery at the North Shore's best sober living
		residences!
	</h1>
	<a href="/apply" id="pdfButton" class="btn">APPLY NOW!</a>
</section>

<section>
	<div class="container">
		<div class="long-text-span-about">
			Welcome to Harwood Houses, where we offer sober, clean, and affordable
			living environments for individuals seeking a fresh start. With five
			locations in Lynn, Salem, and Malden, Massachusetts, we provide short-
			and long-term residency options in fully furnished homes equipped with
			cable television and WIFI. Our properties are conveniently located near
			public transportation and have off-street parking for your convenience.
			<br />
			<br />
			At Harwood Houses, we take pride in our professionally managed properties
			that promote clean living with a zero-tolerance policy for drugs and alcohol.
			To maintain a 100% sober environment, we conduct supervised twice weekly mandatory
			drug testing to ensure that all residents are committed to sobriety. Lab
			results are available the same day as the sample is provided, and we will
			email them to probation, DCF, or concerned family members at your direction
			at no cost.
			<br />
			<br />
			Additionally, we require participation in AA/NA meetings and household responsibilities
			such as chores and meetings. We believe in personal responsibility and encourage
			our residents to gainful employment, fostering a sense of purpose and financial
			independence.
			<br />
			<br />
			Our homes are updated and clean, providing a comfortable and welcoming environment
			for your new, clean lifestyle. Our onsite 24/7 management team consists of
			individuals who have been through similar issues and are committed to supporting
			and encouraging our residents through their new journey. Thank you for considering
			Harwood Houses for your fresh start. We are dedicated to providing a safe
			and supportive environment for you to rebuild your life.
		</div>
	</div>
	<hr />
</section>

<section data-color="white">
	<div class="cta-banner container">
		<h2 class="animated-line-heading animate-complete h2">
			Let's move things forward.
		</h2>
		<a href="/apply" id="pdfButton" class="btn">APPLY NOW!</a>
	</div>
</section>
<style>
	@import url("https://fonts.googleapis.com/css2?family=Ewert&family=Questrial&family=Rammetto+One&family=Zen+Tokyo+Zoo&display=swap");

.banner {
  width: 100%;
  background-color: white;
  color: #151515;
  text-align: center;
  display: grid;
  place-items: center;
  padding-bottom: clamp(4rem, 14vw, 4rem);
}

h1 {
  font-family: "Questrial", sans-serif;
  color: #151515;
  font-size: 34px;
  max-width: 1200px;
  display: grid;
  margin-bottom: 2rem;
	margin-top: 0;
}

@media only screen and (max-width: 850px) {
  h1 {
    font-size: 32px;
    margin-top: 2rem;
    margin-bottom: 0;
  }
}

.btn {
  font-family: "Questrial", sans-serif;
  text-decoration: none;
  font-weight: 500;
  letter-spacing: 0.03em;
  transition: background-color 0.66s ease-in-out, color 0.66s ease-in-out;
  background-color: #1c792e;
  color: #fff;
  border-radius: 80px;
  padding: 18px 52px;
  margin-top: 2rem;
  max-height: 52px;
  min-width: 200px;
  cursor: pointer;
  mix-blend-mode: normal;
  font-size: 30px;
}

.btn:hover {
  font-family: "Questrial", sans-serif;
  text-decoration: none;
  font-weight: 500;
  letter-spacing: 0.03em;
  transition: background-color 0.66s ease-in-out, color 0.66s ease-in-out;
  background-color: #2563d7 !important;
  color: #f5f5f5;
  border-radius: 80px;
  padding: 18px 52px;
  max-height: 52px;
  cursor: pointer;
}


@media only screen and (max-width: 850px) {
  .btn {
    font-size: 24px;
    display: grid;
    place-items: center;
  }
}



.btn a {
  text-decoration: none;
  color: #f5f5f5;
}

.img {
  display: grid;
  place-items: center;
  padding-top: clamp(6rem, 14vw, 4rem);
  padding-bottom: clamp(4rem, 14vw, 4rem);
  padding-left: 5rem;
  padding-right: 5rem;
  background-color: white;
}

@media only screen and (max-width: 850px) {
  .img {
    padding-top: clamp(4rem, 14vw, 4rem);
    padding-bottom: clamp(2rem, 8vw, 4rem);
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

.img-item {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.logo-img {
  margin-top: 5%;
  width: 100%;
  height: auto;
  margin-top: 4rem;
}

.title-wrap {
  display: grid;
  place-items: center;
}

.banner-button {
  margin-top: 2rem;
}

	.long-text-span-about {
  font-family: "Questrial", sans-serif;
  opacity: 1;
  transform-origin: 527.844px 50.0703px;
  transform: translate(0px, 0%);
  color: #151515;
  font-size: 24px;
  padding-bottom: 6rem;
	line-height: 1.2;
}
.cta-banner {
  display: grid;
  place-items: center;
  text-align: center;
  margin-bottom: 6rem;
}

.cta-button {
  font-family: "Questrial", sans-serif;
  text-decoration: none;
  font-weight: 500;
  letter-spacing: 0.03em;
  transition: background-color 0.66s ease-in-out, color 0.66s ease-in-out;
  background-color: #1c792e;
  color: #fff;
  border-radius: 80px;
  border: 2px solid;
  padding: 18px 52px;
  margin-top: 2rem;
  max-height: 46px;
  min-width: none;
  cursor: pointer;
  margin-bottom: 60px;
  font-size: 30px;
}

.cta-button:hover {
  font-family: "Questrial", sans-serif;
  text-decoration: none;
  font-weight: 500;
  letter-spacing: 0.03em;
  transition: background-color 0.66s ease-in-out, color 0.66s ease-in-out;
  background-color: #3a3b3c !important;
  color: #f5f5f5;
  border-radius: 80px;
  padding: 18px 52px;
  max-height: 46px;
  cursor: pointer;
}

.cta-button a {
  text-decoration: none;
  color: #f5f5f5;
}
.h2 {
	font-family: "Questrial", sans-serif;
    color: #151515;
    font-size: 52px;
  }

@media only screen and (max-width: 420px) {
  .h2 {
    font-size: 24px;
    text-align: center;
  }
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


  hr {
  margin-top: 6rem;
  margin-bottom: 6rem;
  
} 

@media (max-width: 768px) {
  hr {
    margin-top: 2rem;
  margin-bottom: 2rem;
  }
} 

.animated-line-heading {
  font-family: "Questrial", sans-serif;
    color: #151515;
    font-size: 52px;
    max-width: 90%;
}


</style>