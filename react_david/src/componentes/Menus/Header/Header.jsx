export default function Header({ arrayObjeto }) {
  const { logo, links, menu } = arrayObjeto;
  return (
    <div>
      <img src={logo.img} alt="Logo" />
      <nav>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.url}>{link.text}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div>
        {menu.map((menuItem, index) => (
          <a key={index} href={menuItem.url}>{menuItem.text}</a>
        ))}
      </div>

    </div>
  );
}
