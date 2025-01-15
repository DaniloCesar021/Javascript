let needReload = false;
let cart;
let globalScope;
let cartArray = [];
let melhorEnvioAccountPositionArray = [];
let melhorEnvioAccounts = [];
let previousZipCode;
let melhorEnvioAccountPosition;
let shippingServices;
let previousSelectedService = [];
let services = [];
const moneyFormatter = new Intl.NumberFormat('pt-Br', { style: 'currency', currency: 'BRL', });
window.onChangeAddress = [];


function onLoadForm() {
    window.this = this;
    globalScope = this;
    window.viewproduct = this;
    this.entity.UserIdSession = this.session.UserId;
    this.entity.addQuantityToCart = 1;

    window.selectLength = (e) => {
        let scope = e.target;
        let obj = document.getElementsByClassName('form-option');
        for (let i = 0; obj.length > i; ++i) {
            let elem = obj[i].classList;
            if (elem.contains('selected')) {
                elem.remove('selected');
            }
        }
        scope.classList.add('selected');
    }


    window.increaseQuantity = () => {
        let input = document.getElementById('inputQuantity')
        if (input.value === "") {
            input.value = 1;
            this.entity.addQuantityToCart = 1;
        }
        input.value = parseInt(input.value) + 1;
        this.entity.addQuantityToCart++;
    }

    window.decreaseQuantity = () => {
        let input = document.getElementById('inputQuantity')
        if (input.value === "" || input.value <= 1) {
            input.value = 1;
            this.entity.addQuantityToCart = 1;
            return;
        }
        input.value = parseInt(input.value) - 1;
        this.entity.addQuantityToCart--;
    }


    window.increaseAdditionalQuantity = (inputId) => {
        let input = document.getElementById(inputId);
        if (input.value) {
            input.value = parseInt(input.value) + 1;
            return;
        }
        input.value = 1;
    }

    window.decreaseAdditionalQuantity = (inputId) => {
        let input = document.getElementById(inputId);
        if (input.value) {
            input.value = Math.max(parseInt(input.value) - 1, 0);
            return;
        }
        input.value = 0;
    }

    window.getButton = (e, className, repeaterClass) => {
        $('button', $(className, $(e.target).parents(repeaterClass))).click();
    }

    window.getAction = (e, elementClass) => {
        let scope = e.target;
        //$('button', 'saveFavorite').click();
        //$('button', 'removeFavorite').click();
    }

    window.onChangeCotacaoRepeater = onChangeCotacaoRepeater.bind(this);

    hideTabReviewProduct.call(this);
}

function showLoading(title, html) {
    const modalInstance = Swal.fire({
        title: title,
        html: html,
        timerProgressBar: true,
        allowOutsideClick: false,
        didOpen: () => {
            Swal.showLoading();
        }, willClose: () => { }
    });
    return modalInstance;
}


function afterSave() {
    if (needReload) {
        this.getField('RepeaterProduct')[0].fetchData().then(() => {
            this.getField('RepeaterProduct')[0].detectChanges();
            this.getField('RepeaterFavorite')[0].fetchData().then(() => {
                this.getField('RepeaterFavorite')[0].detectChanges();
            });
        });
        needReload = false;
    }
    // getItemsInCart();
}

function afterDelete() {
    needReload = true;
    if (needReload) {
        this.getField('RepeaterProduct')[0].fetchData().then(() => {
            this.getField('RepeaterProduct')[0].detectChanges();
            this.getField('RepeaterFavorite')[0].fetchData().then(() => {
                this.getField('RepeaterFavorite')[0].detectChanges();
            });
        });
        this.getField('ProductId1').setValue(null);
        this.getField('UserId').setValue(null);
        this.getField('IsFavorite').setValue(false);
        needReload = false;
    }
}

function setValuesForSaveFavorite() {
    needReload = true;
    // console.log(this.entity);
    this.getField('ProductId1').setValue(this.entity.ProductId);
    this.getField('UserId').setValue(this.session.UserId);
    this.getField('IsFavorite').setValue(true);

}

function favoriteValidation() {
    // console.log('validation');
    let interval = setInterval(() => {
        if ($('input', '.IsFavorite').length > 0) {
            let input = document.getElementsByClassName('custom-IsFavorite');
            if (input.IsFavorite.checked) {
                //this.currentRepeater.value[0]['Favorite'] = true;
                $('.favorito').addClass('favorito2')
                $('.favorito').addClass('favorito')
            } else {
                //this.currentRepeater.value[0]['Favorite'] = false;
                $('.favorito2').addClass('favorito')
                $('.favorito2').removeClass('favorito2')
            }
            clearInterval(interval)
        }
    })
}

function openModal() {
    const modalProductId = this.parentDirective.ezEditFormFields.form.Fields.find(
        x => x.FieldTitle === "OpenModalBtn")?.LinkFormId;
    this.parent.loadFormAndOpenModal({ FormId: modalProductId });
    // this.parent.loadFormAndOpenModal({ FormId: 58786 });
}

function setQuantity() {
    let value = parseInt(document.getElementById('inputQuantity').value);
    this.entity.Qty = +value + (parseInt(this.entity.Qty) || 0);
    const uuid = generateUUID();
    console.log('my uuid:', uuid);
    this.entity.ShoppingCartItemId = uuid;
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Added to Cart",
        showConfirmButton: false,
        timer: 1500
    });
}

function addProductToCartReturn() {
    window.getItemsInCart.call(window.Menu);
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Adicionado ao carrinho",
        showConfirmButton: false,
        timer: 1500
    });
    window.trackFcPixelOnAddToCart && window.trackFcPixelOnAddToCart();
}

function getAtributs() {
    if (this.getField) {
        const products = this.getField('RepeaterProduct')[0]?.value || [];
        console.log('Products:', products);

        if (products.length > 0) {
            const { Price, OldPrice, PromotionalPrice } = products[0];
            formatPrices(Price, OldPrice, PromotionalPrice);
        }
    }
}

window.formatPrices = (price, oldPrice, promotionalPrice) => {
    // Adiciona um pequeno atraso para garantir que todos os elementos estejam prontos
    setTimeout(() => {
        const parseValue = (value) => {
            if (typeof value === 'string') {
                // Converte vírgula para ponto decimal para que parseFloat funcione
                value = value.replace(/\./g, '').replace(',', '.');
            }
            const parsed = parseFloat(value);
            return isNaN(parsed) ? null : parsed;
        };

        const formatCurrency = (value) => {
            if (value === null) return ''; // Retorna vazio para valores inválidos
            return new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            }).format(value);
        };

        const formattedPrice = formatCurrency(parseValue(price));
        const formattedOldPrice = formatCurrency(parseValue(oldPrice));

        console.log('Formatted Price:', formattedPrice);
        console.log('Formatted Old Price:', formattedOldPrice);

        // Atualiza todos os elementos `.currentPrice`
        document.querySelectorAll('.currentPrice').forEach((element) => {
            element.textContent = formattedPrice;
        });

        // Atualiza todos os elementos `.oldPrice` com base na promoção
        document.querySelectorAll('.oldPrice').forEach((element) => {
            if (promotionalPrice) {
                element.textContent = formattedOldPrice;
                element.style.display = 'block';
            } else {
                element.style.display = 'none';
            }
        });
    }, 400);
};




window.goToHome = () => {
    this.parent.menuClick({ FormId: 'Home' });
}

function generateUUID() {
    let dt = new Date().getTime();
    const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}

function goToVendorStore(vendorStoreId) {
    let vendorId = this.entity[vendorStoreId];
    this.session.VendorStoreId = vendorId;
    this.parent.menuClick({ FormId: 'Vendor Store Page' });
}

function goStore() {
    goToVendorStore.call(this, 'VendorStoreId');
}

function goStoreProduct() {
    goToVendorStore.call(this, 'VendorStoreId1');
}

function goStoreRecurrence() {
    goToVendorStore.call(this, 'VendorStoreId11');
}

function hideTabReviewProduct() {
    const tabToHide = document.querySelector('#pn_id_2_header_action');

    if (tabToHide) {
        tabToHide.style.display = 'none';
    }

}

function addToCartOffline() {
    cart = localStorage.getItem("cart");

    if (cart) {
        cartArray = JSON.parse(cart);
        if (!Array.isArray(cartArray)) {
            cartArray = [];
        }
    }
    this.entity.Qnt = this.entity.addQuantityToCart;

    const exists = cartArray.find(x => x.ProductId == this.entity.ProductId);
    if (exists) {
        exists.Qnt += 1;
    } else {
        cartArray.push(this.entity);
    }

    let aa = JSON.stringify(cartArray);
    localStorage.setItem("cart", JSON.stringify(cartArray));
    window.getItemsInCart.call(window.Menu);
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Adicionado ao carrinho",
        showConfirmButton: false,
        timer: 1000
    });
    window.trackFcPixelOnAddToCart && window.trackFcPixelOnAddToCart();
}

function calculateQuotation() {
    services = [];
    previousSelectedService = [];
    onChangeCotacaoRepeater();
}

function onChangeCotacaoRepeater() {
    console.log("changeCotacao");
    melhorEnvioAccounts = [];
    var melhorEnvioInfoArray = globalScope.getField('MelhorEnvioInfo');
    for (let accountData of melhorEnvioInfoArray) {
        melhorEnvioAccounts.push(accountData.value[0]);
    }

    console.log('AccountData', melhorEnvioInfoArray);

    const obj = buildShippingObjRequest.call(globalScope);
    const productsByVendor = obj.products.reduce((acc, product) => {
        const vendorId = product.vendorId;
        if (!acc[vendorId]) {
            acc[vendorId] = [];
        }
        acc[vendorId].push({
            id: product.id,
            width: product.width,
            height: product.height,
            length: product.length,
            weight: product.weight,
            quantity: product.quantity
        });
        return acc;
    }, {});

    previousZipCode = this.entity.Cep

    for (const vendorId in productsByVendor) {
        setTimeout(() => {
            melhorEnvioAccountPosition = 0;
            if (Object.hasOwnProperty.call(productsByVendor, vendorId)) {
                let value = melhorEnvioAccounts.find(item => item.VendorId1 === vendorId);
                if (!value) {
                    console.log('Vendor MelhorEnvio settings not found');
                    return;
                }

                console.log('Found Vendor MelhorEnvio');
                let foundAccount = false;
                melhorEnvioAccounts.forEach((item) => {
                    if (item.VendorId1 == vendorId) {
                        if (!melhorEnvioAccountPositionArray.includes(melhorEnvioAccountPosition)) {
                            melhorEnvioAccountPositionArray.push(melhorEnvioAccountPosition);
                        }
                        foundAccount = true;
                        return;
                    }

                    if (foundAccount == false) {
                        melhorEnvioAccountPosition = melhorEnvioAccountPosition + 1;
                    }
                });

                if (value?.AccessToken) {
                    globalScope.getField('MelhorEnvioInfo')[melhorEnvioAccountPosition].value[0].AccessToken = `Bearer ${value.AccessToken.replaceAll('Bearer', '')}`;
                    globalScope.getField('MelhorEnvioInfo')[melhorEnvioAccountPosition].value[0].From = obj.from;
                    globalScope.getField('MelhorEnvioInfo')[melhorEnvioAccountPosition].value[0].To = obj.to;
                    globalScope.getField('MelhorEnvioInfo')[melhorEnvioAccountPosition].value[0].Products = productsByVendor[vendorId];

                    debugger;
                    console.log('Send to melhor Envio of vendorID', vendorId);
                    console.log($('.CallMelhorEnvio button')[melhorEnvioAccountPosition]);
                    $('.CallMelhorEnvio button')[melhorEnvioAccountPosition].click();
                }
            }
        }, 1000);
    }
}

function buildShippingObjRequest() {
    console.log('Build Shipping');
    const products = this.getField('RepeaterProduct')[0].value;
    return {
        "from": {
            "postal_code": this.getField('MelhorEnvioInfo')[0].value[0]?.CepLoja
        },
        "to": {
            "postal_code": this.entity.Cep
        },
        "products": products?.map(x => {
            return {
                "id": x.ProductId,
                "width": x.Width,
                "height": x.Height,
                "length": x.Lenght,
                "weight": x.Weight,
                "quantity": x.addQuantityToCart,
                "vendorId": x.VendorId
            }
        })
    }
}

function renderShipping(response) {

    console.log('Services', this.getField('Services'));
    var position = melhorEnvioAccountPositionArray[0];
    console.log("position", position);
    shippingServices = this.getField('Services')[position].value;

    if (!Array.isArray(response)) {
        console.log('Not array. Error occurred.', response);
        return;
    }

    var values = [];
    for (let service of response) {
        if (!(service.hasOwnProperty('error'))) {
            values.push({
                ServiceVendorName: melhorEnvioAccounts[position].VendorCorporateName,
                VendorId: melhorEnvioAccounts[position].VendorId1,
                Name: service.name,
                ServiceId: service.id,
                Price1: moneyFormatter.format(service.price),
                Picture: service.company.picture,
                CompanyName: service.company.name,
                DeliveryRange: `De ${service.custom_delivery_range.min} a ${service.custom_delivery_range.max} Dias`,
                Position: position
            });
        }
    }

    console.log("mappedValues", values);
    var vendorIdsToCheck = [...new Set(shippingServices.map(service => service.VendorId))];

    for (let vendorId of vendorIdsToCheck) {
        let noMatchingVendorId = !values.some(service => service.VendorId == vendorId);

        if (noMatchingVendorId) {
            let servicesToAdd = shippingServices.filter(service => service.VendorId == vendorId);
            values.push(...servicesToAdd);
        }
    }

    let servicesRepeater = this.getField('Services');
    if (this.getField('Services')[position] == undefined) {
        var count = (this.getField('Services'))?.length || 0 - 1;

        while (count < position) {
            var oneServiceList = this.getField('Services')[position];
            oneServiceList.parentValues = melhorEnvioAccounts[count + 1];
            servicesRepeater.push({ ...oneServiceList });
            this.getField('Services').push({ ...oneServiceList });
            count = count + 1;
        }
    }

    this.getField('Services')[position].setValue(values);
    this.getField('Services')[position].detectChanges();
    services[melhorEnvioAccounts[position].VendorId1] = values;
    melhorEnvioAccounts[position].Services = values;
    melhorEnvioAccounts[position].Services = values;
    melhorEnvioAccountPositionArray.shift();
}

function onSelectedShippingService() {

    const scope = window.checkoutPageScope;
    const serviceId = this.entity.ServiceId;

    const thisVendorId = this.entity.VendorId;
    let previousShipping = scope.getField('Shipping').value;
    const selectedService = services[thisVendorId].find(x => x.ServiceId == serviceId && x.VendorId == thisVendorId);

    if (previousSelectedService == null) {
        previousSelectedService = [];
    }

    const selectedServiceAlreadyAdded = previousSelectedService.filter(x => x.ServiceId == serviceId && x.VendorId == thisVendorId);

    if (selectedServiceAlreadyAdded?.length > 0) {
        this.entity.ServiceUse = false;
        const selectedService = services[thisVendorId].find(x => x.ServiceId == serviceId && x.VendorId == thisVendorId);
        var totalPrice = previousSelectedService.reduce((total, service) => total + parseFloat(service.Price1.replace(/[^\d.,]/g, "").replace(",", ".")), 0);
        totalPrice = totalPrice - parseFloat(selectedService.Price1.replace(/[^\d.,]/g, "").replace(",", "."));
        window.attributeShippingValue(moneyFormatter.format(totalPrice));
        previousSelectedService = previousSelectedService.filter(x => !(x.ServiceId == serviceId && x.VendorId == thisVendorId));
        previousShipping = previousShipping.filter(x => x.selectedServiceId != serviceId && x.VendorId != thisVendorId);
        scope.getField('Shipping').setValue(previousShipping);
        this.getField('SelectedServiceId').setValue(previousSelectedService);
    }
    else {
        this.entity.ServiceUse = true;

        const selectedService = services[thisVendorId].find(x => x.ServiceId == serviceId && x.VendorId == thisVendorId);
        console.log('Selected service', selectedService);
        const customerInfo = scope.getField('CustomerInfo')[0].value[0];

        let combinedSelectedService;

        if (previousSelectedService != null && previousSelectedService?.length > 0) {
            combinedSelectedService = [...previousSelectedService, selectedService];
        }
        else {
            combinedSelectedService = [selectedService];
        }

        console.log('Services', this.getField('Services'));
        //const selectedServiceMapped = this.getField('Services')[0].value.find(x => x.ServiceId == selectedService.ServiceId && x.VendorId == selectedService.VendorId);
        const selectedServiceMapped = this.getField('Services')[selectedService.Position].value.find(x => x.ServiceId == selectedService.ServiceId && x.VendorId == selectedService.VendorId);

        const combinedShipping = Array.isArray(previousShipping) ? [...previousShipping, {
            amount: parseFloat(selectedService.Price1.replace(/[^\d.,]/g, "").replace(",", ".")).toFixed(2),
            vendorId: selectedServiceMapped.VendorId,
            selectedServiceId: selectedService.ServiceId,
            selectedServiceCompanyName: selectedService.CompanyName,
            selectedServiceName: selectedService.Name,
            description: customerInfo.Nome1,
            recipient_name: `${customerInfo.Nome1} ${customerInfo.Nome2}`,
            recipient_phone: customerInfo.Fone,
            address: {
                zip_code: this.entity.Cep
            }
        }] : [{
            amount: parseFloat(selectedService.Price1.replace(/[^\d.,]/g, "").replace(",", ".")).toFixed(2),
            description: customerInfo.Nome1,
            vendorId: selectedServiceMapped.VendorId,
            selectedServiceId: selectedService.ServiceId,
            selectedServiceCompanyName: selectedService.CompanyName,
            selectedServiceName: selectedService.Name,
            recipient_name: `${customerInfo.Nome1} ${customerInfo.Nome2}`,
            recipient_phone: customerInfo.Fone,
            address: {
                zip_code: this.entity.Cep
            }
        }];
    }
}

function customApiResponse() {
    console.log("customApiResponse CartPage For The Checkout", this.response);
    if (this.response?.length > 0 && this.response[0].id || fetchAddressState) {
        //fetchAddressState = false;
        //if (services?.length > 0) return;
        renderShipping.call(this, this.response)
    }
}


function getValueTest() {
    console.log(this.entity);
}

function noop() {
    console.log('test');
}

function translateRecurrentResponse() {
    const values = this.getField('RepeaterInfo')[0].value[0] || {};

    if (values) {
        let intervalId = setInterval(() => {
            const recurrentText = document.querySelector('.custom-RecurrentValue');

            if (recurrentText) {
                recurrentText.textContent = values.RecurrentValue ? 'Sim.' : 'Não.';
                clearInterval(intervalId);
            }
        }, 400);
    }

}
/* teste de correção */
window.onload = function () {
    var oldPrice = document.getElementById("oldPrice");
    var value = oldPrice; // exemplo do valor que você deseja inserir

    if (value) {
        oldPrice.innerHTML = "R$ " + value;
        oldPrice.classList.add("loaded");
    }
};
console.log (OldPrice)
/* /////////////////// */

