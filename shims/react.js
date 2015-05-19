'use strict';

var React = {};

if (typeof window !== 'undefined' && window.React) {
	React = window.React;
} else {
	console.warn('Include React from CDN: http://facebook.github.io/react/downloads.html#individual-downloads');
}

module.exports = React;
