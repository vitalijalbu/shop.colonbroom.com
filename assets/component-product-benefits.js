function checkIfImageExists(url, callback) {
	const image = new Image();
	image.src = url;
	
	if (image.complete) {
		callback(true);
	} else {
		image.onload = () => {
			callback(true);
		};
		
		image.onerror = () => {
			callback(false);
		};
	}
}

window.addEventListener('DOMContentLoaded', () => {
	const productBenefitsSection = document.querySelector('[data-section="product-benefits"]') || null;
	
	const productBenefitsAssetImage = productBenefitsSection?.querySelector('[data-asset-image]') || null;
	
	if(productBenefitsAssetImage) {
		const productBenefitsAssetImageUrl = productBenefitsAssetImage.getAttribute('data-asset-image-url');
		
		if(productBenefitsAssetImageUrl) {
			checkIfImageExists(productBenefitsAssetImageUrl, (exists) => {
				if(!exists) {
					const productBenefitsImage = productBenefitsSection.querySelector('[data-product-image]');
					
					productBenefitsImage.setAttribute('data-visible', 'true');
					productBenefitsAssetImage.setAttribute('data-visible', 'false');
				}
			})
		}
	}
	
});
