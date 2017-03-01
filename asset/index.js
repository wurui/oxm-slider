define(['zepto','oxm/wurui/oxmjs-flip/1.4.0/asset/index','oxjs'],function(undef,Flip){

    return {
        init:function(mod){
            //console.log(mod.attr('ox-mod'),'init')
            //mod.css({'border':'solid 1px red'})
            /*
             var wrap=this.wrap= mod.children('div');
             this.count=wrap.find('.slider-img').length;
             this.play()

             */

            var inst=Flip.init(mod,{
                //wrap:mod.children('div'),
                classes:{
                    flipPage:'slider-img',
                    flipWindow:'slider-window',
                    transition:'transition'
                }
            });
            inst.play();
            $('.slider-img').on('tap',function(e){
                //console.log(e.target);
                location.href= e.target.getAttribute('data-href')
            })

        }
    }
})
