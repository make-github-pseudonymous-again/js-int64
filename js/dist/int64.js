(function(exports, undefined){

	'use strict';


/* js/src/compare.js */

var compare = function ( a , b ) {

	return ( a[0] ^ b[0] ) & 0x80000000 ? ( a[0] > b[0] ? -1 : 1 ) :
	       a[0] < b[0] ? -1 : a[0] > b[0] ? 1 :
	       a[1] < b[1] ? -1 : a[1] > b[1] ? 1 : 0 ;

} ;

exports.compare = compare ;


/* js/src/limits.js */

/** -2^63 */
exports.min = [ 0x80000000 , 0x00000000 ] ;

/** 2^63 - 1 */
exports.max = [ 0x7fffffff , 0xffffffff ] ;

})(typeof exports === 'undefined' ? this['int64'] = {} : exports);
