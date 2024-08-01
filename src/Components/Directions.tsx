import lady from "../assets/Rectangle 23.png";
import circ from "../assets/circle.png";

export default function Directions() {
  return (
    <div className="direction">
      <div>
        <h2>Directions</h2>

        <div className="items">
          <div className="i">
            <img className="circle" src={circ} alt="item circle" />
            <div>
              <h3>1. Lorem ipsum dolor sit amet </h3>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem.
              </p>

              <img src={lady} alt="image of lady looking" />

              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem.
              </p>
            </div>
          </div>
          <div className="i">
            <img className="circle" src={circ} alt="item circle" />
            <div>
              <h3>2. Lorem ipsum dolor sit amet </h3>

              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem.
              </p>
            </div>
          </div>
          <div className="i">
            <img className="circle" src={circ} alt="item circle" />
            <div>
              <h3>3. Lorem ipsum dolor sit amet </h3>

              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
