import $ from 'jquery';


export default function () {
	return new Promise(function (resolve, reject) {
		$.ajax({
			url: 'http://localhost:8010/index.php',
			dataType: 'json',
			cache: false
		})
			.success(function (data) {
				resolve(data);
			})
			.error(function () {
				reject('Error');
			});
	});
}
