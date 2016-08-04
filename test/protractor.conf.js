exports.config = {
    onPrepare: function () {
        protractor.config = {
            contentList: ['sample-content-1','sample-content-2']
        };
    }
};