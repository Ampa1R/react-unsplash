import Unsplash from 'unsplash-js';

let settings = {
  applicationId: "7cb7489edf7bda6da444a48c175245f45b08a31188007afdd94bac147f6a92e3",
  secret: "6dc638f2713738508ae1ea302d3cfd964061e1a621c41d71755c3461dcf79bc7",
  callbackUrl: "http://myjs.tk:3000/auth",
};

let isLogged = false;
const bearerToken = localStorage.getItem('unsplash-token');
if(bearerToken) {
  settings.bearerToken = bearerToken;
  isLogged = true;
}

export { isLogged };

const unsplash = new Unsplash(settings);

export default unsplash;


export const goAuth = async () => {
  const authenticationUrl = await unsplash.auth.getAuthenticationUrl([
    "public",
    "write_likes",
  ]);
  location.assign(authenticationUrl);
}

// and getAuthUrl() ...
