var PATH = require('path'),
    BEM = require('bem'),
    environ = require('../environ');

exports.baseLevelPath = environ.getLibPath('bem-gen-doc', '.bem/levels/sets.js');

exports.getTechs = function() {
    return BEM.util.extend(this.__base() || {}, {
        'examples' : PATH.resolve(environ.PRJ_ROOT, '.bem/techs/examples.js')
    });
};
