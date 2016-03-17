( function(){
  'use strict'

  var listPhones = {
    'mary' : 1934070706,
    'Joanna' : 1934440888,
    'Mathiew' : 19987778558
  };

  function telephoneAdd( phoneAdd ) {
      var teste = 1;
      var telephone = JSON.parse('[' + phoneAdd + ']')
      for( var i = 0; i < telephone.length;) {
        console.log(i);
        console.log(telephone);
        teste++;
        i++;
      }
  }
  console.log(telephoneAdd(1234567890))
})();
