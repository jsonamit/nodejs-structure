const userRoute=require('./userRoutes/user.route');


module.exports = (app) => {
    app.use('/api/users', userRoute);

    app.use((e, req, res, next) => {
        if (!next) return null;
        const err = e;
        // const { body, headers, user: u } = req;

        // logger.error(err.message, err, {
        //   url: req.originalUrl,
        //   body,
        //   headers,
        //   user: u,
        // });

        return res.status(500).json({ message: err.message, stack: err.stack });
    });
};