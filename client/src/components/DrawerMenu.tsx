import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

interface DrawerMenuProps {
  open: boolean;
  toggleDrawer?: (e: Boolean) => void;
}

const DrawerMenu: React.FC<DrawerMenuProps> = (props: DrawerMenuProps) => {
  const { open, toggleDrawer } = props;

  const handleToggleDrawer = (newOpen: boolean) => () => {
    toggleDrawer(newOpen);
  };

  return (
    <Drawer open={open} onClose={handleToggleDrawer(false)}>
      <Box
        component="div"
        sx={{ width: 250 }}
        role="presentation"
        onClick={(e: React.MouseEvent<HTMLDivElement>) =>
          handleToggleDrawer(false)
        }
      >
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default DrawerMenu;
