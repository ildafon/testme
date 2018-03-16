import {create as browserSync} from 'browser-sync';
import gulp from 'gulp';
import debuga from 'debuga';
import connectPHP from 'gulp-connect-php';

const bs = browserSync('server');
const {PORT, OPEN, NODE_ENV, TUNNEL} = process.env;

gulp.task('server', () => (
	bs.init({
		files: ['dist/**/*'],
		open: !!OPEN,
		reloadOnRestart: true,
		port: PORT || 3000,
		snippetOptions: {
			rule: {
				match: /<\/body>/i
			}
		},
		server: {
			baseDir: [
				'app/resources',
				'dist'
			],
			directory: false,
			middleware: NODE_ENV !== 'production' ? [debuga()] : []
		},
		tunnel: !!TUNNEL
	})
));

var cors = function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', '*');
	next();
};



gulp.task('php', () => (
	connectPHP.server( {
		base: 'dist',
		port: 8010,
		hostname: 'localhost',
		keepalive: true,
		middleware: function () {
			return [cors];
		}

	})
));
