/**
 * Created by naver on 2016/5/13.
 */

var moduleA  = require('./moduleA.js');
var moduleB  = require('./moduleA.js');

/**
 * Ouput is as follows, which means the code executed in moduleA will only be executed once.
 * $ node Consumer.js
 *  exports succ
 */
