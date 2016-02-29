define(['jquery'],function($){
    //console.log(arguments)
    //alert(1)
    return {
        init:function(mod){
            //console.log(mod.attr('ox-mod'),'init')
            //mod.css({'border':'solid 1px red'})
           var wrap=this.wrap= mod.children('div');
            this.count=wrap.children('ul').children('li').length;
            this.play()
        },
        currentIndex:0,
        play:function(){
            if(!this.count) return this;
            this.currentIndex++;

            this.currentIndex=this.currentIndex%this.count;

            this.wrap[0].className='is-on-'+(this.currentIndex+1);

            var _this=this;

            setTimeout(function(){
                _this.play();
            },3000)

            return this;
        }
    }
})
