/**
* Url.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

  	// id: { type: 'string'},
  	url: { type: 'string'},
  	questionID: { type: 'string'},
  	questionTitle: { type: 'string'},
  	questionText: { type: 'string'},
	  views:{type: 'integer', defaultsTo : 0}
  	
  }
};

