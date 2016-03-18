( function(){
  'use strict'

  var listPhones = {
    'mary' : 1934070706,
    'Joanna' : 1934440888,
    'Mathiew' : 19987778558
  };

  function telephoneAdd( phoneAdd ) {
      var telephone = phoneAdd.split("");
      for( var i = 0; i < telephone.length;) {
        console.log(i);
        console.log(telephone[i]);
        i++;
      }
  }
  console.log(telephoneAdd('888888'));


})();
