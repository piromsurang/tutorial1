var Gold = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( 'res/images/gold.png' );
    },
    
    randomPosition: function() {
        var pos = this.getPosition();
        this.setPosition( new cc.Point (Math.random() * (800 - 200) + 50, Math.random() * (600 - 200) + 50))
    },
    
    closeTo: function( obj ) {
        var myPos = this.getPosition();
        var oPos = obj.getPosition();
        return ( ( Math.abs( myPos.x - oPos.x ) <= 16 ) &&
		          ( Math.abs( myPos.y - oPos.y ) <= 16 ) );
    }
})