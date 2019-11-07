const router = require("express").Router();
const db = require("./helpers");

router.get("/recipes", async (req, res) => {
    try {
        const recipes = await db.getRecipes();
        res.status(200).json(recipes);
    } catch (error) {
        res.status(500).json({ message: "Internal server error when getting the recipes", error })
    }
});

router.get("/recipes/:id/shoppingList", async (req, res) => {
    try {
        const shoppingList = await db.getShoppingList(req.params.id);
        res.status(200).json(shoppingList);
    } catch (error) {
        res.status(500).json({ message: "Internal server error when getting the shopping list", error })
    }
});

router.get("/recipes/:id/instructions", async (req, res) => {
    try {
        const instructions = await db.getInstructions(req.params.id);
        res.status(200).json(instructions);
    } catch (error) {
        res.status(500).json({ message: "Internal server error when getting the instructions", error })
    }
});

router.get("/ingredients/:id/recipes", async (req, res) => {
    try {
        const recipes = await db.getRecipesByIngredients(req.params.id);
        res.status(200).json(recipes);
    } catch (error) {
        res.status(500).json({ message: "Internal server error when getting the recipes that use the ingredient", error })
    }
});

module.exports = router;