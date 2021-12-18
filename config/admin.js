module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e65cca9aaebd68b9718e36bd948fa985'),
  },
});
