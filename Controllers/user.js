import express from 'express'
import passport from 'passport';
import User from '../models/user.js';


const signup = async (req, res) => {

}
const login = async (req, res) => {

}

const renderLoginPage = async (req, res) => {
    res.send("Login page");
}

const renderSignupPage = async (req, res) => {
    res.send("Signup page");
}


export default {
    signup,
    login,
    renderLoginPage,
    renderSignupPage,
}
