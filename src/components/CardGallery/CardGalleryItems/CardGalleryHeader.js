/* REACT */
import { useState } from 'react';

/* MATERIAL UI */
// COMPONENTS
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import { makeStyles } from '@material-ui/core/styles';

// ICONS
import { getCookie, setCookie } from 'cookies-next';
import jwt from 'jsonwebtoken';
import CardGalleryAction from './CardGalleryAction';

const useStyles = makeStyles(() => ({
  listIcon: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    bottom: '5px',
  },
  icon: {
    marginBottom: '5px',
  },

  text: { marginLeft: '5px' },
  link: { textDecoration: 'none', cursor: 'pointer' },
}));

export default function CardGalleryHeader({ card }) {
  const firstLatter = card.creatorEmail[0].toUpperCase();
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDelete = async () => {
    const response = await fetch(`/api/projects/${card._id}`, {
      method: 'DELETE',
    });
    if (response.status === 200) {
      return {
        redirect: {
          destination: `/${card.creatorDefaultUserName}`,
        },
      };
    }
    return response;
  };

  const handleEdit = async () => {
    setCookie('cardIdToken', card._id);
  };

  const existUserCookie = getCookie('token');
  const existUserToken = jwt.decode(existUserCookie);
  const userId = existUserToken?.id;

  const action = () => {
    if (userId === card.creatorId) {
      return (
        <CardGalleryAction
          handleClick={handleClick}
          handleClose={handleClose}
          classes={classes}
          handleEdit={handleEdit}
          anchorEl={anchorEl}
          handleDelete={handleDelete}
        />
      );
    }
    return null;
  };

  return (
    <CardHeader
      avatar={<Avatar aria-label="recipe">{firstLatter}</Avatar>}
      action={action()}
      title={card.creatorName}
      subheader={
        <>
          <span>Posted at </span>
          <span>{new Date().getFullYear()}</span>
        </>
      }
    />
  );
}
