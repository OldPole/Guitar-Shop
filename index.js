function render() {
    const productsStore = localStorageUtil.getProducts();

    headerPage.render(productsStore.length);
    productsPage.render();
}

spinner.render();

let CATALOG = [];

// test api: https://www.myjsons.com/v/a7324281 

fetch('server/catalog.json')
    .then(res => res.json())
    .then(body => {
        CATALOG = body;
        spinner.handleClear();
        render();
    })
    .catch(error => {
        console.log(error);
    });

// to start http-server, enter 'http-server' in console