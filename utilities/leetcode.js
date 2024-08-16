import fetch from 'node-fetch';

const URL = "https://alfa-leetcode-api.onrender.com";

const getFullProfile = async (username) => {
    const response = await fetch(`${URL}/${username}`);
    const data = await response.json();
    return data;
}

const last20Submissions = async (username) => {
    const response = await fetch(`${URL}/${username}/submission`);
    const data = await response.json();
    return data;
}


export default {
    getFullProfile,
    last20Submissions,

}

/* 
    {
  "routes": {
    "userDetails": {
      "/:username": "get your leetcodevis profile Details",
      "/:username/badges": "get your badges",
      "/:username/solved": "get total number of question you solved",
      "/:username/contest": "get your contest details",
      "/:username/contest/history": "get all contest history",
      "/:username/submission": "get your last 20 submission",
      "/:username/acSubmission": "get your last 20 accepted submission",
      "/:username/calendar": "get your submission calendar",
      "/userProfile/:username": "get full profile details in one call",
      "/userProfileCalendar?username=yourname&year=2024": "get your calendar details with year",
      "/languageStats?username=yourname": "get the language stats of a user",
      "/userProfileUserQuestionProgressV2/:userSlug": "get your question progress",
      "/skillStats/:username": "get your skill stats"
    },
    "contest": {
      "/userContestRankingInfo/:username": "get user contest ranking info"
    },
    "discussion": {
      "/trendingDiscuss?first=20": "get top 20 trending discussions",
      "/discussTopic/:topicId": "get discussion topic",
      "/discussComments/:topicId": "get discussion comments"
    },
    "problems": {
      "singleProblem": {
        "/select?titleSlug=two-sum": "get selected Problem",
        "/daily": "get daily Problem",
        "/dailyQuestion": "get raw daily question"
      },
      "problemList": {
        "/problems": "get list of 20 problems",
        "/problems?limit=50": "get list of some problems",
        "/problems?tags=array+math": "get list problems on selected topics",
        "/problems?tags=array+math+string&limit=5": "get list some problems on selected topics",
        "/officialSolution?titleSlug=two-sum": "get official solution of selected problem"
      }
    }
  }
}
*/