
public class IngredientHash {

    private static long p = 2115748912131L;
    private static long a = 123758877120L;

    public static long hash(String str) {
        long r = 31;
        for (char c : str.toCharArray()) {
            r += p * r * c + a;
        }
        return (r % 1000000L);
    }
}
