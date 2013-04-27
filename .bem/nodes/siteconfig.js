var PATH = require('path'),
    registry = require('bem/lib/nodesregistry'),
    environ = require('../environ');

/**
 * Сборка страниц сайта
 */
registry.decl('MachineBundleNode', {

    // Пример добавления своего уровня в сборку страниц сайта
    // см. `mecano.blocks`
    /*
    getLevels : function(tech) {

        return [
            'bem-bl/blocks-common',
            'bem-bl/blocks-desktop'
            'bem-gen-doc/common.blocks'
            'bem-gen-doc/site.blocks'
        ]
        .map(PATH.join.bind(null, environ.LIB_ROOT))
        .concat([PATH.resolve(environ.PRJ_ROOT, 'mecano.blocks')]);

    }
    */

});


/**
 * Сборка примеров
 */
registry.decl('MachineExampleNode', {

    getTechs: function() {

        return [
            'bemjson.js',
            'bemdecl.js',
            'deps.js',
            'css',
            'ie.css',
            'ie6.css',
            'ie7.css',
            'ie8.css',
            'ie9.css',
            'js',
            'bemhtml',
            'html'
        ];
    },

    getLevels : function() {

        return ([
                'bem-bl/blocks-common',
                'bem-bl/blocks-desktop',
                'bem-controls/common.blocks',
                'bem-controls/desktop.blocks',
                'islands-controls/common.blocks',
                'islands-controls/desktop.blocks'
             ])
            .map(PATH.join.bind(null, environ.LIB_ROOT))
            .concat([
                    'common.blocks',
                    'desktop.blocks'
                ].map(PATH.resolve.bind(null, this.root)))
            .concat([PATH.resolve(this.root, PATH.dirname(this.getNodePrefix()), 'blocks')]);

    }

});
