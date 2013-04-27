var PATH = require('path'),

    pjoin = PATH.join,
    presolve = PATH.resolve.bind(null, __dirname),

    PRJ_ROOT = presolve('../../'),

    PRJ_TECHS = presolve('../techs/'),
    BEMBL_TECHS = pjoin(PRJ_ROOT, 'bem-bl/blocks-common/i-bem/bem/techs');


exports.getTechs = function() {

    return {
        'js'            : pjoin(BEMBL_TECHS, 'js.js'),
        'css'           : 'css',
        'ie.css'        : 'ie.css',
        'ie6.css'       : 'ie6.css',
        'ie7.css'       : 'ie7.css',
        'ie8.css'       : 'ie8.css',
        'ie9.css'       : 'ie9.css',

        'bemhtml'       : pjoin(BEMBL_TECHS, 'bemhtml.js'),

        'examples'      : '',
        'title.txt'     : pjoin(PRJ_TECHS, 'i18n.title.txt'),
        'desc.wiki'     : pjoin(PRJ_TECHS, 'i18n.desc.wiki')
    };

};

exports.defaultTechs = ['css', 'js', 'bemhtml'];
