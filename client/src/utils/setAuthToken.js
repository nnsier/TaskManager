const setAuthToken = token => {
  const myHeaders = new Headers();

  if (token) {
    myHeaders.set("Authorization", token);
  } else {
    myHeaders.delete("Authorization");
  }
};

export default setAuthToken;
