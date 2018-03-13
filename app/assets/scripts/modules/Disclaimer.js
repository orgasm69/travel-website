// import $ from 'jquery';

// class Disclaimer {
//   constructor() {
//     this.disclaimer = $('.disclaimer');
//     this.disclaimerBox = $('.disclaimer--box-hidden');
//     this.body = $('html, body');
//     this.certificateButton = $('.btn--disclaimer-certificate');
//     this.closeButton = $('.btn--disclaimer-dismiss');
//     this.events();
//   }

//   events() {
//     this.showDisclaimer();
//     this.showDisclaimerBox();
//     this.scrollDisable();

//     console.log(this);

//   }

//   closeAll() {
//     console.log(this);
//     this.closeButton.click(
//       this.hideAll(),
//       this.scrollEnable()
//     );
//   }

//   showDisclaimer() {
//     this.disclaimer.removeClass('disclaimer--hidden');
//     this.disclaimer.addClass('disclaimer--is-visible');
//   }

//   showDisclaimerBox() {
//     this.disclaimerBox.removeClass('disclaimer--box-hidden');
//     this.disclaimerBox.addClass('disclaimer--box');    
//   }

//   hideAll() {
//     this.disclaimerBox.removeClass('disclaimer--box');   
//     this.disclaimer.removeClass('disclaimer--is-visible');
//     this.disclaimer.addClass('disclaimer--hidden');
//     this.disclaimerBox.addClass('disclaimer--box-hidden');
//   }  

//   scrollDisable() {
//     this.body.css({
//       overflow: 'hidden',
//       height: '100%'
//     });
//   }

//   scrollEnable() {
//     this.body.css({
//       overflow: 'auto',
//       height: 'auto'
//     });
//   }

// }

// export default Disclaimer;