const { getUsers, getUserById } = require("../UserService");

describe("User Service", () => {
  test("Get All User", async () => {
    const users = await getUsers();
    expect(users.length).toBe(10);
  });

  test("Get User By ID", async () => {
    const user = await getUserById(1);
    expect(user).not.toBe(null);
  });
});
