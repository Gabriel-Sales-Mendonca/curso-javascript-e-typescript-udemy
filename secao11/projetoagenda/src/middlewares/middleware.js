module.exports.middlewareGlobal = (req, res, next) => {
    console.log('Executando middleware global...');
    next();
};

exports.checkCsrfError = (err, req, res, next) => {
  if(err && err.code === 'EBADCSRFTOKEN') {
    res.render('404')
  }
}

exports.csrfMiddleware = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken()
  next()
}