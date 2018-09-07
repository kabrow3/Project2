function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/signin');
}
module.exports = (app, passport) => {
    app.get('/logout', (req, res) => {
        req.session.destroy(function(err) {
            res.redirect('/');
        });
    });

    app.post(
        '/signin',
        passport.authenticate('local-signin', {
            successRedirect: '/',
            failureRedirect: '/'
        })
    );

    app.post(
        '/signup',
        passport.authenticate('local-signup', {
            successRedirect: '/',
            failureRedirect: '/'
        })
    );
};
