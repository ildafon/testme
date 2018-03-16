import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import getData from './getdata.js';

$(() => {
	svg4everybody();
});


$( document ).ready(function () {
	getData()
		.then(function (data) {
			console.log(data);
		})
		.catch(function (error) {
			console.error(error);
		});
});
