var ourApp = {
    init: function ()
    {
        $('#btnLogin').click(ourApp.login);
        $('#items a').click(ourApp.toggleDetails);
    },

    login: function ()
    {
        $('#user-status')
            .addClass('logged-in')
            .text('Logged In');
        $(this)
            .text('Logout')
            .off('click')
            .click(ourApp.logout);
    },

    logout: function ()
    {
        $('#user-status')
            .removeClass('logged-in')
            .text('Logged Out');

        $(this)
            .text('Login')
            .off('click')
            .click(ourApp.login);
    },

    toggleDetails: function ()
    {
        $(this).parent().find('.details').toggle();
    }
};

$(ourApp.init);
