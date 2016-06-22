define(['zepto','oxm/oxmjs-flip/1.1.0/asset/index'],function(undef,Flip){
    //console.log(arguments)
    //alert(1)
    return {
        init:function(mod){
            //console.log(mod.attr('ox-mod'),'init')
            //mod.css({'border':'solid 1px red'})
            /*
             var wrap=this.wrap= mod.children('div');
             this.count=wrap.find('.slider-img').length;
             this.play()

             */

            Flip.init(mod,{
                //wrap:mod.children('div'),
                classes:{
                    flipPage:'slider-img',
                    flipWindow:'slider-window',
                    transition:'transition'
                }
            })
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
