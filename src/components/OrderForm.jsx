export default function OrderForm() {
  return (
    <section id="order-form">
      <h2>Place Your Order</h2>
      <form action="">
        <section className="menus">
          <h3>Menus</h3>
          <label>
            Number of Flaming Burger
            <input type="number" name="flaming-burger" min="0" required />
          </label>
          <label>
            Number of Healthy Waffle
            <input type="number" name="healthy-waffle" min="0" required />
          </label>
          <label>
            Number of Amazing Sushi
            <input type="number" name="amazing-sushi" min="0" required />
          </label>
        </section>
        <section className="add-ons">
          <h3>Add-ons</h3>
          <label>
            Extra cheese <input type="checkbox" name="add-ons" />
          </label>
          <label>
            Extra fruits <input type="checkbox" name="add-ons" />
          </label>
          <label>
            Extra sushi <input type="checkbox" name="add-ons" />
          </label>
        </section>
        <textarea rows="15" placeholder="For special requests"></textarea>
        <input type="submit" value="Go To Checkout" />
      </form>
    </section>
  );
}
