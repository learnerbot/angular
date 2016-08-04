define([], function () {
    window.header = {
        initCollapseBehaviour: function() {
            $(document).on('click','.navbar-collapse.in',function(e) {
                if( $(e.target).is('a') ) {
                    $(this).collapse('hide');
                }
            });
        },

        init: function() {
            this.initCollapseBehaviour();
        }
    };

    return window.header;
});
