import React, { useState } from 'react';
import { TextField, Button, Checkbox, IconButton, InputAdornment } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import QrCodeIcon from '@mui/icons-material/QrCode';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="flex items-start h-screen p-10">
      <div className="p-3 bg-white" style={{ width: '450px', marginLeft: '150px' }}>
        
        <div className="mb-6">
          <h1 className="text-xl font-bold">GoInvoice.io</h1>
        </div>

        <h1 className="text-4xl font-bold mb-2">Sign in</h1>
        <p className="text-sm mb-6">Enter your account details or use QR code</p>

        <p>Email</p>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <MailOutlineIcon />
              </InputAdornment>
            ),
          }}
          className="mb-4"
        />

        <p>Password</p>
        <TextField
          label="Password"
          type={showPassword ? 'text' : 'password'}
          variant="outlined"
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={togglePasswordVisibility} edge="end">
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          className="mb-4"
        />

        {/* Remember Me and Recover Password */}
        <div className="flex items-center justify-between mb-4">
          <label className="flex items-center space-x-2">
            <Checkbox color="primary" />
            <span>Remember Me</span>
          </label>
          <a href="/recover-password">
            Recover Password
          </a>
        </div>

        {/* Sign In Button */}
        <Button
  variant="contained"
  fullWidth
  className="bg-purple-600 text-black mb-6"
  style={{ height: '50px' }}
>
  Sign in
</Button>

        {/* Divider with Or */}
        <div className="flex items-center mb-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-3 text-gray-500">Or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Log In with QR Code Button */}
        <Button
          variant="outlined"
          fullWidth
          startIcon={<QrCodeIcon />}
          className="mb-4"
          style={{ height: '50px' }}
        >
          Log in with QR code
        </Button>

        {/* Create Account Link */}
        <p className="text-sm pt-10">
          You don’t have an account?{' '}
          <span className="text-purple-600 cursor-pointer">Create an account.</span>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
