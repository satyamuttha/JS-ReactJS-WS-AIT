function Header({ title, name, f1 }) {
  return (
    <div>
      <h2>
        Header Component : {title} {f1.name}
      </h2>
      <hr />
    </div>
  );
}

export default Header;
