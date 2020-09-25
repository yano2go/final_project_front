import _ from "underscore";
function homepage() {
  const serverData = getServerData();
  const categories = _.uniq(serverData.map(({ category }) => category));
  return (
    <div className="card">
      {categories.map((categoryName, i) => {
        const firstGif = serverData.filter(
          ({ category }) => category === categoryName
        )[0];

        return (
          <div className="contents" key={i}>
            <h3>{categoryName}</h3>
            <img src={firstGif.gif_url} alt="can't find it!" />
          </div>
        );
      })}
    </div>
  );
}