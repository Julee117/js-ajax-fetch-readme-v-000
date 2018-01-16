const app = "I don't do much.";

const token = '40d0bd03f2ec0e4dcd017c1b6949b804bcd5a793'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
