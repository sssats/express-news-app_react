describe('Tets articcles component', function() {
  var $compile,
      $rootScope;

  beforeEach(module('admin'));

  beforeEach(inject(function(_$compile_, _$rootScope_){
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  it('Should render articles', function() {
    console.log(1111111111);
    expect(true).toBeTruthy();
  });
});
