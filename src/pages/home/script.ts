import TrpcClient from "../../client/lib/trpc";

const main = async () => {
  const user = await TrpcClient.query("getUser");

  console.log("[query] [getUser]", user);

  const savedUser = await TrpcClient.mutation("saveUser", user);

  console.log("[query] [saveUser]", savedUser);
};

main();
