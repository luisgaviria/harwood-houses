<script>
	import bannerImage from '$lib/images/HarwoodHousesLogo.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';

  export let data; // we get it straight from +page.server.js
  console.log(data);
</script>


<svelte:head>
    <title>{data.titleOfSiteTab}</title>
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
    {data.title}
	</h1>
	<a href="/apply" id="pdfButton" class="btn">{data.global.buttonToApply}</a>
</section>

<section>
	<div class="container">
		<div class="long-text-span-about">
    {#each data.blocks as block, index}
      {block.body}
      {#if data.blocks.length - 1 > index }
        <br/>
        <br/>
      {/if}
    {/each}
	</div>
  <hr/>
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
