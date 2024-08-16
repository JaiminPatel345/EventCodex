
import mongoose from 'mongoose'

const eventSchema = new mongoose.Schema({
    name: String,
    date: Date,
    platform: {
        type: String,
        enum: {
            values: ["LEETCODE", "CODECHEF", "CODEFORCES", "ATCODER", "GFG", "HACKERRANK", "HACKEREARTH", "CODENINJA"],
            message: '{VALUE} is not supported'
        }
    }
});

const Event = mongoose.model('Event', eventSchema);
export default Event;
