/* NEXT.JS */
import LinkNext from 'next/link';

/* MATERIAL UI */
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { getCookie } from 'cookies-next';
import jwt from 'jsonwebtoken';

export default function HeroButtons({
  firstButtonText = 'My projects',
  secondButtonText,
  cv,
  currentUser,
}) {
  const userGoogleToken = getCookie('userGoogleId') || null;
  const userGoogleId = jwt.decode(userGoogleToken)?.id;

  const isEqualsIds = userGoogleId === currentUser.googleId;

  const defaultUserNameUrl = isEqualsIds ? currentUser.defaultUserName : '';
  const galleryPage = `/${defaultUserNameUrl}`;
  // const detailsPage = '/assets/others/Emre-Mutlu-Cv-ReactDev.pdf';
  const View = 'View';

  return (
    <>
      {currentUser && (
        <Grid container spacing={2} justifyContent="center">
          {defaultUserNameUrl ? (
            <Grid item>
              <LinkNext href={galleryPage} passHref>
                <Button variant="contained" color="primary">
                  View {firstButtonText}
                </Button>
              </LinkNext>
            </Grid>
          ) : (
            <Grid item>
              <LinkNext href={galleryPage} passHref>
                <Button variant="contained" color="primary">
                  Go Main Page
                </Button>
              </LinkNext>
            </Grid>
          )}
          {cv && (
            <Grid item>
              <LinkNext href={cv} passHref>
                <a
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: 'none' }}
                >
                  <Button variant="outlined">
                    {secondButtonText ? secondButtonText : View}
                  </Button>
                </a>
              </LinkNext>
            </Grid>
          )}
        </Grid>
      )}
    </>
  );
}
