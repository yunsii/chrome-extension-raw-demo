import User from "./models/user.js";

async function main() {
  const user = User.new({ name: "Yuns" });
  console.log(user.greet());

  const result = await fetch("http://google.com");
  console.log("🚀 ~ result.status:", result.status);
  console.log("🚀 ~ result.text():", await result.text());
}

main();
