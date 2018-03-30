/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	'use strict';
	import $ from 'jquery';

	$('.availability-toggle-button').each((i, e) => {
	  const button = $(e);
	  button.click(() => {
	    const scheduleId = button.data('schedule-id');
	    const userId = button.data('user-id');
	    const candidateId = button.data('candidate-id');
	    const availability = parseInt(button.data('availability'));
	    const nextAvailability = (availability + 1) % 3;
	    $.post(`/schedules/${scheduleId}/users/${userId}/candidates/${candidateId}`,
	      { availability: nextAvailability },
	      (data) => {
	        button.data('availability', data.availability);
	        const availabilityLabels = ['欠', '？', '出'];
	        button.text(availabilityLabels[data.availability]);
	      });
	  });
	});

	const buttonSelfComment = $('#self-comment-button');
	buttonSelfComment.click(() => {
	  const scheduleId = buttonSelfComment.data('schedule-id');
	  const userId = buttonSelfComment.data('user-id');
	  const comment = prompt('コメントを255文字以内で入力してください。');
	  if (comment) {
	    $.post(`/schedules/${scheduleId}/users/${userId}/comments`,
	      { comment: comment },
	      (data) => {
	        $('#self-comment').text(data.comment);
	      });
	  }
	});


/***/ })
/******/ ]);