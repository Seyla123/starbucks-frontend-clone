class contentHome extends HTMLElement {
    async connectedCallback() {
        // Fetch HTML content from a URL
        const htmlContent = await this.fetchHtmlContent('../../components/home/content.html');
        // Set the inner HTML of the sidebar component
        this.innerHTML = htmlContent;
    }

    async fetchHtmlContent(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.text();
        } catch (error) {
            console.error('Failed to fetch HTML content:', error);
            return `<p>Error loading content</p>`;
        }
    }
}

// Define a custom element named 'sidebar-component'
customElements.define('content-home-component', contentHome);