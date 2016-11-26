define(['zepto','oxm/wurui/oxmjs-flip/1.3.0/asset/index'],function(undef,Flip){

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
            inst.play()

        },
        play:function() {


            if (!this.count) return this;

           // console.log('pause of this',this.pause)

            if (!this.pause) {

                var wrap = this.wrap;
                var currentIndex = wrap.attr('data-on') - 1;


                currentIndex = (++currentIndex) % this.count;

                wrap.children('.slider-window').addClass('transition')
                wrap.attr('data-on', currentIndex + 1);
            }


            var _this=this;

            setTimeout(function(){
                _this.play();
            },3000)

            return this;
        }
    }
})
