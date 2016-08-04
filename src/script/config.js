define([], function () {
    "use strict";

    window.config = {
        supportLink: 'https://github.com/learnerbot/angular/issues',
        content: {
            base: "src/content/",
            names: [
                "sample-content-1",
                "sample-content-2"
            ]
        },
        contentList: [
            "Content list item 1",
            "Content list item 2",
            "Content list item 3"
        ]
    };

    return window.config;
});