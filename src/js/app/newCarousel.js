require('../../css/carousel.css');

var Carousel = (function(){
  
  function Carousel($ct){
  this.$ct = $ct;
  this.init();
  this.bind(); 
}

Carousel.prototype.init = function(){
 var $imgs = this.$imgs = this.$ct.find('.imgs'), 
     $btn = this.$btn = this.$ct.find('.btn'), 
     $left = this.$left = this.$ct.find('.left'),
     $right = this.$right = this.$ct.find('.right'),
     $dots = this.$dots = this.$ct.find('.dots').children();

 var $firstImg = this.$firstImg = $imgs.find('li').first();
 var $lastImg = this.$lastImg =$imgs.find('li').last();

  this.curPageIndex = 0;
  this.imgLength = $imgs.children().length;
  this.isAnimate = false;

 $imgs.prepend($lastImg.clone());
 $imgs.append($firstImg.clone());
 $imgs.width($firstImg.width()*$imgs.children().length);
 
 this.dots();
 $( ".carousel .imgs" ).css({left:- $( ".carousel" ).width()});
 $( ".carousel img" ).css({width: $( ".carousel" ).width()});
 
}

Carousel.prototype.bind = function(){
  var _this = this;

  this.$left.on('click',function(){
   _this.playPre();
  });
  this.$right.on('click',function(){
   _this.playNext();
 });
  
}

Carousel.prototype.playNext = function(){
   var _this = this;
   if(this.isAnimate){return;}
   this.isAnimate = true;
   this.$imgs.animate({left:'-='+this.$firstImg.width()},function(){
     _this.curPageIndex++;     
     if(_this.curPageIndex === _this.imgLength){
       _this.$imgs.css({left:-_this.$firstImg.width()});
       _this.curPageIndex = 0;
     }
     _this.isAnimate = false;
     _this.dots();
   });
   
  }
  
 Carousel.prototype.playPre = function(){
   var _this = this;
   if(this.isAnimate){return;}
   this.isAnimate = true;
   this.$imgs.animate({left:'+='+this.$firstImg.width()},function(){
     _this.curPageIndex--;    
     if(_this.curPageIndex < 0){
       _this.$imgs.css({left:-_this.$firstImg.width()*_this.imgLength});
       _this.curPageIndex = _this.imgLength-1;
     }
     _this.isAnimate = false;
     _this.dots();
   });
   
 }

 Carousel.prototype.dots = function(){
   this.$dots.removeClass('active').eq(this.curPageIndex).addClass('active');
 }
 

                return{
                     init:function($ct){ 
                        $ct.each(function(index,node){
                            new Carousel($(node));
                        }) ;
                      }
                }
      
})();

module.exports = Carousel;