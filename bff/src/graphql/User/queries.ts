export const queries = {
  allUsers: () => {
    console.log("allUsers")
    return {
      id: "12345",
      email: "some.user@email.com",
      password: "Pa$$w0rd!",
      loggedIn: false,
      firstName: "Some",
      lastName: "User",
    }
  },
}
