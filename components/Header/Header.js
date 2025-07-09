class Header {

    render(count) {
        const html = `
            <div class="header-container">
                <div class="header-counter" onclick="shoppingPage.render();">
                    🔥${count}
                </div>
            </div>
        `;

        ROOT_HEADER.innerHTML = html;
    }
}

const headerPage = new Header();
