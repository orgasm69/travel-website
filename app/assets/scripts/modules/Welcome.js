import $ from 'jquery';
import Disclaimer from './Disclaimer';

class Welcome {
  constructor() {
    this.closeWelcomeButton = $('.btn--welcome');
    this.welcome = $('.welcome');
    this.flagEN = $('.welcome-icons--usa');
    this.flagPL = $('.welcome-icons--polish');
    this.events();

  }

  events() {
    this.flagEN.click(this.selectEngLanguage.bind(this));
    this.flagPL.click(this.selectPlLanguage.bind(this));
    this.closeWelcomeButton.click(this.closeWelcome.bind(this));
    }


  closeWelcome() {
    this.welcome.addClass('welcome__close');
    this.closeWelcomeButton.addClass('btn--hidden');
    this.flagPL.addClass('welcome-icons--hidden');
    this.flagEN.addClass('welcome-icons--hidden');

    this.welcome.addClass('welcome--to-white')
      .delay(700)
      .queue(function(next) {
        $(this).addClass('welcome--fade');
        next();
      }) 
      .delay(2000)
      .queue(function(next) {
        let disclaimer = new Disclaimer();
        disclaimer.events(disclaimer);
        disclaimer.closeAll(disclaimer);
        next();
      });
    }      

  

  selectEngLanguage() {
    this.flagEN.addClass('welcome-icons--choosenEn');
    this.flagPL.addClass('welcome-icons--hidden');
    this.flagEN.removeClass('welcome-icons--usa');
    this.closeWelcomeButton.removeClass('btn--hidden');
  }

  selectPlLanguage() {
    this.flagPL.addClass('welcome-icons--choosenPl');
    this.flagEN.addClass('welcome-icons--hidden');
    this.flagPL.removeClass('welcome-icons--polish');
    this.closeWelcomeButton.removeClass('btn--hidden');
  }

}

export default Welcome;
