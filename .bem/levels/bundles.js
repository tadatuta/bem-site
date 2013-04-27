var PATH = require('path'),

    pjoin = PATH.join,
    presolve = PATH.resolve.bind(null, __dirname),

    PRJ_ROOT = presolve('../../'),

    PRJ_TECHS = presolve('../techs/'),
    BEMBL_TECHS = pjoin(PRJ_ROOT, 'bem-bl/blocks-common/i-bem/bem/techs');


exports.getTechs = function() {

    return {
        'bemjson.js'    : pjoin(PRJ_TECHS, 'bemjson.js'),
        'bemdecl.js'    : 'bemdecl.js',
        'deps.js'       : 'deps.js',
        'js'            : 'js-i',
        'css'           : 'css',
        'ie.css'        : 'ie.css',
        'ie6.css'       : 'ie6.css',
        'ie7.css'       : 'ie7.css',
        'ie8.css'       : 'ie8.css',
        'ie9.css'       : 'ie9.css',

        'i18n'          : pjoin(BEMBL_TECHS, 'i18n.js'),
        'i18n.js'       : pjoin(BEMBL_TECHS, 'i18n.js.js'),
        'i18n.html'     : pjoin(BEMBL_TECHS, 'i18n.html.js'),
        'i18n.js+bemhtml' : pjoin(PRJ_TECHS, 'i18n.js+bemhtml.js'),

        'bemhtml'       : pjoin(BEMBL_TECHS, 'bemhtml.js'),
        'html'          : pjoin(BEMBL_TECHS, 'html.js')
    };

};


// Create bundles in bemjson.js tech
exports.defaultTechs = ['bemjson.js'];

