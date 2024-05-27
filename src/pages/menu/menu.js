import './category-product/bakery.js'
import './category-product/bottledBeverages.js'
import './category-product/coldCoffees.js'
import './category-product/coldCups.js'
import './category-product/frappuccinoBlendedBeverages.js'
import './category-product/hotBeverages.js'
import './category-product/hotBreakfast.js'
import './category-product/hotCoffees.js'
import './category-product/hotTeas.js'
import './category-product/icedTeas.js'
import './category-product/lunch.js'
import './category-product/mugs.js'
import './category-product/oatmealYogurt.js'
import './category-product/other.js'
import './category-product/snacksSweets.js'
import './category-product/starbucksRefresherBeverages.js'
import './category-product/tumblers.js'
import './category-product/viaInstant.js'
import './category-product/wholeBean.js'


// menuContent

const productBtns = document.querySelectorAll('.productBtn');
const productComponents = document.querySelectorAll('.productComponent');

productComponents.forEach((component) => {
	if (component.id === 'mainComponent') {
		component.style.display = 'block';
	} else {
		component.style.display = 'none';
	}
});

productBtns.forEach((btn) => {
	btn.addEventListener('click', () => {
		const targetComponentId = btn.getAttribute('data-target');
		showProductComponent(targetComponentId);
		hideOtherProductComponents(targetComponentId);
	});
});

const showProductComponent = (componentId) => {
	const component = document.getElementById(componentId);
	if (component) {
		component.style.display = 'block';
	}
};

const hideOtherProductComponents = (componentIdToShow) => {
	productComponents.forEach((component) => {
		if (component.id !== componentIdToShow) {
			component.style.display = 'none';
		}
	});
};



