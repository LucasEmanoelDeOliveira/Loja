const products = [
    { id: 1, name: 'Pinata', price: 'R$ 13.00', image: './images/Pinata.png', on: true},
    { id: 2, name: 'Nuclear Waste', price: 'R$ 0,30', image: './images/NuclearWaste.png', on: true},
    { id: 3, name: 'Smash Bros', price: 'R$ 0,30', image: './images/SmashBros.png', on: true},
    { id: 4, name: 'S\'Mores', price: 'R$ 0,15', image: './images/Smores.png', on: true},
    { id: 5, name: 'Fairy Tale Book', price: 'R$ 2,00', image: './images/Fairy.png', on: true},
    { id: 6, name: 'Mycelium Mallet', price: 'R$ 2,00', image: './images/Mycelium.png', on: true},
    { id: 7, name: 'Fungal Thumper', price: 'R$ 2,00', image: './images/Fungal.png', on: true},
    { id: 8, name: 'Ancient Portal', price: 'R$ 2,00', image: './images/Ancient.png', on: true},
    { id: 9, name: '7th Anniversary', price: 'R$ 2,70', image: './images/7th.png', on: true},
    { id: 10, name: 'Owl Tree', price: 'R$ 1,50', image: './images/OwlTree.png', on: true},
    { id: 11, name: 'Lunar Witch Broom', price: 'R$ 1,50', image: './images/Lunar.png', on: true},
    { id: 12, name: 'Solar Witch Broom', price: 'R$ 1,50', image: './images/Solar.png', on: true},
    { id: 13, name: 'Book Of Fortunes', price: 'R$ 1,70', image: './images/Fortunes.png', on: true},
    { id: 14, name: 'Autumn Crops', price: 'R$ 1,70', image: './images/Autum.png', on: true},
    { id: 15, name: '2020', price: 'R$ 3,00', image: './images/2020.png', on: true},
    { id: 16, name: '2021', price: 'R$ 3,00', image: './images/2021.png', on: true},
    { id: 17, name: 'Jingle Bells', price: 'R$ 1,70', image: './images/Jingle.png', on: true},
    { id: 18, name: 'Pinecone', price: 'R$ 1,00', image: './images/Pinecone.png', on: true},
    { id: 19, name: 'Cocoa', price: 'R$ 0,60', image: 'https://images.emojiterra.com/google/android-10/512px/1f937-2640.png', on: true},
    { id: 20, name: 'Winter Breeze', price: 'R$ 1,00', image: './images/Winter.png', on: true},
    { id: 21, name: '2023', price: 'R$ 2,50', image: './images/2023.png', on: true},
    { id: 22, name: 'Gingerbread House', price: 'R$ 1,00', image: './images/Ginger.png', on: true},
    { id: 23, name: 'Festive Train', price: 'R$ 1,00', image: './images/FestiveT.png', on: true},
    { id: 24, name: 'Winter Train', price: 'R$ 1,00', image: './images/WinterT.png', on: true},
    { id: 25, name: 'Ice Sleigh', price: 'R$ 1,00', image: './images/Ice.png', on: true},
    { id: 26, name: 'Eggnog Machine', price: 'R$ 1,50', image: './images/Eggnog.png', on: true},
    { id: 27, name: '2024', price: 'R$ 1,70', image: './images/2024.png', on: true},
    { id: 28, name: 'Irish Harp', price: 'R$ 2,00', image: './images/Irish.png', on: true},
    { id: 29, name: 'Watering Can', price: 'R$ 2,00', image: './images/Wate.png', on: true},
    { id: 30, name: 'VIP', price: 'R$ 0,50', image: './images/VIP.png', on: true},
    { id: 31, name: 'Cash', price: 'R$ 0,50', image: './images/Money.png', on: true},
    { id: 32, name: 'Penhasco Vermelho (red cliff)', price: 'R$ 0,50', image: './images/Cliff.png', on: true},
    { id: 33, name: 'Aranha da Caverna (cave spider)', price: 'R$ 0,50', image: './images/CaveSpider.png', on: true},
    { id: 34, name: 'Squeaky Blue', price: 'R$ 0,50', image: './images/BlueSqueaky.png', on: true},
    { id: 35, name: 'Squeaky Red', price: 'R$ 0,50', image: './images/RedSqueaky.png', on: true},
    { id: 36, name: 'Stratis', price: 'R$ 2,00', image: './images/Statris.png', on: true},
    { id: 37, name: 'Dark Mansion', price: 'R$ 2,00', image: './images/DarkMansion.png', on: true},
    { id: 38, name: 'Forbidden Fortress', price: 'R$ 2,00', image: 'https://images.emojiterra.com/google/android-10/512px/1f937-2640.png', on: true},
    { id: 39, name: 'Doces de Chocolate (Chocolate sweets)', price: 'R$ 0,50', image: 'https://images.emojiterra.com/google/android-10/512px/1f937-2640.png', on: true},
    { id: 40, name: 'Demon Blood', price: 'R$ 1,00', image: './images/DemonBlood.png', on: true},
    { id: 41, name: 'Zombie Brain Jar', price: 'R$ 1,00', image: './images/Zombie.png', on: true},
    { id: 42, name: 'Frankenstein\'s Brain Jar', price: 'R$ 1,00', image: './images/Frank.png', on: true},
    { id: 43, name: 'Magical Voodoo', price: 'R$ 1,50', image: './images/Magical.png', on: true},
    { id: 44, name: 'Fruitcake', price: 'R$ 0,50', image: './images/CF.png', on: true},
    { id: 45, name: 'Holly Berry', price: 'R$ 0,50', image: './images/Hooly.png', on: true},
    { id: 46, name: 'Sour Snowcone', price: 'R$ 1,50', image: './images/Sour.png', on: true},
    { id: 47, name: 'Sweet Snowcone', price: 'R$ 1,50', image: './images/Snowcane.png', on: true},
    { id: 48, name: 'Teddy Bear Present', price: 'R$ 1,50', image: './images/Te.png', on: true},
    { id: 49, name: 'Polar Bear Present', price: 'R$ 1,50', image: './images/Pe.png', on: true},
    { id: 50, name: 'Sunlit Butterflies', price: 'R$ 2,00', image: 'https://images.emojiterra.com/google/android-10/512px/1f937-2640.png', on: true},
    { id: 51, name: 'Moonlit Butterflies', price: 'R$ 2,00', image: 'https://images.emojiterra.com/google/android-10/512px/1f937-2640.png', on: true},
    { id: 52, name: 'Ocean Blue', price: 'R$ 0,50', image: './images/OceanBlue.png', on: true},
    { id: 53, name: 'Arco-íris Omega (Rainbow Omega)', price: 'R$ 0,20', image: './images/RO.png', on: true},
    { id: 54, name: 'Elemento Estranho (Strange Element)', price: 'R$ 0,20', image: './images/SE.png', on: true},
    { id: 55, name: 'Wanwood', price: 'R$ 0,20', image: './images/WW.png', on: true},
    { id: 56, name: 'Viridian', price: 'R$ 0,50', image: './images/Viridian.png', on: true},
    { id: 57, name: 'Em branco (White)', price: 'R$ 0,25', image: 'https://images.emojiterra.com/google/android-10/512px/1f937-2640.png', on: true},
    { id: 58, name: 'Moo Moo', price: 'R$ 0,20', image: './images/MooMoo.png', on: true},
    { id: 59, name: 'Chocolate Moo Moo', price: 'R$ 0,20', image: './images/CMooMoo.png', on: true},
    { id: 60, name: 'Strawberry Moo', price: 'R$ 0,20', image: './images/SMooMoo.png', on: true},
    { id: 61, name: 'Xeno', price: 'R$ 1,00', image: './images/Xeno.png', on: true},
    { id: 62, name: 'Nebula', price: 'R$ 1,50', image: './images/N.png', on: true},
    { id: 63, name: 'Galaxy Clouds', price: 'R$ 1,50', image: './images/GC.png', on: true},
    { id: 64, name: 'Bubble Tea', price: 'R$ 1,50', image: './images/BT.png', on: true},
    { id: 65, name: 'Queen Of Hearts', price: 'R$ 1,50', image: 'https://images.emojiterra.com/google/android-10/512px/1f937-2640.png', on: true},
    { id: 66, name: 'Sombra do Pesadelo (Nightmare Shadow)', price: 'R$ 0,90', image: './images/Night.png', on: true},
    { id: 67, name: 'Diabo Pequeno (lil\' Evil)', price: 'R$ 0,90', image: './images/Lil.png', on: true},
    { id: 68, name: 'Plasma Core', price: 'R$ 0,50', image: './images/Plasma.png', on: true},
    { id: 69, name: 'Ice Core', price: 'R$ 0,50', image: './images/IceC.png', on: true},
    { id: 70, name: 'Tidal Waves', price: 'R$ 1,00', image: './images/Tidal.png', on: true},
    { id: 71, name: 'Unicorn Starlight', price: 'R$ 1,00', image: 'https://images.emojiterra.com/google/android-10/512px/1f937-2640.png', on: true},
    { id: 72, name: 'Magical Mushroom', price: 'R$ 1,00', image: 'https://images.emojiterra.com/google/android-10/512px/1f937-2640.png', on: true},
    { id: 73, name: 'Starry Sky', price: 'R$ 1,00', image: 'https://images.emojiterra.com/google/android-10/512px/1f937-2640.png', on: true},
    { id: 74, name: 'Abóbora (Pumpking)', price: 'R$ 0,50', image: './images/Pump.png', on: true},
    { id: 75, name: 'Preto e Branco (White and Black)', price: 'R$ 0,20', image: './images/WB.png', on: true},
    { id: 76, name: 'Abóbora da Meia Noite (Midnight Pumpking)', price: 'R$ 0,20', image: './images/PM.png', on: true},
    { id: 77, name: 'Neon Pink', price: 'R$ 0,25', image: './images/NP.png', on: true},
    { id: 78, name: 'Dark Devil', price: 'R$ 0,50', image: './images/DE.png', on: true},
    { id: 79, name: 'Trick', price: 'R$ 0,25', image: './images/Tricky', on: true},
    { id: 80, name: 'Mummy Bandages', price: 'R$ 0,20', image: './images/MB.png', on: true},
    { id: 81, name: 'Malha Verde (Green mesh)', price: 'R$ 0,15', image: 'https://images.emojiterra.com/google/android-10/512px/1f937-2640.png', on: true},
    { id: 82, name: 'Winter Plaid', price: 'R$ 0,15', image: './images/WP.png', on: true},
    { id: 83, name: 'Yeti', price: 'R$ 0,50', image: './images/Yeti.png', on: true},
    { id: 84, name: 'Winter Swirl', price: 'R$ 0,30', image: './images/WinterS.png', on: true},
    { id: 85, name: 'Hot Cocoa', price: 'R$ 0,45', image: './images/Cocoa.png', on: true},
    { id: 86, name: 'Christmas Cracker', price: 'R$ 0,45', image: './images/CC.png', on: true},
    { id: 87, name: 'Snow Forest', price: 'R$ 0,45', image: 'https://images.emojiterra.com/google/android-10/512px/1f937-2640.png', on: true},
    { id: 88, name: 'Pixel Christmas', price: 'R$ 0,15', image: 'https://images.emojiterra.com/google/android-10/512px/1f937-2640.png', on: true},
    { id: 89, name: 'Frosted', price: 'R$ 0,20', image: 'https://images.emojiterra.com/google/android-10/512px/1f937-2640.png', on: true},
    { id: 90, name: 'Spring Plaid', price: 'R$ 0,50', image: './images/SP.png', on: true},
    { id: 91, name: 'Strawberries', price: 'R$ 0,50', image: 'https://images.emojiterra.com/google/android-10/512px/1f937-2640.png', on: true},
    { id: 92, name: 'Tulips', price: 'R$ 0,50', image: 'https://images.emojiterra.com/google/android-10/512px/1f937-2640.png', on: true},
    { id: 93, name: 'Sunflowers', price: 'R$ 0,50', image: 'https://images.emojiterra.com/google/android-10/512px/1f937-2640.png', on: true}
];

const cartItems = [];
let currentPage = 1;
const itemsPerPage = 12;
let filteredProducts = [...products]; // Array de produtos filtrados
const quantityLabel = document.getElementById('quantityOfItensLabel');

function generateProducts() {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = ''; // Limpa a lista de produtos

    // Calcula o índice de início e fim com base na página atual
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedProducts = filteredProducts.slice(start, end); // Obtém os produtos da página atual

    paginatedProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        const productImg = document.createElement('img');
        productImg.src = product.image;
        productDiv.appendChild(productImg);

        const productTitle = document.createElement('h2');
        productTitle.textContent = product.name;
        productDiv.appendChild(productTitle);

        const productPrice = document.createElement('h4');
        productPrice.textContent = product.price;
        productDiv.appendChild(productPrice);

        if (product.on) {
            const addButton = document.createElement('button');
            addButton.innerHTML = `<img src="https://cdn-icons-png.flaticon.com/128/1170/1170627.png"> Adicionar ao Carrinho`;
            addButton.addEventListener('click', () => {
                addToCart(product);
            });
            productDiv.appendChild(addButton);
        } else {
            const soldOutOverlay = document.createElement('div');
            soldOutOverlay.textContent = "ESGOTADO";
            soldOutOverlay.classList.add('sold-out-overlay');
            productDiv.appendChild(soldOutOverlay);
        }

        productsContainer.appendChild(productDiv);
    });

    updatePagination(); // Atualiza a navegação
}

function addToCart(product) {
    const existingItem = cartItems.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cartItems.push({ ...product, quantity: 1 });
        let currentQuantity = parseInt(quantityLabel.textContent);
        currentQuantity++;
        quantityLabel.textContent = currentQuantity;
        playAudio()
        showNotification('Produto adicionado do carrinho !')
    }

    updateCartDisplay();
}

function removeFromCart(productId) {
    const itemIndex = cartItems.findIndex(item => item.id === productId);

    if (itemIndex !== -1) {
        const item = cartItems[itemIndex];

        if (item.quantity > 1) {
            item.quantity -= 1;
            let currentQuantity = parseInt(quantityLabel.textContent);
            currentQuantity -= 1;
            quantityLabel.textContent = currentQuantity;
            showNotification('Produto removido do carrinho !')
            playAudio()
        } else {
            cartItems.splice(itemIndex, 1);
            item.quantity -= 1;
            let currentQuantity = parseInt(quantityLabel.textContent);
            currentQuantity--;
            quantityLabel.textContent = currentQuantity;
            showNotification('Produto removido do carrinho !')
            playAudio()
        }
        
        updateCartDisplay();
    }
}

function filterProducts() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchInput) 
    );

    currentPage = 1; // Reseta a página atual para a primeira ao filtrar
    generateProducts(); // Gera os produtos filtrados
}

function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cartItems');
    cartItemsContainer.innerHTML = '';

    let total = 0; // Inicializa o total

    if (cartItems.length === 0) {
        const emptyMessage = document.createElement('h2');
        emptyMessage.style.textAlign = 'center'; 
        cartItemsContainer.appendChild(emptyMessage);

        return;
    }

    cartItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.style.backgroundColor = 'white'; 
        itemDiv.style.padding = '10px'; 
        itemDiv.style.marginBottom = '10px'; 
        itemDiv.style.borderRadius = '5px'; 
        itemDiv.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)'; 

        const productName = document.createElement('h3');
        productName.textContent = `${item.name} (${item.quantity}x)`;
        itemDiv.appendChild(productName);

        const productPrice = document.createElement('p');
        productPrice.textContent = item.price; 
        itemDiv.appendChild(productPrice);

        const removeButton = document.createElement('button');
        removeButton.innerHTML = '🗑️';
        removeButton.style.backgroundColor = '#87CEFA';
        removeButton.style.padding = '5px';
        removeButton.style.border = 'none';
        removeButton.style.borderRadius = '30px';
        removeButton.style.cursor = 'pointer';
        removeButton.addEventListener('click', () => {
            removeFromCart(item.id);
        });
        itemDiv.appendChild(removeButton);

        cartItemsContainer.appendChild(itemDiv);

        const itemPrice = parseFloat(item.price.replace('R$ ', '').replace(',', '.'));
        total += itemPrice * item.quantity;
    });

    const totalDiv = document.createElement('h1');
    totalDiv.textContent = `Total: R$ ${total.toFixed(2).replace('.', ',')}`;
    cartItemsContainer.appendChild(totalDiv);

    const endBuy = document.createElement('button');
    endBuy.textContent = 'Finalizar Compra';
    endBuy.style.width = '100%';
    endBuy.style.height = '30px';
    endBuy.style.border = 'none';
    endBuy.style.backgroundColor = '#87CEFA';
    endBuy.style.borderRadius = '5px';
    endBuy.style.color = 'White';
    endBuy.style.fontSize = '1.2em';
    endBuy.style.fontWeight = 'bold';
    endBuy.style.cursor = 'pointer';
    endBuy.style.marginTop = '30px';
    endBuy.addEventListener('click', () => {
        window.open('https://wa.me/553186609350', '_blank'); 
    });
    cartItemsContainer.appendChild(endBuy);
}


function updatePagination() {
    const prevPageButton = document.getElementById('prevPage');
    const nextPageButton = document.getElementById('nextPage');
    const pageInfo = document.getElementById('pageInfo');

    pageInfo.textContent = `${currentPage}/${Math.ceil(products.length / itemsPerPage)}`;
    pageInfo.style.fontSize = 'bold'
    pageInfo.style.color = 'White'

    prevPageButton.disabled = currentPage === 1;
    nextPageButton.disabled = currentPage === Math.ceil(products.length / itemsPerPage);
}


document.getElementById('prevPage').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        generateProducts();
    }
});

document.getElementById('nextPage').addEventListener('click', () => {
    if (currentPage < Math.ceil(products.length / itemsPerPage)) {
        currentPage++;
        generateProducts();
    }
});

document.getElementById('searchInput').addEventListener('input', (event) => {
    const query = event.target.value.toLowerCase(); // Obtém o texto da busca
    filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(query) // Filtra os produtos com base na busca
    );
    currentPage = 1; // Reseta para a primeira página
    generateProducts(); // Regenera os produtos
});

generateProducts();

const cartContainer = document.getElementById('cart-container');
const sidebar = document.getElementById('sidebar');
const closeSidebar = document.getElementById('closeSidebar');

cartContainer.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

// Fecha o sidebar ao clicar no botão "X"
closeSidebar.addEventListener('click', () => {
    sidebar.classList.remove('active');
});

function playAudio() {
    var audio = document.getElementById("Notification");
    audio.play();
  }

  function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.classList.add('show');

    // Oculta a notificação após 3 segundos
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}