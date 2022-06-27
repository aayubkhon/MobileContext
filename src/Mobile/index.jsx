import React,{useState,useContext} from 'react'
import { Container, MainLogo, ImgCon, 
  SettingIcon, Item, LineStyle, ToggleMode } from './style'
import AppleIcon from './assets/Apple-Logo.png'
import { ThemeContext } from '../context/context'

export const Mobile = () => {
  const [mode,setMode] = useState(false)
  const [theme,setTheme] = useContext(ThemeContext)

  const dark = {
    icon:'black',
        title:'black',
        background:'whitesmoke',
  }

  const light = {
    icon:'white',
        title:'white',
        background:'black',
  }
  const onChange = () =>{
    setMode(!mode)
    setTheme(mode ? dark : light)
  }
  return (
      <Container>
      <MainLogo color={theme.background} >
      <SettingIcon>
        <SettingIcon.IconArrow color={theme.icon}/>
        <SettingIcon.IconPower color={theme.icon}/>
      </SettingIcon>
      <ImgCon>
      <ImgCon.Img src={AppleIcon} alt="apple logo" color={theme.icon} />
      <ImgCon.Title color={theme.title}>Apple</ImgCon.Title>
      </ImgCon>
      <Item>
        <Item.Moon color={theme.icon}/>
        <Item.FuncTitle  color={theme.title}>Dark mode</Item.FuncTitle>
        <ToggleMode   
      checked={mode}
      onChange={onChange}
      size={50}/>
      </Item>
      <Item>
        <Item.Grid/>
        <Item.FuncTitle color={theme.title}>Story</Item.FuncTitle>
      </Item>
      <Item>
        <Item.UserCheck/>
        <Item.FuncTitle color={theme.title}>Chat heads</Item.FuncTitle>
      </Item>
      <Item>
        <Item.UserPlus/>
        <Item.FuncTitle color={theme.title}>Group</Item.FuncTitle>
      </Item>
      <LineStyle color={theme.icon}/>
      <Item>
        <Item.PermMedia/>
        <Item.FuncTitle color={theme.title}>Media and Photos</Item.FuncTitle>
      </Item>
      <Item>
        <Item.SettingsOutline/>
        <Item.FuncTitle color={theme.title} >Settings and privacy</Item.FuncTitle>
      </Item>
      <Item>
        <Item.CommentDots/>
        <Item.FuncTitle color={theme.title} >Help centre</Item.FuncTitle>
      </Item>
      <Item>
        <Item.BellFill/>
        <Item.FuncTitle color={theme.title}>Notification</Item.FuncTitle>
      </Item>
      </MainLogo>
    </Container>
  )
}

export default Mobile