<script>import Header from './Header.svelte';
import '../app.css';</script>

<div class="app">
	<Header></Header>

	<main>
		<slot></slot>
	</main>

	<div class="footer-wrapper">
		<footer id="colophon" class="site-footer">
			<div class="top"></div>
			<hr />
			<div class="left-right">
				<div class="left text-footer-links">
					<div id="block-7" class="menu widget_block">
						<div class="menu-title">Social</div>
						<div class="wp-widget-group__inner-blocks">
							<ul>
								<!-- <li class="no-list-style">
									<a href="#" target="_blank" rel="noreferrer noopener">Instagram</a>
								</li> -->
								<!-- <li class="no-list-style">
									<a href="#" target="_blank" rel="noreferrer noopener">Twitter</a>
								</li> -->
								<!-- <li class="no-list-style">
									<a href="#" target="_blank" rel="noreferrer noopener">LinkedIn</a>
								</li> -->
								<li class="no-list-style">
									<a href="https://www.facebook.com/harwood.houses/" target="_blank" rel="noreferrer noopener">Facebook</a>
								</li>
							</ul>
						</div>
					</div>
					<div id="block-8" class="menu widget_block">
						<div class="menu-title">Info</div>
						<div class="wp-widget-group__inner-blocks">
							<ul>
								<li class="no-list-style"><a href="/about">About</a></li>
								<!-- <li class="no-list-style">
									<a href="#" data-type="URL" data-id="/about">Resources</a>
								</li> -->
							</ul>
						</div>
					</div>
				</div>
		
				<div class="right text-footer-links">
					<div id="block-9" class="menu widget_block">
						<div class="menu-title">Phone</div>
						<div class="wp-widget-group__inner-blocks">
							<a href="tel:+1(781)-924-9442" class="text-footer-links">781-924-9442</a>
							<br />
							<a href="mailto: HarwoodHouses@gmail.com" style="color: #151515">
								Email
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	</div>
</div>


<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 84rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	.footer-wrapper {
		flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    max-width: 84rem;
    margin: 0 auto;
    box-sizing: border-box;
	}

	.left-right {
  font-size: 24px;
  word-wrap: break-word;
  -webkit-font-smoothing: antialiased;
  margin: 0;
  padding-left: 3rem;
  padding-right: 3rem;
  padding-bottom: 4rem;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: start;
}

@media only screen and (max-width: 580px) {
  .left-right {
    padding-left: 1.4rem;
    padding-right: 1.4rem;
  }
}

@media only screen and (max-width: 300px) {
  .left-right {
    padding-left: 0.4rem;
    padding-right: 0.4rem;
    display: grid;
  }
}

.left {
  --c-page-ink: var(--ink);
  --c-page-ink-fallback: var(--ink-fallback);
  --c-page-paper: var(--paper);
  --c-page-highlight-1: var(--highlight-1);
  --c-page-highlight-2: var(--highlight-2);
  --c-page-highlight-3: var(--highlight-3);
  --c-page-tag-color: var(--tag-color);
  --wp--preset--font-size--normal: 16px;
  --wp--preset--font-size--huge: 42px;
  --ON: initial;
  --OFF: ;
  --screen-size-xs: 374px;
  --screen-size-sm: 768px;
  --screen-size-md: 991px;
  --screen-size-md-lg: 1160px;
  --screen-size-lg: 1367px;
  --screen-size-xl: 1440px;
  --screen-size-desktop: 1512px;
  --td-container-width-default: 1200px;
  --td-container-width-small: 800px;
  --td-container-width-medium: 1300px;
  --td-container-width-large: 1400px;
  --c-black: #000000;
  --c-traina-purple-400: #8875e2;
  --c-traina-purple-300: #a897f8;
  --c-traina-pink-400: #de706f;
  --c-traina-pink-300: #f98989;
  --c-traina-green-400: #5d9e70;
  --c-traina-green-300: #82c596;
  --c-traina-gray-900: #151515;
  --c-traina-gray-800: #232323;
  --c-traina-gray-700: #454545;
  --c-traina-gray-600: #636363;
  --c-traina-gray-500: #727272;
  --c-traina-gray-400: #8e8e8e;
  --c-traina-gray-300: #d0d0d0;
  --c-traina-gray-200: #e8e8e8;
  --c-traina-gray-110: #f5f5f5;
  --c-traina-gray-100: #fafafa;
  --c-white: #ffffff;
  --c-error-red: #852323;
  --c-primary: var(--ink);
  --c-secondary: var(--paper);
  --ff-sans-serif: "Questrial", sans-serif;
  --ff-serif: "Questrial", sans-serif;
  /* mix-blend-mode: difference; */
  --fw-light: 300;
  --fw-regular: 400;
  --fz-body-details-min: 18;
  --fz-body-details-from: 18;
  --fz-body-details-max: 28;
  --fz-body-details-lh-min: 27;
  --fz-body-details-lh-from: 27;
  --fz-body-details-lh-max: 36;
  --fz-body-lg-min: 30;
  --fz-body-lg-to: 36;
  --fz-body-lg-max: 43;
  --fz-body-lg-lh-min: 48;
  --fz-body-lg-lh-to: 56;
  --fz-body-lg-lh-max: 65;
  --fz-body-md-case-study-min: 21;
  --fz-body-md-case-study-from: 21;
  --fz-body-md-case-study-max: 31;
  --fz-body-md-case-study-lh-min: 32;
  --fz-body-md-case-study-lh-from: 34;
  --fz-body-md-case-study-lh-max: 46;
  --fz-body-md-min: 21;
  --fz-body-md-from: 21;
  --fz-body-md-max: 31;
  --fz-body-md-lh-min: 32;
  --fz-body-md-lh-from: 32;
  --fz-body-md-lh-max: 46;
  --fz-body-sm-min: 18;
  --fz-body-sm-max: 18;
  --fz-body-sm-lh-min: 32;
  --fz-body-sm-lh-max: 32;
  --fz-body-xl-min: 28;
  --fz-body-xl-max: 28;
  --fz-body-xl-lh-min: 36;
  --fz-body-xl-lh-max: 36;
  --fz-body-xs-min: 16;
  --fz-body-xs-max: 16;
  --fz-body-xs-lh-min: 20;
  --fz-body-xs-lh-max: 20;
  --fz-cite-min: 24;
  --fz-cite-max: 24;
  --fz-cite-lh-min: 30;
  --fz-cite-lh-max: 30;
  --fz-cta-text-min: 16;
  --fz-cta-text-max: 16;
  --fz-cta-text-lh-min: 32;
  --fz-cta-text-lh-max: 32;
  --fz-eyebrow-min: 18;
  --fz-eyebrow-max: 18;
  --fz-eyebrow-lh-min: 30;
  --fz-eyebrow-lh-max: 30;
  --fz-h1-min: 60;
  --fz-h1-to: 200;
  --fz-h1-max: 234;
  --fz-h1-lh-min: 57;
  --fz-h1-lh-to: 177;
  --fz-h1-lh-max: 206;
  --fz-h2-min: 50;
  --fz-h2-to: 110;
  --fz-h2-max: 190;
  --fz-h2-lh-min: 57;
  --fz-h2-lh-to: 120;
  --fz-h2-lh-max: 200;
  --fz-h3-min: 40;
  --fz-h3-to: 60;
  --fz-h3-max: 83;
  --fz-h3-lh-min: 42;
  --fz-h3-lh-to: 58;
  --fz-h3-lh-max: 76;
  --fz-h4-alt-min: 34;
  --fz-h4-alt-to: 74;
  --fz-h4-alt-max: 120;
  --fz-h4-alt-lh-min: 38;
  --fz-h4-alt-lh-to: 87;
  --fz-h4-alt-lh-max: 143;
  --fz-h4-min: 34;
  --fz-h4-to: 36;
  --fz-h4-max: 44;
  --fz-h4-lh-min: 38;
  --fz-h4-lh-to: 38;
  --fz-h4-lh-max: 46;
  --fz-h5-min: 26;
  --fz-h5-to: 32;
  --fz-h5-lh-min: 32;
  --fz-h5-lh-to: 42;
  --fz-job-title-min: 27;
  --fz-job-title-max: 27;
  --fz-job-title-lh-min: 32;
  --fz-job-title-lh-max: 32;
  --fz-links-min: 20;
  --fz-links-max: 20;
  --fz-links-lh-min: 28;
  --fz-links-lh-max: 28;
  --fz-list-min: 22;
  --fz-list-max: 22;
  --fz-list-lh-min: 38;
  --fz-list-lh-max: 38;
  --fz-meta-blog-min: 20;
  --fz-meta-blog-max: 20;
  --fz-meta-blog-lh-min: 25;
  --fz-meta-blog-lh-max: 25;
  --fz-meta-photo-min: 12;
  --fz-meta-photo-to: 16;
  --fz-meta-photo-max: 20;
  --fz-meta-photo-lh-min: 20;
  --fz-meta-photo-lh-max: 20;
  --fz-name-min: 16;
  --fz-name-max: 16;
  --fz-name-lh-min: 20;
  --fz-name-lh-max: 20;
  --fz-nav-links-min: 46;
  --fz-nav-links-max: 20;
  --fz-nav-links-lh-min: 46;
  --fz-nav-links-lh-max: 20;
  --fz-quote-min: 36;
  --fz-quote-to: 56;
  --fz-quote-max: 79;
  --fz-quote-lh-min: 46;
  --fz-quote-lh-to: 70;
  --fz-quote-lh-max: 98;
  --fz-routing-links-min: 20;
  --fz-routing-links-max: 20;
  --fz-routing-links-lh-min: 28;
  --fz-routing-links-lh-max: 28;
  --fz-stats-k-min: 100;
  --fz-stats-k-max: 100;
  --fz-stats-k-lh-min: 100;
  --fz-stats-k-lh-max: 100;
  --fz-stats-min: 150;
  --fz-stats-max: 150;
  --fz-stats-lh-min: 100;
  --fz-stats-lh-max: 100;
  --fz-tag-md-min: 24;
  --fz-tag-md-max: 24;
  --fz-tag-md-lh-min: 24;
  --fz-tag-md-lh-max: 24;
  --fz-tag-sm-min: 16;
  --fz-tag-sm-max: 16;
  --fz-tag-sm-lh-min: 26;
  --fz-tag-sm-lh-max: 26;
  --fz-tags-min: 16;
  --fz-tags-max: 16;
  --fz-tags-lh-min: 32;
  --fz-tags-lh-max: 32;
  --ls-0: 0em;
  --ls-1: 0.01em;
  --ls-2: 0.02em;
  --ls-3: 0.03em;
  --ls-4: 0.04em;
  --ls-5: 0.05em;
  --ls-25: 0.025em;
  --ls-m1: -0.01em;
  --ls-m2: -0.02em;
  --ls-m3: -0.03em;
  --ls-m4: -0.04em;
  --ls-m5: -0.05em;
  --sp-page-padding-inline: 50px;
  --sp-page-padding-inline-mobile: 10px;
  --td-button-choices-default: btn;
  --td-button-choices-inline: inline-btn;
  --tx-time: 1;
  --tx-sec: calc(var(--tx-time) * 1s);
  --tx: var(--tx-sec) ease-in-out;
  --sp-xl-desktop: 300px;
  --sp-xl-mobile: 120px;
  --sp-xl-half-desktop: 150px;
  --sp-xl-half-mobile: 60px;
  --sp-lg-desktop: 180px;
  --sp-lg-mobile: 120px;
  --sp-md-desktop: 130px;
  --sp-md-mobile: 52px;
  --sp-sm-desktop: 60px;
  --sp-sm-mobile: 52px;
  --sp-xs-desktop: 30px;
  --sp-xs-mobile: 30px;
  --sp-none: 0px;
  --sp-xl: var(--sp-xl-desktop);
  --sp-xl-half: var(--sp-xl-half-desktop);
  --sp-lg: var(--sp-lg-desktop);
  --sp-md: var(--sp-md-desktop);
  --sp-sm: var(--sp-sm-desktop);
  --sp-xs: var(--sp-xs-desktop);
  --wp--preset--color--black: #000000;
  --wp--preset--color--cyan-bluish-gray: #abb8c3;
  --wp--preset--color--white: #ffffff;
  --wp--preset--color--pale-pink: #f78da7;
  --wp--preset--color--vivid-red: #cf2e2e;
  --wp--preset--color--luminous-vivid-orange: #ff6900;
  --wp--preset--color--luminous-vivid-amber: #fcb900;
  --wp--preset--color--light-green-cyan: #7bdcb5;
  --wp--preset--color--vivid-green-cyan: #00d084;
  --wp--preset--color--pale-cyan-blue: #8ed1fc;
  --wp--preset--color--vivid-cyan-blue: #0693e3;
  --wp--preset--color--vivid-purple: #9b51e0;
  --wp--preset--color--ink: var(--ink, #232323);
  --wp--preset--color--paper: var(--paper, #fafafa);
  --wp--preset--color--highlight-1: var(--highlight-1, #8875e2);
  --wp--preset--color--highlight-2: var(--highlight-2, #de706f);
  --wp--preset--color--highlight-3: var(--highlight-3, #5d9e70);
  --wp--preset--color--tag-color: var(--tag-color, #727272);
  --wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(
    135deg,
    rgba(6, 147, 227, 1) 0%,
    rgb(155, 81, 224) 100%
  );
  --wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(
    135deg,
    rgb(122, 220, 180) 0%,
    rgb(0, 208, 130) 100%
  );
  --wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(
    135deg,
    rgba(252, 185, 0, 1) 0%,
    rgba(255, 105, 0, 1) 100%
  );
  --wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(
    135deg,
    rgba(255, 105, 0, 1) 0%,
    rgb(207, 46, 46) 100%
  );
  --wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(
    135deg,
    rgb(238, 238, 238) 0%,
    rgb(169, 184, 195) 100%
  );
  --wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(
    135deg,
    rgb(74, 234, 220) 0%,
    rgb(151, 120, 209) 20%,
    rgb(207, 42, 186) 40%,
    rgb(238, 44, 130) 60%,
    rgb(251, 105, 98) 80%,
    rgb(254, 248, 76) 100%
  );
  --wp--preset--gradient--blush-light-purple: linear-gradient(
    135deg,
    rgb(255, 206, 236) 0%,
    rgb(152, 150, 240) 100%
  );
  --wp--preset--gradient--blush-bordeaux: linear-gradient(
    135deg,
    rgb(254, 205, 165) 0%,
    rgb(254, 45, 45) 50%,
    rgb(107, 0, 62) 100%
  );
  --wp--preset--gradient--luminous-dusk: linear-gradient(
    135deg,
    rgb(255, 203, 112) 0%,
    rgb(199, 81, 192) 50%,
    rgb(65, 88, 208) 100%
  );
  --wp--preset--gradient--pale-ocean: linear-gradient(
    135deg,
    rgb(255, 245, 203) 0%,
    rgb(182, 227, 212) 50%,
    rgb(51, 167, 181) 100%
  );
  --wp--preset--gradient--electric-grass: linear-gradient(
    135deg,
    rgb(202, 248, 128) 0%,
    rgb(113, 206, 126) 100%
  );
  --wp--preset--gradient--midnight: linear-gradient(
    135deg,
    rgb(2, 3, 129) 0%,
    rgb(40, 116, 252) 100%
  );
  --lh-max: var(--lh-has-max, var(--lh-min));
  --lh-min: var(--lh-has-min, var(--line-height));
  --lh-has-max: min(var(--lh-max-px), var(--line-height));
  --lh-has-min: max(var(--lh-min-px), var(--line-height));
  line-height: var(--lh-clamp, var(--lh-max));
  --viewport-from: var(--override-viewport-from, 420);
  --viewport-to: var(--override-viewport-to, 1512);
  --min-font-size: var(--fz-routing-links-min);
  --max-font-size: var(--fz-routing-links-max);
  --min-line-height: var(--fz-routing-links-lh-min);
  --max-line-height: var(--fz-routing-links-lh-max);
  font-family: Halenoir Display, sans-serif;
  letter-spacing: 0.02em;
  display: flex;
  flex-flow: row nowrap;
  justify-content: start;
  align-items: start;
  gap: 80px;
}

@media only screen and (max-width: 480px) {
  .left {
    gap: 0;
  }
}

.menu {
  margin-block-end: 4em;
}

.menu-title {
  font-size: 24px;
  margin-block-end: 1em;
  text-transform: uppercase;
  font-family: "Questrial", sans-serif;
  color: #151515;
}

@media only screen and (max-width: 480px) {
  .menu-title {
    font-size: 20px;
  }
}

ul {
  padding-left: 0;
  padding-right: 1rem;
}

li a {
  text-decoration: none;
  color: #151515;
  line-height: 1.6;
  font-size: 18px;
}
@media only screen and (max-width: 480px) {
  li a {
  font-size: 16px;
}
}

.text-footer-links {
  font-family: "Questrial", sans-serif;
  font-size: 18px;
  line-height: 1.6;
  color: #151515;
}

hr {
  margin-bottom: 2rem;
}

.no-list-style {
  list-style: none;
}

</style>
