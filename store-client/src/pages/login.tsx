import { Button } from '@mui/material'
import { Box } from '@mui/system'
import { Login as LoginIcon } from '@mui/icons-material'
import { useAuth } from "react-oidc-context";
import { useAppCtx } from "../AppProvider";
import { Navigate ,useLocation } from 'react-router-dom'
import { useEffect } from "react";
import './Login.css'


function Login() {

    const Myimage = require("../image/02.jpg")
    const { userInfo, action } = useAppCtx()
    const auth = useAuth()
    const location = useLocation()

    console.log('rendering..... login', auth.user)
    useEffect(() => {
        if(auth.isAuthenticated) {
            setTimeout(() => {
                action.setUserInfo({
                    ready: true,
                    username: auth.user?.profile.preferred_username,
                    displayName: auth.user?.profile.given_name + ' ' + auth.user?.profile.family_name
                })
            },1000)
        }
    },[auth, userInfo.ready , action])

    switch (auth.activeNavigator) {
        case "signinSilent":
            return <div>กำลังลงชื่อเข้าใช้...</div>
        case "signinRedirect":
            return <div>กำลังออกจากระบบ...</div>
    }

    if (auth.isLoading){
        return <div>กำลังโหลด...</div>
    }

    if (auth.error) {
        return <div>Oh... {auth.error.message}</div>
    }

    if (auth.isAuthenticated) {
        if (userInfo.ready) {
            const backTo = location.state?.bactTo || '/home'
            if(action.isStaff()){
                return(
                    <Navigate to = '/announcement' replace />
                )    
            }
            return (
                <Navigate to={backTo} replace />
            )
        } else {
            return <div className = 'loader' ></div>
                   
        }
    }
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 800,
            backgroundImage: `url(${Myimage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
        }}>
        <div className="login-container">
      <div className="logo-button-container">
        <div className="content-container">
          <div className="logo-container">
            <img src={require('../image/psu_th.png')} alt="Logo" className="logo-img" />
          </div>
          <div className="text-content-wrapper">
            <div className="text-content">Announcement of scores and funds !!!</div>
          </div>
        </div>
        <div className="button-container">
        <button className="glow-on-hover" onClick={() => void auth.signinRedirect()}>
            Log in
          </button>
          </div>
      </div>
    </div>
    

       
        </Box>

    );
}

export default Login
