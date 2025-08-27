<script>
	import bannerImage from '$lib/images/HarwoodHousesLogo.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
  import Modal from "../components/Modal.svelte";
  import { Splide, SplideSlide } from '@splidejs/svelte-splide';
  import '@splidejs/svelte-splide/css';


  const pdfUrl = '/files/HouseRules.pdf';

  let showModal = [];

  const onClickImg = (index) =>{
    showModal[index] = true;
  };

  export let data;
  for (let block of data.GridGallery){
    showModal.push(false);
  }
  
  console.log(data);
  const url="http://localhost:1337"
</script>

<svelte:head>
	<title>{data.titleOfSiteTab}</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

{#each data.GridGallery as block, index}
  <Modal bind:showModal={showModal[index]} >
    {#if block.GalleryModal.length == 1}
      <img class="single-overlay" src={url+block.GalleryModal[0].url}/>
    {:else}
      <Splide aria-label={"Carousel "+block.name}>
      {#each block.GalleryModal as gallery, index} 
        <SplideSlide>
        <img src={url+gallery.url}  alt={"Image "+index}/>
        </SplideSlide>
      {/each}
      </Splide>
    {/if}
  </Modal>
{/each}

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
	<a href="/apply" id="pdfButton" class="btn">APPLY NOW!</a>
</section>
<section class="text-section" data-color="white">
	<div class="container">
    <hr />
		<div class="long-text-title">
			<span class="long-text-span span-title">
        {data.H1Text}
			</span>
      <br />
			<br />
      <br />
      {#each data.texts as block, index}
      <span class="long-text-span">
        {block.Text}
      </span>
      <br/>
      <br/>
      {/each} 
		</div>
	</div>
</section>


<section class="properties" data-color="white">
  <div class="container">
    <hr />
    <h2 class="our-properties">View Our Properties</h2>
    <div class="properties-grid">
      {#each data.GridGallery as block, index}
        <div class="item">
          <img
            on:click={()=>onClickImg(index)}
            class="card-img expand"
            src={url+block.FrontImage.url}
            alt="outside of the house"
          />
          <span class="inner-text">{block.TitleImage}</span>
        </div>
      {/each}
    </div>
  </div>
</section>

<section class="three-column-cards" data-color="white">
	<div class="container">
		<hr />
		<div class="three-column-grid">
      <div class="item">
        <h2>{data.GridComponents[0].Header}</h2>
        {#each data.GridComponents[0].Paragraphs as paragraph, index}
          <p>{paragraph.paragraph}</p>
        {/each} 
        <div class="cta-text">
          <a href={pdfUrl}  
					style="cursor: pointer;" target="_blank" rel="noopener noreferrer">SEE RULES</a>
        </div>
      </div>
      <div class="item">
        <div class="text-wrapper">
        <h2>{data.GridComponents[1].Header}</h2>
        {#each data.GridComponents[1].Paragraphs as paragraph, index}
          <p>{paragraph.paragraph}</p>
        {/each} 
        </div>
      </div>
      <div class="item">
        <h2>{data.GridComponents[2].Header}</h2>
        {#each data.GridComponents[2].Paragraphs as paragraph, index}
          <p>{paragraph.paragraph}</p>
        {/each} 
      </div>
    </div>
		<hr id="properties" />
	</div>
</section>

<section data-color="white">
  <div class="cta-banner container">
    <h2 class="animated-line-heading animate-complete h2">
      {data.applynowsection.text}
    </h2>
    <a href="/apply" id="pdfButton" class="btn">{data.applynowsection.applynowbuttontext}</a>
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


  
  :global(dialog > div > hr) {
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
