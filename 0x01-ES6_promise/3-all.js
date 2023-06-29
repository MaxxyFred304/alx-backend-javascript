import { uploadPhoto, createUser } from "./utils";

async function handleProfileSignup() {
  try {
    const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);
    console.log(`photo-${photo.body} ${user.firstName} ${user.lastName}`);
  } catch (error) {
    console.log("Signup system offline");
  }
}

export default handleProfileSignup;
