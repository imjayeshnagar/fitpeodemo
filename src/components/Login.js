import React, { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import PersonIcon from '@mui/icons-material/Person';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import toast, { Toaster } from 'react-hot-toast';
import { LoginAction } from '../Action/action';
import Cookies from 'js-cookie'
import config from '../coreFiles/config';

const Login = () => {
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
    const [form, setForm] = useState({ username: '', password: '' });
    const [validatioError, setvalidatioError] = useState({});
  
    // if (Cookies.get('loginSuccessSchoolAdmin')) {
    //   window.location.href = `${config.baseUrl}dashboard`;
    // }
  
    const inputHandler = async (e) => {
      const { name, value } = e.target
      setForm((old) => {
          return { ...old, [name]: value }
      })
    }
  
    function validate() {
      let usernameError = "";
      let passwordError = "";
  
      if (form.username === '') {
        usernameError = "Username is required."
      }
      if (form.password === '') {
          passwordError = "Password is required."
      }
      if (usernameError || passwordError) {
          setvalidatioError({
            usernameError, passwordError
          })
          return false
      } else {
          return true
      }
  }
  
  const SubmitForm = async (e) => {
      e.preventDefault()
      const isValid = validate();
      if (!isValid) {
  
      }
      else {
          let res = await LoginAction(form);
          if (res.success) {
              toast.success(res.msg);
              Cookies.set('loginSuccessSchoolAdmin', JSON.stringify(res.data));
              setTimeout(() => {
                  window.location.href = `${config.baseUrl}dashboard`;
              }, 1200);
          } else {
              toast.error(res.msg);
          }
      }
  }
  
    return (
        <>
            <Grid container spacing={2}>
            <Toaster />
                <Grid item md={6}>
                    <div className="login-bg">
                        {/* <img src="images/bg01.png" /> */}
                    </div>
                </Grid>
                <Grid item md={6}>
                    <div className="login-form">
                        <Grid container spacing={2}>
                            <Grid item md={2}></Grid>
                            <Grid item md={8}>
                                <Typography variant="h2" component="h2">
                                    Welcome to School Admin
                                </Typography>
                                <p className="text-muted">Need an account?<Link to="#">Sign Up</Link></p>
                                {/* <Box sx={{ display: 'flex', justifyContent: "space-between", mt: 3 }} className="select-type-btn">
                                    <Button className="admin-btn">Admin</Button>
                                    <Button className="teacher-btn">Teacher</Button>
                                    <Button className="student-btn">Student</Button>
                                </Box> */}
                                <div className="forms">
                                    <Typography variant="h2" component="h2">
                                        Sign In
                                    </Typography>
                                    <FormControl variant="outlined" fullWidth>
                                        <InputLabel htmlFor="outlined-adornment-password">Username*</InputLabel>
                                        <OutlinedInput id="outlined-adornment-password"
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton aria-label="toggle password visibility" edge="end">
                                                        <PersonIcon />
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                            
                                            label="Password"
                                            name="username"
                                            value={form.username}
                                            onChange={inputHandler}
                                        />
                                        
                                    </FormControl>
                                    <span className="validationErr">{validatioError.usernameError}</span>
                                    <FormControl variant="outlined" fullWidth>
                                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                        <OutlinedInput id="outlined-adornment-password" type={showPassword ? 'text' : 'password'}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end">
                                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                            label="Password"
                                            name="password"
                                            value={form.password}
                                            onChange={inputHandler}
                                        />
                                    </FormControl>
                                    <span className="validationErr">{validatioError.passwordError}</span>
                                    <div className="remember-me">
                                        <FormControlLabel control={<Checkbox />} label="Remember me" />
                                        <div className="forgot"><Link to="#">
                                            Forgot Password?</Link></div>
                                    </div>
                                    <Button fullWidth className="btn btn-primary login-btn" onClick={SubmitForm} >
                                        Login
                                    </Button>
                                    <div className="social-media">
                                        <div className="or-line">
                                            <span>OR</span>
                                        </div>
                                        <div className="social-icons">
                                            <div className="icon1">
                                                <i class="fa fa-google" aria-hidden="true"></i>
                                            </div>
                                            <div className="icon1">
                                                <i class="fa fa-facebook" aria-hidden="true"></i>
                                            </div>
                                            <div className="icon1">
                                                <i class="fa fa-twitter" aria-hidden="true"></i>
                                            </div>
                                            <div className="icon1">
                                                <i class="fa fa-linkedin" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item md={2}></Grid>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
        </>
    )
}
export default Login