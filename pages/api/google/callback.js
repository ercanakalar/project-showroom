import { setCookie } from 'cookies-next';
import passport from 'passport';
import connect from '../../../lib/database';
import '../../../lib/passport';
// import Profiles from '../../../models/Profiles';

export default async function (req, res, next) {
  await connect();
  passport.authenticate('google', (err, user, info) => {
    if (err || !user) {
      return res.redirect(process.env.NEXT_PUBLIC_URL + '/');
    }

    // const takeProfile = async () => {
    //   const currentProfile = await Profiles.findOne({ googleId: info.token });
    //   console.log(currentProfile, 'currentProfile');
    //   const currentProfileUsername = currentProfile?.username;
    //   return currentProfileUsername;
    // };

    // set cookie and send redirect
    setCookie('token', info.token, {
      req,
      res,
    });
    // const takeUsername = takeProfile();
    // if (takeUsername) {
    //   res.redirect(process.env.NEXT_PUBLIC_URL + `/${takeUsername}`);
    // }
    const currentUserUrl = user.email.split('@')[0];
    res.redirect(process.env.NEXT_PUBLIC_URL + `/${currentUserUrl}`);
  })(req, res, next);
}
