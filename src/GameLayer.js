var GameLayer = cc.LayerColor.extend({
    init: function() {
        this._super( new cc.Color( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );
        
        console.log( 'Initialized' );
        console.log( 'GameLayer created' );
        
        var ship = new Ship();
        ship.setPosition( new cc.Point( 200, 200 ) );
        this.addChild( ship );
        
        return true;
    }
});
 
var StartScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new GameLayer();
        layer.init();
        this.addChild( layer );
    }
});