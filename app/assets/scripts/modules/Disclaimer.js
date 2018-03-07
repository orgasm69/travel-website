import $ from 'jquery';

class Disclaimer {
  constructor() {
    this.disclaimerBox = $('.disclaimer');
    this.events();
  }

  events() {
    this.showDisclaimer();
    console.log(this);

  }

  showDisclaimer () {
    this.disclaimerBox.removeClass('disclaimer-box-hidden');
    this.disclaimerBox.addClass('disclaimer-is-visible');
  }

}

export default Disclaimer;