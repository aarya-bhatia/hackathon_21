import java.util.Date;

class Ingredient {

    String name;
    Date expiry;

    public long shelfLifeRemaining() {
        Date today = new Date();
        return timeDiff(expiry, today);
    }

    private long timeDiff(Date expiry, Date today) {
        long timeDiff = expiry.getTime() - today.getTime(); // in millisec
        long timeDiffInDays = (timeDiff / (1000 * 60 * 60 * 24)) % 365;
        return timeDiffInDays;
    }

    public Long getKey() {
        return IngredientHash.hash(name);
    }
}