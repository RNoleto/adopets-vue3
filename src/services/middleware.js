import Cookie from 'js-cookie';


export default {
  auth(to, from, next) {
    const token = Cookie.get('_myapp_token');
    // ajax pro backend para chegar a validade do token

    if (!token) {
      next('/');
    }
    next();
  },
}