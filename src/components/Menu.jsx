import "../assets/styles/Main.css";

export default function Menu(props) {
  return (
    <section className="menu">
      <h2>Menu</h2>
      {props.menu.map(function (item) {
        return (
          <article>
            <figure>
              <img src={item.menuImage} alt={item.menuName} />
              <figcaption>
                Photo by
                <a href={item.imageArtistLink}>{item.artistName}</a>
              </figcaption>
            </figure>
            <h3>{item.menuName}</h3>
            <p>{item.menuDescription}</p>
          </article>
        );
      })}
    </section>
  );
}
