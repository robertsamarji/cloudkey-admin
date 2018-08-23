import * as React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Site, Nav, Grid, List, Button } from "tabler-react";

type Props = {|
  +children: React.Node,
|};

type subNavItem = {|
  +value: string,
  +to?: string,
  +icon?: string,
  +LinkComponent?: React.ElementType,
|};

type navItem = {|
  +value: string,
  +to?: string,
  +icon?: string,
  +active?: boolean,
  +LinkComponent?: React.ElementType,
  +subItems?: Array<subNavItem>,
|};

const navBarItems: Array<navItem> = [
  { value: "Home", to: "/", icon: "home", LinkComponent: withRouter(NavLink) },
  {
    value: "Orders",
    icon: "mail",
    subItems: [
      { value: "New", to: "/new-orders", LinkComponent: withRouter(NavLink) },
      { value: "Processed", to: "/processed-orders", LinkComponent: withRouter(NavLink) },
    ],
  },
  {
    value: "Scans",
    icon: "camera",
    subItems: [
      { value: "New", to: "/new-scans", LinkComponent: withRouter(NavLink) },
      { value: "Processed", to: "/processed-scans", LinkComponent: withRouter(NavLink) },
    ],
  },
  {
    value: "Database",
    icon: "database",
    subItems: [
      { value: "Users", to: "/users", LinkComponent: withRouter(NavLink) },
    ],
  },
];

const notificationsObjects = [
  {
    avatarURL: "images/faces/male/41.jpg",
    message: (
      <React.Fragment>
        <strong>Admin</strong> new customer service enquiry received.
      </React.Fragment>
    ),
    time: "10 minutes ago",
  }
];

const accountDropdownProps = {
  avatarURL: "images/brand/small-ck-logo.jpg",
  name: "Robert Samarji",
  description: "Admin",
  options: [
    { icon: "log-out", value: "Sign out" },
  ],
};

class SiteWrapper extends React.Component<Props, void> {
  render(): React.Node {
    return (
      <Site.Wrapper
        headerProps={{
          href: "/",
          alt: "CloudKey",
          imageURL: "./images/brand/cloudkey.png",
          navItems: (
            <Nav.Item type="div" className="d-none d-md-flex">
              <Button
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
                outline
                size="sm"
                RootComponent="a"
                color="primary"
              >
                Dont click me
              </Button>
            </Nav.Item>
          ),
          notificationsTray: { notificationsObjects },
          accountDropdown: accountDropdownProps,
        }}
        navProps={{ itemsObjects: navBarItems }}
        footerProps={{
          links: [
            <a>First Link</a>,
            <a>Second Link</a>,
            <a>Third Link</a>,
            <a>Fourth Link</a>,
            <a>Five Link</a>,
            <a>Sixth Link</a>,
            <a>Seventh Link</a>,
            <a>Eigth Link</a>,
          ],
          note:
            "If something is broken, please email robert@cloudkey.co",
          copyright: (
            <React.Fragment>
              Copyright © 2018 <a href="https://cloudkey.co" target="_blank"> CloudKey</a>. All rights reserved.
            </React.Fragment>
          ),
        }}
      >
        {this.props.children}
      </Site.Wrapper>
    );
  }
}

export default SiteWrapper;
