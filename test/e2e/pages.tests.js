describe("E2E testing", function() {
    it("should display home page", function() {
        browser.get('/');
        expect(browser.getLocationAbsUrl()).toMatch("/");
    });

    it("should display home page", function() {
        browser.get('/#/home');
        expect(browser.getLocationAbsUrl()).toMatch("/home");
    });

    it("should display home page with specific content", function() {
        var contentList = protractor.config.contentList;
        for (var i = 0; i < contentList.length; i++) {
            var url = '/#/home/' + contentList[i];
            browser.get(url);
            browser.wait(function() {
                return element(by.css('.content-loaded')).isPresent();
            }, 5000, 'Welcome code was not loaded in time.');
            expect(element(by.css('.content-loaded')).isPresent());
        }
    });

    it("should click through the menu links", function() {
        var menu = element(by.css("#my-navbar"));

        var menuItem = element(by.css("a[data-menu='home']"));
        menu.click();
        menuItem.click();
        expect(browser.getLocationAbsUrl()).toMatch("/home");

        var menuItem = element(by.css("a[data-menu='support']"));
        menu.click();
        menuItem.click();
        expect(browser.getLocationAbsUrl()).toMatch("/support");
    });
});
