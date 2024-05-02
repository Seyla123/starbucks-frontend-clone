const menuHeader = document.querySelector('.menu-header-layout');
fetch('../../components/menu/menu-header.html')
	.then((res) => res.text())

	.then((data) => {
		menuHeader.innerHTML = data;
	})
	.catch((error) => console.error('Error fetching included file:', error));

// menuContent
const menuContent = document.querySelector('.menu-content-layout');
fetch('../../components/menu/menu-content.html')
	.then((res) => res.text())

	.then((data) => {
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
			console.log(component);
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

		menuContent.innerHTML = data;
	})
	.catch((error) => console.error('Error fetching included file:', error));
