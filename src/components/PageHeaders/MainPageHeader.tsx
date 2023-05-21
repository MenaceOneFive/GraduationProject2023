import {Avatar, Badge} from "@mui/material";

import React from "react";
import {Link, useNavigate} from "react-router-dom";
import logo from '../../images/logo.png';
import {getMyToken} from "../../api/Common";
import profilePic from '../../images/default.png'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {useAppSelector} from "../../store/hooks";

interface PageHeaderParam {
    pageHeaderName: String;
    variant: String;
    showBackButton: Boolean;
}

export const MainPageHeader: React.FC<PageHeaderParam>
    = (pageHeaderParam: PageHeaderParam) => {

    const navigate = useNavigate()
    const count = useAppSelector(app => app.cart.item.length)
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingBottom: "1rem",
            paddingLeft: '1rem',
            paddingRight: '1rem'
        }}>
            <Badge badgeContent={count} color="primary">
                <ShoppingCartIcon onClick={() => navigate("/cart")}></ShoppingCartIcon>
            </Badge>
            <Link to={"/app"} onClick={() => {
            }}><img src={logo} style={{paddingTop: "10px", width: '50%', height: '50%', objectFit: 'cover'}}/></Link>
            {(getMyToken() !== "") ? <Link to={"/mypage"} onClick={() => {
                }}><Avatar src={profilePic}></Avatar></Link> :
                <Link to={"/login"} style={{color: "black", fontSize: "14px"}}>로그인하기</Link>}
        </div>)
}
