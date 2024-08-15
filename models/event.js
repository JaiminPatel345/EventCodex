import express from 'express'
import mongoose, { mongo } from 'mongoose'
import { platform, type } from 'os'

const Event = new mongoose.Schema({
    name: String,
    date: Date,
    platform: {
        type: String,
        enum: {
            values: ["LEETCODE", "CODECHEF", "CODEFORCES", "ATCODER", "GFG", "HACKERRANK"],
            message: '{VALUE} is not supported'
        }
    }
})