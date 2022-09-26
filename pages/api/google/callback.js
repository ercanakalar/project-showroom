import { setCookie } from 'cookies-next';
import passport from 'passport';
import connect from '../../../lib/database';
import '../../../lib/passport';

export default async function (req, res, next) {
  await connect();
  passport.authenticate('google', (err, user, info) => {
    console.log(err, 'err');
    console.log(user, 'user');
    console.log(info, 'info');

    if (err) {
      return res.redirect(process.env.NEXT_PUBLIC_URL + '/?a=auth_fail');
    }

    // set cookie and send redirect
    setCookie('token', info.token, {
      req,
      res,
    });
    res.redirect(process.env.NEXT_PUBLIC_URL);
  })(req, res, next);
}
