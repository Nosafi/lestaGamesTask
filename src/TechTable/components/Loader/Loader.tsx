import css from "./Loader.module.scss";

function Loader() {
  return (
    <div className={css.loader}>
      <span className={css.loader__spinner}></span>
    </div>
  );
}

export default Loader;
