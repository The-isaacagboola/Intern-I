export default function Ingredients() {
  return (
    <div className="grid-ingredients">
      <div className="ingrid">
        <h1>Ingredients</h1>

        <div className="choice">
          <h2>For main dish</h2>
          {[...Array(5)].map((_, i) => (
            <div className="padBox" key={i}>
              <input type="checkbox" name="main" />
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          ))}
        </div>

        <div className="choice secondItem">
          <h2>For the sauce</h2>
          {[...Array(3)].map((_, i) => (
            <div className="padBox" key={i}>
              <input type="checkbox" name="main" />
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          ))}
        </div>
      </div>

      <h1>Next</h1>
    </div>
  );
}
