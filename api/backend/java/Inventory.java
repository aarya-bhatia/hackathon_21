import java.util.HashMap;

class Inventory {

    private HashMap<Long, Integer> inventory;

    public Inventory() {
        inventory = new HashMap<>();
    }

    public void add(Ingredient ingredient, int quantity) {
        inventory.put(ingredient.getKey(), quantity);
    }

}
