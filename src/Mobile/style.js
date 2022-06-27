import styled from "styled-components";
import {SettingsOutline} from '@styled-icons/evaicons-outline/SettingsOutline'
import {Power} from '@styled-icons/fluentui-system-filled/Power'
import {LeftArrowCircle} from '@styled-icons/boxicons-regular/LeftArrowCircle'
import {Table} from '@styled-icons/fluentui-system-regular/TableSimple'
import {Moon} from '@styled-icons/heroicons-solid/Moon'
import {Grid} from '@styled-icons/evaicons-solid/Grid'
import {UserCheck} from '@styled-icons/boxicons-solid/UserCheck'
import {UserPlus} from '@styled-icons/boxicons-solid/UserPlus'
import {PermMedia} from '@styled-icons/material/PermMedia'
import {CommentDots} from '@styled-icons/boxicons-solid/CommentDots'
import {BellFill} from '@styled-icons/octicons/BellFill'
 
import DarkModeToggle from "react-dark-mode-toggle";


export const ToggleMode = styled(DarkModeToggle)`
margin-left:auto;
border:none;
outline:none;
`

export const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100vw;
height:fit-content;
padding:50px 300px;
box-sizing:border-box;
background-color:whitesmoke;
`

export const SettingIcon = styled.div`
display:flex;

`

SettingIcon.IconArrow = styled(LeftArrowCircle)`
width:30px;
height:30px;
color:${({color})=>color};
cursor:pointer;
`

SettingIcon.IconPower = styled(Power)`
width:30px;
height:30px;
color:${({color})=>color};
cursor:pointer;
margin-left:auto;
`

export const MainLogo = styled.div`
width:450px;
display:flex;
flex-direction:column;
height:85vh;
box-shadow:5px 5px 12px 6px rgba(0, 0, 0, 0.25);
padding:25px;
box-sizing:border-box;
background: ${({color})=>color};

`

export const ImgCon = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`

ImgCon.Img = styled.img`
width:130px;
height:110px;
border-radius:50%;
padding:20opx;
background-color:whitesmoke;
`

ImgCon.Title = styled.h1`
font-size:22px;
font-style:bold;
font-family: SF Pro Display;
color:${({color})=>color};
`

ImgCon.Titles = styled.p`
font-size:18px;
font-style:bold;
font-family: SF Pro Display;
`
export const Item = styled.div`
display:flex;
align-items:center;
padding:10px 0px;
`

export const LineStyle = styled.div`
width:85%;
display:flex;
align-items:center;
justify-content:center;
border-bottom: 1px solid ${({color})=>color};
margin:10px 30px;
box-sizing:border-box;

`

Item.Moon = styled(Moon)`
width:25px;
height:30px;
color:${({color})=>color};
`

Item.FuncTitle = styled.p`
margin-left:15px;
font-size:18px;
font-style:bold;
font-weight:600px;
font-family: SF Pro Display;
color:${({color})=>color};
`

Item.Grid = styled(Grid)`
width:25px;
height:30px;
color:#fbb65c;
`

Item.UserCheck = styled(UserCheck)`
width:25px;
height:30px;
color:#ff7eb0;
`

Item.UserPlus = styled(UserPlus)`
width:25px;
height:30px;
color:#36e3ff;
`

Item.PermMedia = styled(PermMedia)`
width:25px;
height:30px;
color:blue;
`

Item.SettingsOutline = styled(SettingsOutline)`
width:25px;
height:30px;
color:green;
`

Item.CommentDots = styled(CommentDots)`
width:25px;
height:30px;
color:#0bc630;
`

Item.BellFill = styled(BellFill)`
width:25px;
height:30px;
color:red;
`