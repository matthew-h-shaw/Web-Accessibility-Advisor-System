import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | web accessibility advisor system', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting system home', async function (assert) {
    await visit('/');
    assert.equal(currentURL(), '/');
	assert.dom('h1 a').hasText('Web Acessibility Advisor');
   });

  test('Accesibility Section Peramenter Titles', async function (assert) {
    await visit('/');
    assert.dom('#section-one a h2').hasText('Page Layout');
    assert.dom('#section-two a h2').hasText('Colours');
    assert.dom('#section-three a h2').hasText('Images');
    assert.dom('#section-four a h2').hasText('Video & Audio');
    assert.dom('#section-five a h2').hasText('General Elements & Links');
    assert.dom('#section-six a h2').hasText('Content Readability (Text)');
   });

  test('Accesibility Section Peramenter Links', async function (assert) {
    await visit('/');
    await click('#section-one a');
   	assert.equal(currentURL(), '/PageLayout');
   	await visit('/');
    await click('#section-two a');
   	assert.equal(currentURL(), '/Colours');
   	await visit('/');
    await click('#section-three a');
   	assert.equal(currentURL(), '/Images');
   	await visit('/');
    await click('#section-four a');
   	assert.equal(currentURL(), '/VideoAudio');
   	await visit('/');
    await click('#section-five a');
   	assert.equal(currentURL(), '/GeneralElementsLinks');
   	await visit('/');
    await click('#section-six a');
   	assert.equal(currentURL(), '/ContentReadabilityText');
   });


  test('Accesibility Section Peramenter Images', async function (assert) {
    await visit('/');
    let pagelayoutImg = this.element.querySelector('#section-one img').getAttribute('src');
    assert.strictEqual(pagelayoutImg, '../assets/images/pagelayout.png');
    let coloursImg = this.element.querySelector('#section-two img').getAttribute('src');
    assert.strictEqual(coloursImg, '../assets/images/colours.png');
    let imagesImg = this.element.querySelector('#section-three img').getAttribute('src');
    assert.strictEqual(imagesImg, '../assets/images/images.png');
    let videoAudioImg = this.element.querySelector('#section-four img').getAttribute('src');
    assert.strictEqual(videoAudioImg, '../assets/images/vidaud.png');
    let elementsImg = this.element.querySelector('#section-five img').getAttribute('src');
    assert.strictEqual(elementsImg, '../assets/images/element.png');
    let contentImg = this.element.querySelector('#section-six img').getAttribute('src');
    assert.strictEqual(contentImg, '../assets/images/text.png');
   });

  test('Help & About Check', async function (assert) {
    await visit('/');
    let HelpAboutLink = this.element.querySelector('footer a');
    assert.dom(HelpAboutLink).hasText('Help & About');
    await click(HelpAboutLink);
    assert.equal(currentURL(), '/HelpAbout');
    let HelpAboutHeading2s = this.element.querySelectorAll('h2');
    assert.dom(HelpAboutHeading2s[0]).hasText('About');
    assert.dom(HelpAboutHeading2s[1]).hasText('Help');
    let HelpAboutHeading3s = this.element.querySelectorAll('h3');
    assert.dom(HelpAboutHeading3s[0]).hasText('Finding what you need');
    assert.dom(HelpAboutHeading3s[1]).hasText('Understanding Accessibility Sections');
    assert.dom(HelpAboutHeading3s[2]).hasText('Ensuring your content is Accessible');
    assert.dom(HelpAboutHeading3s[3]).hasText('What is Accessibility?');

  });



  test('Accesibility Sub Section Check', async function (assert) {
    function checkLinks(list)
    {for (var i = list.length - 1; i >= 0; i--) {
        assert.strictEqual(list[i].getAttribute('href').includes('https://www.w3.org/TR/WCAG21/'),true); }}
    await visit('/PageLayout');
    checkLinks(this.element.getElementsByClassName('wcag-link'));
    let PageLayoutHeading2s = this.element.querySelectorAll('h2');
    assert.dom(PageLayoutHeading2s[0]).hasText('Page Content Order');
    assert.dom(PageLayoutHeading2s[1]).hasText('Headings & Labels');
    assert.dom(PageLayoutHeading2s[2]).hasText('Identification Consistency');
    assert.dom(PageLayoutHeading2s[3]).hasText('Page Help');
    await visit('/Colours');
    checkLinks(this.element.getElementsByClassName('wcag-link'));
    let ColoursHeading2s = this.element.querySelectorAll('h2');
    assert.dom(ColoursHeading2s[0]).hasText('Using Colours as Indicators');
    assert.dom(ColoursHeading2s[1]).hasText('Image, Text, and Background Colours');
    await visit('/Images');
    checkLinks(this.element.getElementsByClassName('wcag-link'));
    let ImagesHeading2s = this.element.querySelectorAll('h2');
    assert.dom(ImagesHeading2s[0]).hasText('How to choose Images');
    assert.dom(ImagesHeading2s[1]).hasText('Alternative Text');
    await visit('/VideoAudio');
    checkLinks(this.element.getElementsByClassName('wcag-link'));
    let VideoAudioHeading2s = this.element.querySelectorAll('h2');
    assert.dom(VideoAudioHeading2s[0]).hasText('Audio-only and Video-only Content');
    assert.dom(VideoAudioHeading2s[1]).hasText('Synchronised Media (Audio & Video)');
    assert.dom(VideoAudioHeading2s[2]).hasText('Live Video & Audio Content');
    await visit('/GeneralElementsLinks');
    checkLinks(this.element.getElementsByClassName('wcag-link'));
    let GeneralElementsLinksHeading2s = this.element.querySelectorAll('h2');
    assert.dom(GeneralElementsLinksHeading2s[0]).hasText('General Links');
    assert.dom(GeneralElementsLinksHeading2s[1]).hasText('Page Link Elements (e.g., Logos, Shapes, etc.)');
    assert.dom(GeneralElementsLinksHeading2s[2]).hasText('Flashing Content');
    assert.dom(GeneralElementsLinksHeading2s[3]).hasText('Content Size');
    await visit('/ContentReadabilityText');
    checkLinks(this.element.getElementsByClassName('wcag-link'));
    let ContentReadabilityTextHeading2s = this.element.querySelectorAll('h2');
    assert.dom(ContentReadabilityTextHeading2s[0]).hasText('Technical words/language');
  });

    
});
