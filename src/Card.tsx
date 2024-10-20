import "./Card.scss";
import Avatar from "./assets/images/avatar.png";

function Card() {
  return (
    <article className="card">
      <section className="profile">
        <img className="avatar" src={Avatar} alt="Avatar" />
        <p className="profile-name">Bruno Silva Oliveira</p>
        <p className="profile-place">Mogi Mirim, Brazil</p>
        <p className="profile-info">
          "Front-end developer and Linux enthusiast."
        </p>
      </section>
      <section className="links">
        <a target="_blank" href="https://github.com/Bruno514">
          GitHub
        </a>
        <a target="_blank" href="https://frontendmentor.io/profile/Bruno514">
          Frontend Mentor{" "}
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/bruno-silva-oliveira-b391a02ab/"
        >
          LinkedIn
        </a>
        <a href="#">Twitter</a>
        <a href="#">Instagram</a>
      </section>
    </article>
  );
}

export default Card;
