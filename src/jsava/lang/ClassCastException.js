/** @class jsava.lang.ClassCastException */
defineClass( 'jsava.lang.ClassCastException', {
    extend: jsava.lang.RuntimeException,

    construct: function () {
        this.super.apply( this, Array.prototype.concat.call( arguments, Array.prototype.slice.call( arguments ) ) );
    }
} );