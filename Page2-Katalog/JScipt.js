const input = document.getElementById('ss');
const input1 = document.getElementById('ss1');

input.addEventListener('keydown', function(event) {
	// Разрешаем: backspace, delete, tab и escape
	if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
		// Разрешаем: Ctrl+A
		(event.keyCode == 65 && event.ctrlKey === true) ||
		// Разрешаем: home, end, влево, вправо
		(event.keyCode >= 35 && event.keyCode <= 39)) {
		
		// Ничего не делаем
		return;
	} else {
		// Запрещаем все, кроме цифр на основной клавиатуре, а так же Num-клавиатуре
		if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
			event.preventDefault();
		}
	}
});

input1.addEventListener('keydown', function(event) {
	// Разрешаем: backspace, delete, tab и escape
	if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
		// Разрешаем: Ctrl+A
		(event.keyCode == 65 && event.ctrlKey === true) ||
		// Разрешаем: home, end, влево, вправо
		(event.keyCode >= 35 && event.keyCode <= 39)) {
		
		// Ничего не делаем
		return;
	} else {
		// Запрещаем все, кроме цифр на основной клавиатуре, а так же Num-клавиатуре
		if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
			event.preventDefault();
		}
	}
});
	

document.getElementById('ss').value = "";
document.getElementById('ss1').value = "";


// 
// Модальное окно

// Открыть модальное окно
document.getElementById("open-modal-btn").addEventListener("click", function() {
	document.getElementById("my-modal").classList.add("open")
  })
  
  document.getElementById("pasword").addEventListener("click", function() {
	document.getElementById("my-modal1").classList.add("open")
  })
  
  document.getElementById("pasword").addEventListener("click", function() {
	document.getElementById("my-modal").classList.remove("open")
  })
  
  // Закрыть модальное окно
  document.getElementById("close-my-modal-btn").addEventListener("click", function() {
	document.getElementById("my-modal").classList.remove("open")
  })
  document.getElementById("close-my-modal-btn1").addEventListener("click", function() {
	document.getElementById("my-modal1").classList.remove("open")
  })
  // Закрыть модальное окно при нажатии на Esc
  window.addEventListener('keydown', (e) => {
	if (e.key === "Escape") {
		document.getElementById("my-modal").classList.remove("open")
	}
  });
  window.addEventListener('keydown', (e) => {
	if (e.key === "Escape") {
		document.getElementById("my-modal1").classList.remove("open")
	}
  });
  // Закрыть модальное окно при клике вне его
  document.querySelector("#my-modal .modal__box").addEventListener('click', event => {
	event._isClickWithInModal = true;
  });
  document.getElementById("my-modal").addEventListener('click', event => {
	if (event._isClickWithInModal) return;
	event.currentTarget.classList.remove('open');
  });
  document.querySelector("#my-modal1 .modal__box").addEventListener('click', event => {
	event._isClickWithInModal = true;
  });
  document.getElementById("my-modal1").addEventListener('click', event => {
	if (event._isClickWithInModal) return;
	event.currentTarget.classList.remove('open');
  });

// Каталог-Товаров


var products = [
    {
      name: 'Товар 1',
      price: 10,
      image: 'product1.jpg'
    },
    {
      name: 'Товар 2',
      price: 20,
      image: 'product2.jpg'
    },
    {
      name: 'Товар 3',
      price: 30,
      image: 'product3.jpg'
    },
    {
        name:'Товар 4',
        price: 20,
        image:'pro'
    },
	{
		name: 'Товар 5',
		price: 10,
		image: 'product1.jpg'
	  },
	  {
		name: 'Товар 6',
		price: 20,
		image: 'product2.jpg'
	  },
	  {
		name: 'Товар 7',
		price: 30,
		image: 'product3.jpg'
	  },
	  {
		  name:'Товар 8',
		  price: 20,
		  image:'pro'
	  }
	  ,
	  {
		  name:'Товар 9',
		  price: 20,
		  image:'pro'
	  }
	]
  
  // Функция для создания элемента товара
  function createProductElement(product) {
    var item = document.createElement('div');
    item.className = 'item';
  
    var name = document.createElement('h2');
    name.textContent = product.name;
    item.appendChild(name);
  
    var price = document.createElement('p');
    price.textContent = 'Цена: ' + product.price + ' руб.';
    item.appendChild(price);
  
    var image = document.createElement('img');
    image.src = product.image;
    item.appendChild(image);
  
    return item;
  }
  
  // Получаем ссылку на контейнер каталога
  var catalogContainer = document.getElementById('catalog');
  
  // Создаем элементы для каждого товара и добавляем их в каталог
  products.forEach(function(product) {
    var productElement = createProductElement(product);
    catalogContainer.appendChild(productElement);
  });