/** @class jsava.lang.IndexOutOfBoundsException */
defineClass( 'jsava.lang.IndexOutOfBoundsException', {
    extend: jsava.lang.RuntimeException,

    construct: function () {
        this.super.apply( this, Array.prototype.concat.call( arguments, Array.prototype.slice.call( arguments ) ) );
    }
} );