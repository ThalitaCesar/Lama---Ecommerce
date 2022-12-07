import app from "./app";
import { AddressInfo } from "net";
import { UserController } from "./endpoints/UserController";
import { RecipeController } from "./endpoints/RecipeController";
import { FollowerController } from "./endpoints/FollowerController";

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

const userController = new UserController();
const recipeController = new RecipeController();
const followerController = new FollowerController();

app.post("/signup", userController.signUpUser);

app.post("/login", userController.loginUser);

app.get("/user/profile", userController.getProfile);

app.get("/user/feed", recipeController.getUserRecipeFeed);

app.get("/user/:id", userController.getProfileById);

app.delete("/delete", userController.deletAccount);

app.post("/recipe", recipeController.createRecipe);

app.get("/recipe/:id", recipeController.getRecipe);

app.put("/recipe/update", recipeController.updateRecipe);

app.delete("/recipe/:id", recipeController.deletRecipe);

app.post("/user/follow", followerController.followUser);

app.post("/user/unfollow", followerController.unfollowUser);


