import TrpcClient from "../../client/lib/trpc";

console.log(process.env.NODE_ENV, process.env.PORT);

const start = async () => {
  const app = document.getElementById("app");

  console.log("Parcel", app);

  const user = await TrpcClient.query("getUser");

  console.log("[query] [getUser]", user);

  const savedUser = await TrpcClient.mutation("saveUser", user);

  console.log("[query] [saveUser]", savedUser);
};

start();
