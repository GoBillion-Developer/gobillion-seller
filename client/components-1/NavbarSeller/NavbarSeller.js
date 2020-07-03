import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import Button from "@material-ui/core/Button";
import auth from "../../auth/auth-helper";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import logo from "../assets/images/orange-logo.svg";

const useStyles = makeStyles((theme) => ({
  boot: {
    flexGrow: 1,
    backgroundColor: "#f05a2b",
  },
  menuButton: {
    marginRight: theme.spacing(6),
  },
  title: {
    flexGrow: 1,
    padding: "2rem",
    marginLeft: "4rem",
  },
  buttonClass: {
    fontSize: "20px",
    paddingLeft: "1.75rem",
    paddingRight: "1.75rem",
  },
}));

function NavbarSeller(props) {
  const classes = useStyles();
  const history = useHistory();
  const isActive = (history, path) => {
    if (history.location.pathname == path) return { color: "#000000" };
    else return { color: "#ffffff" };
  };

  const img = <img src={logo} />;

  return (
    <div className={classes.boot}>
      <AppBar
        position="static"
        style={{
          backgroundColor: "#f05a2b",
          height: "76px",
          paddingRight: "2rem",
        }}
      >
        <Toolbar>
          <Typography variant="h4" color="inherit" className={classes.title}>
            gobillion
          </Typography>
          {!auth.isAuthenticated() && (
            <span>
              <Link to="/signup">
                <Button
                  style={isActive(history, "/signup")}
                  className={classes.buttonClass}
                >
                  Sign up
                </Button>
              </Link>
              <Link to="/signin">
                <Button
                  style={isActive(history, "/signin")}
                  className={classes.buttonClass}
                >
                  Sign In
                </Button>
              </Link>
            </span>
          )}
          {auth.isAuthenticated() && (
            <span>
              <Link
                to={
                  "/seller/" +
                  auth.isAuthenticated().seller._id +
                  "/seller/listings"
                }
              >
                <Button
                  style={isActive(
                    history,
                    "sellerr/" +
                      auth.isAuthenticated().seller._id +
                      "/seller/listings"
                  )}
                  className={classes.buttonClass}
                >
                  Listings
                </Button>
              </Link>
              <Link to={"/seller/" + auth.isAuthenticated().seller._id}>
                <Button
                  style={isActive(
                    history,
                    "/seller/" + auth.isAuthenticated().seller._id
                  )}
                  className={classes.buttonClass}
                >
                  My Profile
                </Button>
              </Link>
              <Button
                color="inherit"
                onClick={() => {
                  auth.clearJWT(() => history.push("/"));
                }}
                className={classes.buttonClass}
              >
                Sign out
              </Button>
            </span>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavbarSeller;
