BEM.DOM.decl('notification', {

    onSetMod : {

        js : function() {

            var _this = this;

            BEM.blocks['i-global'].param('login') !== '' &&
            _this._getHeader().findBlockInside('user').bindTo('click', function() {

                if (_this.hasMod('state', 'open')) {

                    _this.close();

                } else {

                    _this.open();

                }

            });

        },

        state : {

            open : function() {

                this.domElem.trigger('open');
                $(window).trigger('closeUnder');

                this.afterCurrentEvent(function() {

                    this
                        .bindTo('outsideclick',  this.close)
                        .bindToDoc('keydown', function(e) {
                            e.keyCode === 27 && this.close();
                        });

                });
            },

            close : function() {

                this.domElem.trigger('close');

                this
                    .unbindFrom('outsideclick')
                    .unbindFromDoc('keydown');

            }
        }
    },

    _getHeader : function() {

        return this._header || (this._header = this.findBlockOutside('header'));

    },

    _topDefined : null,

    open : function() {

        if (!this._topDefined) {

            this.domElem.css('top', this._getHeader().elem('main').outerHeight());

            this._topDefined = true;

        }

        this.setMod('state', 'open');

        return this;

    },

    close : function() {

        this.setMod('state', 'close');

        return this;

    }

}, {

    live : false

});