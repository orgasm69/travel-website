import $ from 'jquery';

class Welcome {
  constructor() {
    this.closeWelcomeButton = $('.btn--welcome');
    this.welcome = $('.welcome')
    this.events();
  }

  events() {
    this.closeWelcomeButton.click(this.closeWelcome.bind(this));
  }

  closeWelcome() {
    this.welcome.addClass('welcome__close');
  }

}

export default Welcome;
