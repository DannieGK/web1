var Body = {
  setBackgroundColor:function (color){
    document.querySelector('body').style.backgroundColor = color;
  },
  setColor:function (color){
    document.querySelector('body').style.color = color;
  }
}
var Links = {
  setColor:function(color){

  // // jquery 사용전 반복문 사용.
  //   var alist = document.querySelectorAll('a');
  //   var i = 0;
  //   while(i < alist.length){
  //     alist[i].style.color = color;
  //     i++;
  //   }

  // jquery 사용후 반복문 제거가능.
  $('a').css("color",color);
  }

}
var Switches = {
  setValue:function(value){
    // var slist = document.querySelectorAll('.switch')
    // var i = 0;
    // while(i < slist.length){
    //   slist[i].value = value;
    //   i++;
    // }
  $('.switch').val(value);
  }
}
function changeSkinMode(self){
  var target=document.querySelector('body');
  if(self.value=='off'){
    Body.setColor('white');
    Body.setBackgroundColor('black');
    Switches.setValue('on');
    Links.setColor('grey');
  }else{
    Body.setColor('black');
    Body.setBackgroundColor('white');
    Switches.setValue('off');
    Links.setColor('red');
  }
}
