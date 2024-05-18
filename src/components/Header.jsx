import "../assets/styles/Header.css";

export default function Header() {
  return (
    <header>
      <nav>
        <h1>Arvee</h1>
        <ul>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#order-form">Order</a>
          </li>
        </ul>
      </nav>
      <figure>
        <img
          src="https://images.pexels.com/photos/23744953/pexels-photo-23744953/free-photo-of-furniture-in-a-restaurant.jpeg"
          alt="A picture of a table with three chairs"
          id="header-img"
        />
        <figcaption>
          Photo by
          <a href="https://www.pexels.com/@nadin-sh-78971847/" target="_blank">
            Nadin Sh
          </a>
        </figcaption>
      </figure>
    </header>
  );
}
