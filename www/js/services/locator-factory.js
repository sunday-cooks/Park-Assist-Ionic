angular.module('parkAssist')
  .factory('Locator', function($q) {
    var createUser = function (tuple, range) {
      var deferred = $q.defer();

      console.log('services.js says: createUser called, creating a new user');
      
      //Create a new user on firebase
      var fb = new Firebase('https://parkassistionic.firebaseio.com/');
      var reference = fb.child('Users').push({ latitude: tuple[0], longitude: tuple[1], range: range });
      
      deferred.resolve(reference);

      return deferred.promise;
    };

    return {
      createUser : createUser
    };
  });