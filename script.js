document.querySelector('#todo-list').addEventListener('click', function (e) {
	if (e.target.tagName === "A") {
		let text = prompt('Text');
		e.target.previousElementSibling.innerHTML = text;
	}
});

document.querySelector('#numbers').addEventListener('click', function (e) {
	let inp = document.querySelector('.inp')
	if (e.target.tagName === "A") {
		let res = e.target.innerHTML;
		inp.value = res * res;
	}
})



document.querySelector('#menuList').addEventListener('click', function (e) {
	if (e.target.tagName === "LI") {
		e.target.style.textDecoration = 'underline';
	}
})
let num = 3
document.querySelector('#btnAdd').addEventListener('click', function (e) {
	let ul = document.querySelector('#menuList');
	num++;
	ul.insertAdjacentHTML(
		'beforeend',
		`<li>task ${num}</li>`
	)

});


document.querySelector('form').addEventListener('focusout', function (e) {
	if (e.target.tagName === 'INPUT') {


		let text = e.target.dataset.length;

		if (text < e.target.value.length) {
			if (e.target.parentNode.lastElementChild.tagName === 'P') {
				e.target.parentNode.lastElementChild.remove();
			}

		}

		if (text > e.target.value.length) {
			e.target.parentNode.insertAdjacentHTML(
				'beforeend',
				'<p>Неправильное количество символов. Необходимо ввести 3 символа</p>'
			)
		}
	}
})


// Task 5=======================

document.querySelector('#current-cart').addEventListener('click', function (e) {
	let inpRes = document.querySelector('.total');
	if (e.target.tagName === 'A') {
		if (e.target.innerHTML === '-1') {
			if (inpRes.value > 0) {
				inpRes.value--;
			}

		}
		if (e.target.innerHTML === '+1') {
			inpRes.value++;
		}
	}
	if (e.target.className === 'waves-effect waves-light btn my') {
		// добавлен класс my для того чтобы срабатывало именно при нажатии на посчитать результат, так как у всех кнопок такой класс
		let res = document.querySelector('#current-total');
		let price = document.querySelector('.price').innerHTML;
		let inpRes = document.querySelector('.total');

		res.innerHTML = inpRes.value * price;
	}
})


// Task 6 =======================



document.querySelector('#current-cart-items').addEventListener('click', function (e) {

	if (e.target.dataset.btn === 'btn-neg') {
		if (e.target.nextElementSibling.value > 0) {
			e.target.nextElementSibling.value--;
		}
	}
	if (e.target.dataset.btn === 'btn-pos') {
		e.target.previousElementSibling.value++;
	}
	if (e.target.className === 'waves-effect waves-light btn my1') {
		let res = document.querySelector('#current-total-items');
		let price = document.querySelectorAll('#current-cart-items .price');
		let inpRes = document.querySelectorAll('#current-cart-items .total');
		let resItem = 0;
		inpRes.forEach(function (elem, index) {
			resItem += Number(elem.value) * Number(price[index].innerHTML);
		})
		res.innerHTML = resItem;
	}

})


// Task 7 =======================

document.querySelector('body').addEventListener('keydown', function (e) {
	if (e.target.name === 'input-info') {
		if (e.key === 'Enter') {
			if (e.target.value.length < 3) {
				if (e.target.parentNode.lastElementChild.tagName === "SPAN") {
					e.target.parentNode.lastElementChild.remove();
				}
				e.target.parentNode.insertAdjacentHTML(
					'beforeend',
					'<p>Неправильное количество символов. Необходимо ввести 3 символа</p>'
				)
			}
			if (e.target.value.length >= 3) {
				if (e.target.parentNode.lastElementChild.tagName === "P" || e.target.parentNode.lastElementChild.tagName === "SPAN") {
					e.target.parentNode.lastElementChild.remove();
				}

				e.target.parentNode.insertAdjacentHTML(
					'beforeend',
					`<span>${e.target.value}</span>`
				)
				e.target.value = '';
			}
		}
	}
})