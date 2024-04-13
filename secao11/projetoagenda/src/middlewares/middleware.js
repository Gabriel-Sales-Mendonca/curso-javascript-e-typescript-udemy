module.exports.middlewareGlobal = (req, res, next) => {
    console.log('Executando middleware global...');
    next();
};

exports.checkCsrfError = (err, req, res, next) => {
  if(err) {
    return res.render('404')
  }

  next()
}

exports.csrfMiddleware = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken()
  next()
}