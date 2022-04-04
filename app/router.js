import EmberRouter from '@ember/routing/router';
import config from 'web-accessibility-advisor-system/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('PageLayout');
  this.route('Colours');
  this.route('Images');
  this.route('VideoAudio');
  this.route('GeneralElementsLinks');
  this.route('ContentReadabilityText');
  this.route('HelpAbout');
});
