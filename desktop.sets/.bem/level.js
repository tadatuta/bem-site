exports.baseLevelPath = require.resolve('../../bem-pr/bem/levels/sets.js');

exports.getTechs = function() {

    return require('bem').util.extend(this.__base() || {}, {
        'examples' : '../../.bem/techs/examples.js'
    });

};
