 function Tendencias({ objeto }) {
  const { text, url } = objeto;
  return (
    <div>
      <a href={url}>
        <h1>{text}</h1>
      </a>
    </div>
  );
}
export default Tendencias