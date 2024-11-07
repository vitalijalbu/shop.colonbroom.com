const initStickyAddToCart = () => {
  const stickyATCButtonWrapper = document.querySelector('[data-sticky-atc-button-wrapper]') || null;
  
  if(stickyATCButtonWrapper) {
    const productMainHeight = document.querySelector('[data-product-main]').clientHeight;
    window.addEventListener('scroll', () => {
      const showStickyATCButton = productMainHeight < window.scrollY;
        if (showStickyATCButton) {
          stickyATCButtonWrapper.setAttribute('data-visible', 'true');
        } else {
          stickyATCButtonWrapper.removeAttribute('data-visible')
        }
      }
    );
    
    const stickyATCButton = stickyATCButtonWrapper.querySelector('button');
    
    stickyATCButton.addEventListener('click', (event)=> {
      if(event.target.hasAttribute('data-add-to-cart-action')) {
        const addToCartForm = document.querySelector('[data-type="add-to-cart-form"]');
        const addToCartButton = addToCartForm.querySelector('[name="add"]').classList.contains('recurpay-hide') ? addToCartForm.querySelector('[data-recurpay-action]') : addToCartForm.querySelector('[name="add"]');
        
        if (addToCartButton) {
          addToCartButton.click();
        }
        
      }
      if(event.target.hasAttribute('data-scroll-action')) {
        window.scrollTo({top: 100});
      }
    })
  }
}


window.addEventListener('load', () => {
  initStickyAddToCart();
})