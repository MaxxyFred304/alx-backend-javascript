import { uploadPhoto, createUser } from "./utils";

function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([photo, user]) => {
      console.log(`photo-${photo.body} ${user.firstName} ${user.lastName}`);
    })
    .catch(() => {
      console.log("Signup system offline");
    });
}

export default handleProfileSignup;
