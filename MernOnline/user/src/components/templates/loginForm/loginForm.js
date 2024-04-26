import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { loginRequestAction } from "../../../redux/actions/loginAction";
import { connect } from "react-redux";

const useStyles = () => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundImage: 'url("https://images.squarespace-cdn.com/content/v1/5e888db5701c090efa2df1c2/1590274990960-NL3G054WSP554Y8OQ7EV/image-asset.jpeg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center', // Center the background image
    position: 'relative', // Ensure positioning context for children
    overflow: 'hidden', // Hide overflow content
    '@media (max-width: 600px)': {
      backgroundSize: '100% auto', // Adjust for smaller screens (e.g., mobile)
    },
    '@media (min-width: 601px) and (max-width: 1200px)': {
      backgroundSize: 'auto 100%', // Adjust for medium-sized screens (e.g., tablets)
    },
    '@media (min-width: 1201px)': {
      backgroundSize: 'cover', // Default cover for larger screens (e.g., desktops)
    },
  },
  loginbtn: {
    margin: '0px 40px',
    transition: 'all 0.3s ease', // Add transition for all properties
  },
  form: {
    width: '300px',
    transition: 'all 0.3s ease', // Add transition for all properties
  },
  card: {
    minWidth: '300px',
    transition: 'all 0.3s ease', // Add transition for all properties
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', // Add box shadow for card
    borderRadius: '10px', // Add border radius for card
    overflow: 'hidden', // Hide overflow content
  },
  formTitle: {
    color: 'maroon',
    transition: 'all 0.3s ease', // Add transition for all properties
    fontSize: '1.5em', // Set font size
    fontWeight: 'bold', // Set font weight
    marginBottom: '20px', // Add spacing between title and form
    textAlign: 'center', // Center align the title
  }
});

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  emailInputHandler = (event) => {
    this.setState({
      ...this.state,
      email: event.target.value
    });
  };

  passwordInputHandler = (event) => {
    this.setState({
      ...this.state,
      password: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.loginRequestAction(this.state);
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h5" className={classes.formTitle}>
              LOGIN
            </Typography>
            <form className={classes.form} onSubmit={this.handleSubmit}>
              <TextField
                variant='outlined'
                color="primary"
                className={classes.inputfield}
                label="Email"
                placeholder='enter email'
                type='email'
                value={this.state.email}
                onChange={this.emailInputHandler}
                required
              />
              <TextField
                variant='outlined'
                color="primary"
                label="Password"
                className={classes.inputfield}
                placeholder='enter password'
                type='password'
                value={this.state.password}
                onChange={this.passwordInputHandler}
                required
              />
              <Button
                variant='contained'
                style={{ backgroundColor: '#ffff00' }}
                type='submit'
                className={classes.loginbtn}
              >
                Login 
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  state: state.user
});

export default withStyles(useStyles)(connect(mapStateToProps, {
  loginRequestAction
})(LoginForm));
