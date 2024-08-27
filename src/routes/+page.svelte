<script>
	import Counter from './Counter.svelte';
	import bannerImage from '$lib/images/HarwoodHousesLogo.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
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
<section data-color="white">
	<div class="container">
		<div class="long-text-title">
			<span class="long-text-span">
				The HarwoodHouses offer those in early recovery an exceptional
				opportunity to begin rebuilding their life in modern, clean, well
				equipped sober homes in Lynn, Malden and Salem.
			</span>
			<!-- <span class="long-text-span">
				All houses have an on-site washer and dryer, free wifi, and all
				rooms are fully furnished. Our success rate of residents who have
				remained clean and sober and have moved on to the next phase of
				their life is over 72%! This industry leading statistic shows that
				the HarwoodHouses are your best bet when it comes to sober living
				solutions.</span
			> -->
			<br />
			<br />
			<!-- <span class="long-text-span">
				We offer both short and long term residency in a supportive, family
				oriented sober atmosphere. All houses are close to public
				transportation and have off street parking available. With a drama
				free, mature resident base and an on site manager who provides
				support and recovery options for all the residents, the Harwood
				Houses are your best bet if you're looking to get your life back
				together!</span
			> -->
		</div>
	</div>
</section>


<section class="three-column-cards" data-color="white">
	<div class="container">
		<hr />
		<div class="three-column-grid">
      <div class="item">
        <h2>Clean Living</h2>
        <p>Zero Tolerance for Drugs and Alcohol</p>
        <p>Twice weekly mandatory drug testing to maintain a 100% sober environment</p>
        <div class="cta-text">
          <!-- <a href="javascript:" 
					on:click={downloadPdf} 
					style="cursor: pointer;">SEE RULES</a> -->
        </div>
      </div>
      <div class="item">
        <div class="text-wrapper">
          <h2>Personal Responsibility</h2>
          <p>AA/NA meetings required</p>
          <p>Household participation through chores and meetings</p>
        </div>
      </div>
      <div class="item">
        <h2>New Environment</h2>
        <p>All homes are updated and clean, worthy of your new, clean lifestyle</p>
        <p>Onsite, 24/7 management by people who have been through similar issues and are committed to your new life</p>
      </div>
    </div>
		<hr id="properties" />
	</div>
</section>

<style>


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
  background-color: #3a3b3c !important;
  color: #f5f5f5;
  border-radius: 80px;
  padding: 18px 52px;
  max-height: 52px;
  cursor: pointer;
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

  .long-text-title {
  margin-left: 10%;
  max-width: 1000px;

  margin: auto;
}

	.long-text-span {
  min-width: 600px;
  font-family: "Questrial", sans-serif;
  opacity: 1;
  transform-origin: 527.844px 50.0703px;
  transform: translate(0px, 0%);
  color: #151515;
  font-size: 24px;
}
@media only screen and (max-width: 850px) {
  .long-text-span {
    font-size: 18px;
  }
}


.three-column-cards {
  width: 100%;
}

.three-column-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 768px) {
  /*breakpoint*/
  .three-column-grid {
    grid-template-columns: none;
  }
}

hr {
  margin-top: 4rem;
  margin-bottom: 4rem;
  
} 

/* @media (max-width: 768px) {
  hr {
    margin-inline: 0 !important;
  }
}  */

li {
  list-style: none;
}

.cta-text {
  font-family: "Questrial", sans-serif;
  font-weight: 600;
  margin-top: 1rem;
}

.cta-text a {
  color: #1c792e;
  font-weight: bolder;
}

p {
  margin-top: 10px;
  margin-bottom: 0;
  font-family: "Questrial", sans-serif;
  opacity: 1;
  transform-origin: 527.844px 50.0703px;
  transform: translate(0px, 0%);
  color: #151515;
  font-size: 24px;
}

@media only screen and (max-width: 850px) {
  p {
    font-size: 20px;
  }
}


.item h2 {
    font-family: "Questrial", sans-serif;
    color: #151515;
    font-size: 52px;

}


</style>
