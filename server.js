// set babel in entry file
require('babel-core/register')({
	presets: ['es2015-node6', 'stage-3']
});

require('./app');
