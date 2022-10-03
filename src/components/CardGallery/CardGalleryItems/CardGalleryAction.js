// COMPONENTS
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// ICONS
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Link from 'next/link';

export default function CardGalleryAction({
  handleClick,
  handleClose,
  classes,
  handleEdit,
  anchorEl,
  handleDelete,
}) {
  return (
    <>
      <IconButton
        aria-label="settings"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <li>
            <Link href="/">
              <a onClick={handleDelete} className={classes.link}>
                <ListItemIcon className={classes.listIcon}>
                  <DeleteIcon fontSize="small" className={classes.icon} />
                  <ListItemText primary="Delete" className={classes.text} />
                </ListItemIcon>
              </a>
            </Link>
            <Link href="/edit-project">
              <a onClick={handleEdit} className={classes.link}>
                <ListItemIcon className={classes.listIcon}>
                  <EditIcon fontSize="small" className={classes.icon} />
                  <ListItemText primary="Edit" className={classes.text} />
                </ListItemIcon>
              </a>
            </Link>
          </li>
        </MenuItem>
      </Menu>
    </>
  );
}
