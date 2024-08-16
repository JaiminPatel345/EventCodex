import express from 'express'
import passport from 'passport';
import User from '../models/user.js';
import leetcodeServices from '../utilities/leetcode.js'


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

const getLeetcodeData = async (req, res) => {
    const data = await leetcodeServices.getFullProfile("jaiminpatel345");
    res.send(data);
}

const getSubmissions = async (req, res) => {
    const data = await leetcodeServices.last20Submissions("soldier_of_god");
    res.send(data);
}


export default {
    signup,
    login,
    renderLoginPage,
    renderSignupPage,
    getLeetcodeData,
    getSubmissions,

}
