<script>
	import bannerImage from '$lib/images/HarwoodHousesLogo.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
  import Modal from "../components/Modal.svelte";
  import { Splide, SplideSlide } from '@splidejs/svelte-splide';
  import '@splidejs/svelte-splide/css';


  const pdfUrl = '/files/HouseRules.pdf';

  let showModal = {
    lewis: false,
    vernon: false,
    hovey: false,
    mapplewood: false,
    hanover: false,
    harwood: false,
    breed: false
  }

  const onClickImg = (city) =>{
    showModal = {...showModal, [city]: !showModal.city };
  };


</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Modal bind:showModal={showModal.lewis}>
  <Splide aria-label="Carousel Lewis">
    <SplideSlide>
      <img src="/images/LEWIS-7.webp"  alt="Image 1"/>
    </SplideSlide>
    <SplideSlide>
      <img src="/images/LEWIS-8.webp" alt="Image 2"/>
    </SplideSlide>
    <SplideSlide>
      <img src="/images/LEWIS-9.webp"  alt="Image 3"/>
    </SplideSlide>
    <SplideSlide>
      <img src="/images/LEWIS-10.webp"  alt="Image 4"/>
    </SplideSlide>
    <SplideSlide>
      <img src="/images/LEWIS-11.webp"  alt="Image 5"/>
    </SplideSlide>
    <SplideSlide>
      <img src="/images/LEWIS-12.webp" alt="Image 6"/>
    </SplideSlide>
    <SplideSlide>
      <img src="/images/LEWIS-13.jpg" alt="Image 7"/>
    </SplideSlide>
  </Splide> 
</Modal>

<Modal bind:showModal={showModal.vernon}>
  <img class="single-overlay" src="/images/12 Mt. Vernon St, Salem.webp" >
</Modal>

<Modal bind:showModal={showModal.hovey}>
  <img class="single-overlay" src="/images/16 Hovey Terrace, Lynn.webp"/>
</Modal>

<Modal bind:showModal={showModal.mapplewood}>
  <img class="single-overlay" src="/images/18 Maplewood St, Malden.webp"/>
</Modal>

<Modal bind:showModal={showModal.hanover}>
  <Splide id="image-carousel" aria-label="Carousel Hanover">
    <SplideSlide>
      <img src="/images/HANOVER-1.webp"  alt="Image 1"/>
    </SplideSlide>
    <SplideSlide>
      <img src="/images/HANOVER-2.webp"  alt="Image 2"/>
    </SplideSlide>
    <SplideSlide>
      <img src="/images/HANOVER-3.webp"  alt="Image 3"/>
    </SplideSlide>
    <SplideSlide>
      <img src="/images/HANOVER-4.webp"  alt="Image 4"/>
    </SplideSlide>
    <SplideSlide>
      <img src="/images/HANOVER-5.webp"  alt="Image 5"/>
    </SplideSlide>
    <SplideSlide>
      <img src="/images/HANOVER-6.webp"  alt="Image 6"/>
    </SplideSlide>
    <SplideSlide>
      <img src="/images/HANOVER-7.webp"  alt="Image 7"/>
    </SplideSlide>
    <SplideSlide>
      <img src="/images/HANOVER-8.webp"  alt="Image 8"/>
    </SplideSlide>
    <SplideSlide>
      <img src="/images/HANOVER-9.webp"  alt="Image 9"/>
    </SplideSlide>
    <SplideSlide>
      <img src="/images/HANOVER-10.webp"  alt="Image 10"/>
    </SplideSlide>
    <SplideSlide>
      <img src="/images/HANOVER-11.webp"  alt="Image 11"/>
    </SplideSlide>
    <SplideSlide>
      <img src="/images/HANOVER-12.webp"  alt="Image 12"/>
    </SplideSlide>
    <SplideSlide>
      <img src="/images/HANOVER-13.webp"  alt="Image 13"/>
    </SplideSlide>
    <SplideSlide>
      <img src="/images/HANOVER-14.webp"  alt="Image 14"/>
    </SplideSlide>
  </Splide> 
</Modal>

<Modal bind:showModal={showModal.harwood}>
  <img class="single-overlay" src="/images/20 Harwood St, Lynn.webp"/>
</Modal>

<Modal bind:showModal={showModal.breed}>
  <Splide aria-label="Carousel Breed">
    <SplideSlide>
      <img src="/images/BREED-2.webp"  alt="Image 1"/>
    </SplideSlide>
    <SplideSlide>
      <img src="/images/BREED-3.webp"  alt="Image 2"/>
    </SplideSlide>
    <SplideSlide>
      <img src="/images/BREED-4.webp"  alt="Image 3"/>
    </SplideSlide>
    <SplideSlide>
      <img src="/images/BREED-5.webp"  alt="Image 4"/>
    </SplideSlide>
    <SplideSlide>
      <img src="/images/BREED-6.webp"  alt="Image 5"/>
    </SplideSlide>
    <SplideSlide>
      <img src="/images/BREED-7.webp"  alt="Image 5"/>
    </SplideSlide>
    <SplideSlide>
      <img src="/images/BREED-8.webp"  alt="Image 5"/>
    </SplideSlide>
  </Splide> 
</Modal>


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
<section class="text-section" data-color="white">
	<div class="container">
    <hr />
		<div class="long-text-title">
			<span class="long-text-span span-title">
				The HarwoodHouses offer those in early recovery an exceptional
				opportunity to begin rebuilding their life in modern, clean, well
				equipped sober homes in Lynn, Malden and Salem.
			</span>
      <br />
			<br />
      <br />
			<span class="long-text-span">
				All houses have an on-site washer and dryer, free wifi, and all
				rooms are fully furnished. Our success rate of residents who have
				remained clean and sober and have moved on to the next phase of
				their life is over 72%! This industry leading statistic shows that
				the HarwoodHouses are your best bet when it comes to sober living
				solutions.</span
			>
			<br />
			<br />
			<span class="long-text-span">
				We offer both short and long term residency in a supportive, family
				oriented sober atmosphere. All houses are close to public
				transportation and have off street parking available. With a drama
				free, mature resident base and an on site manager who provides
				support and recovery options for all the residents, the Harwood
				Houses are your best bet if you're looking to get your life back
				together!</span
			>
		</div>
	</div>
</section>


<section class="properties" data-color="white">
  <div class="container">
    <hr />
    <h2 class="our-properties">View Our Properties</h2>
    <div class="properties-grid">
      <div class="item">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <img
          on:click={() => onClickImg("lewis")}
          class="card-img expand"
          src="/images/3 Lewis St, Lynn.webp"
          alt="outside of the house"
        />
        <span class="inner-text">Lewis St, Lynn, MA</span>
      </div>
      <div class="item">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <img
          on:click={() =>
            onClickImg("vernon")}
          class="card-img expand"
          src="/images/12 Mt. Vernon St, Salem.webp"
          alt="outside of the house"
        />
        <span class="inner-text">Mt. Vernon St, Salem, MA</span>
      </div>
      <div class="item">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <img
          on:click={() => onClickImg("hovey")}
          class="card-img expand"
          src="/images/16 Hovey Terrace, Lynn.webp"
          alt="outside of the house"
        />
        <span class="inner-text">Hovey Terrace, Lynn, MA</span>
      </div>
      <div class="item">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <img
          on:click={() =>
            onClickImg("mapplewood")}
          class="card-img expand"
          src="/images/18 Maplewood St, Malden.webp"
          alt="outside of the house"
        />
        <span class="inner-text">Maplewood St, Malden, MA</span>
      </div>
      <div class="item">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <img
          on:click={() => onClickImg("hanover")}
          class="card-img expand"
          src="/images/19 Hanover St, Lynn.webp"
          alt="outside of the house"
        />
        <span class="inner-text expand">Hanover St, Lynn, MA</span>
      </div>
      <div class="item">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <img
          on:click={() => onClickImg("harwood")}
          class="card-img expand"
          src="/images/20 Harwood St, Lynn.webp"
          alt="outside of the house"
        />
        <span class="inner-text expand">Harwood St, Lynn, MA</span>
      </div>
      <div class="item">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <img
          on:click={() => onClickImg("breed")}
          class="card-img expand"
          src="/images/61 Breed St, Lynn.webp"
          alt="outside of the house"
        />
        <span class="inner-text expand">Breed St, Lynn, MA</span>
      </div>
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
          <a href={pdfUrl}  
					style="cursor: pointer;" target="_blank" rel="noopener noreferrer">SEE RULES</a>
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

<section data-color="white">
  <div class="cta-banner container">
    <h2 class="animated-line-heading animate-complete h2">
      Let’s move things forward.
    </h2>
    <!-- <div class="long-text">
      <span class="long-text-span">
        All houses have an on-site washer and dryer, free wifi, and all
        rooms are fully furnished. Our success rate of residents who have
        remained clean and sober and have moved on to the next phase of
        their life is over 72%! This industry leading statistic shows that
        the HarwoodHouses are your best bet when it comes to sober living
        solutions.</span
      >
      <br />
      <br />
      <span class="long-text-span">
        We offer both short and long term residency in a supportive, family
        oriented sober atmosphere. All houses are close to public
        transportation and have off street parking available. With a drama
        free, mature resident base and an on site manager who provides
        support and recovery options for all the residents, the Harwood
        Houses are your best bet if you're looking to get your life back
        together!</span
      >
    </div> -->
    <!-- <Link to="pdfEditor" id="pdfButton" class="cta-button">APPLY NOW!</Link> -->
    <a href="/apply" id="pdfButton" class="btn">APPLY NOW!</a>
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

.btn a {
  text-decoration: none;
  color: #f5f5f5;
}

@media only screen and (max-width: 850px) {
  .btn {
    font-size: 24px;
    display: grid;
    place-items: center;
  }
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

  .long-text {
    margin-bottom: 2rem;
  }

  .long-text-title {
  margin-left: 10%;
  max-width: 1000px;

  margin: auto;
  margin-bottom: 1rem; 
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
    font-size: 22px;
  }
}

.span-title {
  font-size: 42px;
  margin-bottom: 2rem;
}
@media only screen and (max-width: 850px) {
  .span-title {
    font-size: 32px;
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
  margin-top: 6rem;
  margin-bottom: 6rem;
  
} 

@media (max-width: 768px) {
  hr {
    margin-top: 2rem;
  margin-bottom: 2rem;
  }
} 

li {
  list-style: none;
}

.cta-text {
  font-family: "Questrial", sans-serif;
  font-weight: 600;
  margin-top: 1rem;
  color: #1c792e;
  font-weight: 600;
}

.cta-text a {
  color: #1c792e;
  font-weight: 600;
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

.properties-grid {
  margin-top: 4rem;
  margin-bottom: 2rem;
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: space-around;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
}

@media only screen and (max-width: 850px) {
  .properties-grid {
    display: block;
    padding-top: 2rem;
    margin: 0;
  }
}


.item {
  flex-basis: 25%;
  transition: all 0.6s ease;
  padding: 1rem;
}

@media only screen and (max-width: 850px) {
  .item {
    margin-bottom: 2rem;
  }
}

.expand {
  transition: all 0.5s ease;
}

.expand:hover {
  transform: scale(1.03);
  cursor: pointer;
}

.expand:hover .inner-text {
  margin-top: 2rem !important;
}

.inner-text {
  margin-top: 1rem;
  /* padding-left: 2rem; */
  min-width: 600px;
  font-family: "Questrial", sans-serif;
  opacity: 1;
  transform-origin: 527.844px 50.0703px;
  transform: translate(0px, 0%);
  color: #151515;
  font-size: 24px;
  transition: all 0.6s ease;
}

@media only screen and (max-width: 850px) {
  .inner-text {
    /* padding-left: 0.01rem; */
    font-size: 18px;
  }
}


.card-img {
  margin-bottom: 0.5rem;
  height: 100%;
  width: 100%;
  border-radius: 11px;
}


@media only screen and (max-width: 850px) {
  .single-overlay {
    max-width: 84vw;
  }
}



:global(.splide__slide img) {
    width: 100%;
    height: auto;
  }


  
  :global(dialog hr) {
    display: none;
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
  background-color: #1964ee !important;
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

@media only screen and (max-width: 420px) {
  .h2 {
    font-size: 24px;
    text-align: center;
  }
}


.animated-line-heading {
  font-family: "Questrial", sans-serif;
    color: #151515;
    font-size: 52px;
    max-width: 90%;
}

.text-section {
  margin: 0;
}
@media only screen and (max-width: 420px) {
  .text-section {
    margin-bottom: 2rem;
  }
}

.our-properties {
  font-family: "Questrial", sans-serif;   
  color: #151515;
  font-size: 42px;
  font-weight: 500; 
  line-height: 0;
  margin-left: 4rem;
  margin-bottom: 0;
}

@media only screen and (max-width: 768px) {
  .our-properties {
    font-size: 32px;
    margin-left: 1rem;
    margin-bottom: 0;
    /* margin: 0; */
  }
}






</style>
