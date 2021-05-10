function checkToken() {
  const userinfo = this.$store.state.userInfo;
  console.log(userinfo);
  const token = this.$store.state.token;
  if (token == "") {
    console.log("token为空");
    return false;
  } else {
    console.log("token不 为空");
    return true;
  }
}

export default {
  checkToken
};
