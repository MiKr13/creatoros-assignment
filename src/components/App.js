import React, { useState } from "react";
import { Container } from '@material-ui/core';
import GoogleButton from './GoogleButton'
import AppLogo from "./common/AppLogo";
import AppBar from './common/AppBar';
import ProfileSection from './ProfileSection';
import PeopleGrid from './PeopleGrid';
import NavBar from './common/NavBar'
import TextImage from './common/TextImage';
import RightImageSection from './common/RightImageSection';
import ScrollButton from './common/ScrollButton';
import "../styles/styles.css";

const people = [
    {
        img: "https://images.unsplash.com/photo-1604864386572-a54278f83a49?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
        title: "Jenny",
        job: "something"
    },
    {
        img: "https://images.unsplash.com/photo-1604864386572-a54278f83a49?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
        title: "Jenny",
        job: "something"
    },
    {
        img: "https://images.unsplash.com/photo-1604864386572-a54278f83a49?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
        title: "Jenny",
        job: "something"
    },
    {
        img: "https://images.unsplash.com/photo-1604864386572-a54278f83a49?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
        title: "Jenny",
        job: "something"
    },
    {
        img: "https://images.unsplash.com/photo-1604864386572-a54278f83a49?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
        title: "Jenny",
        job: "something"
    },
    {
        img: "https://images.unsplash.com/photo-1604864386572-a54278f83a49?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
        title: "Jenny",
        job: "something"
    }
]

const navLink = [
    {
        name: 'profile',
        href: '#profile'
    },
    {
        name: 'horeca',
        href: '#horeca'
    },
    {
        name: 'retail',
        href: '#retail'
    },
    {
        name: 'over ons',
        href: '#over-ons'
    }
];

const App = () => {
    const [activeNav, setActiveNav] = useState(0);

    const [profileInfo, changeProfileInfo] = useState({
        googleId: '',
        name: '',
        image: '',
        email: ''
    });

    const handleResponse = (response) => {
        if (response) {
            changeProfileInfo({
                googleId: response.profileObj.googleId,
                name: response.profileObj.name,
                image: response.profileObj.imageUrl,
                email: response.profileObj.email
            });
        } else {
            changeProfileInfo({
                googleId: '',
                name: '',
                image: '',
                email: ''
            });
        }
    };

    return (
        <Container className="App" maxWidth={false} fixed>
            <AppBar
                Left={<AppLogo text='open devs' />}
                Center={<NavBar navLink={navLink} setActiveNav={setActiveNav} activeNav={activeNav} />}
                Right={<GoogleButton isLoggedIn={profileInfo.googleId ? true : false} handleResponse={handleResponse} />}
            />
            <ProfileSection isLoggedIn={profileInfo.googleId ? true : false} name={profileInfo.name} image={profileInfo.image} email={profileInfo.email} />
            <RightImageSection id="horeca" src="https://images.unsplash.com/photo-1604864386572-a54278f83a49?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80" alt="random" height={55} width={90} />
            <TextImage id="retail" heading="lorem ipsum ipsum loremm lorem ipsum" subheading="lorem ipsum ipsum loremm lorem ipsum lorem ipsum ipsum loremm lorem ipsum lorem ipsum ipsum loremm lorem ipsum" imageUrl="https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg" />
            <RightImageSection id="over-ons" src="https://images.unsplash.com/photo-1604864386572-a54278f83a49?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80" alt="random" height={55} width={90} />
            <ScrollButton goingUp={true} staticPlace={false} scrollTarget="#logo" threshold={100} />
            <PeopleGrid people={people} />
        </Container>
    );
}

export default App;
