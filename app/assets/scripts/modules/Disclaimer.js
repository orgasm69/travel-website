import $ from 'jquery';

class Disclaimer {
  constructor() {
    this.disclaimer = $('.disclaimer');
    this.disclaimerBox = $('.disclaimer--box-hidden');
    this.body = $('html, body');
    this.certificateButton = $('.btn--disclaimer-certificate');
    this.closeButton = $('.btn--disclaimer-dismiss');
    this.events();
  }

  events() {
    this.showDisclaimer();
    this.showDisclaimerBox();
    this.scrollDisable();

    console.log(this);

  }

  closeAll() {
    this.closeButton.click(
      this.hideAll.bind(this),
      this.scrollEnable.bind(this)
    );
  }

  showDisclaimer() {
    this.disclaimer.removeClass('disclaimer--hidden');
    this.disclaimer.addClass('disclaimer--is-visible');
  }

  showDisclaimerBox() {
    this.disclaimerBox.removeClass('disclaimer--box-hidden');
    this.disclaimerBox.addClass('disclaimer--box');    
  }

  hideAll() {
    this.disclaimer.addClass('disclaimer--hidden');
    this.disclaimer.removeClass('disclaimer--is-visible');
    this.disclaimerBox.addClass('disclaimer--box-hidden');
    this.disclaimerBox.removeClass('disclaimer--box');   
  }

  scrollDisable() {
    this.body.css({
      overflow: 'hidden',
      height: '100%'
    });
  }

  scrollEnable() {
    this.body.css({
      overflow: 'auto',
      height: 'auto'
    });
  }

}

export default Disclaimer;