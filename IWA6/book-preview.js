class BookPreview extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const { author: authorId, id, image, title } = this.dataset;

        this.shadowRoot.innerHTML = `
            <style>
                /* Add your component styles here */
            </style>
            <button class="preview" data-preview="${id}">
                <img class="preview__image" src="${image}" alt="${title}" />
                <div class="preview__info">
                    <h3 class="preview__title">${title}</h3>
                    <div class="preview__author">${authors[authorId]}</div>
                </div>
            </button>
        `;
    }
}

customElements.define('book-preview', BookPreview);
