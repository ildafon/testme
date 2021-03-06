import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import getData from './getdata.js';
import Swiper from 'swiper';

$(() => {
	svg4everybody();
});


$( document ).ready(function () {

	getData()
		.then(function (data) {
			const mySwiper = new Swiper('.swiper-container', {
				spaceBetween: 30,
				slidesPerView: 2.64,
				loop: true,
				loopedSlides: data.length,
				breakpoints: {
					1919: {
						slidesPerView: 1.3,
						spaceBetween: 25,
						slidesOffsetBefore: 50,
						slidesOffsetAfter: 10
					}
				},
				navigation: {
					prevEl: '.swiper-button-prev',
					nextEl: '.swiper-button-next'
				}

			});
			console.log(data);
			for (const i in data){
				mySwiper.appendSlide(
					`<div class="swiper-slide" style="background-image: url(${data[i].image})">
						<div class="swiper-slide__title">${data[i].title}</div>
						<div class="swiper-slide__director">${data[i].director}</div>
					</div>`
				);
			}
			mySwiper.init();
		})
		.catch(function (error) {
			console.error(error);
		});
});
