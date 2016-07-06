describe('End 2 End Tests', function() {

  let expectedMsg = 'Angular 2';
  let paragraphMsg = 'Lorem ipsum';
  let title = 'Angular 2 Training';

  beforeEach(function() {
    browser.get('');
  });

  it('header should display: ' + expectedMsg, function() {
    expect(element(by.css('h1')).getText()).toContain(expectedMsg);
  });

  it('paragraph should display: ' + paragraphMsg, function() {
    expect(element(by.css('.container')).getText()).toContain(paragraphMsg);
  });

  it('title should be: ' + title, function() {
    expect(browser.getTitle()).toEqual(title);
  });

});
