import css from "./Loader.module.scss";
/**
 * Component for loading while data fetching.
 */
function Loader() {
  return (
    <div className={css.loader} data-testid="loader">
      <span className={css.loader__spinner}></span>
    </div>
  );
}

export default Loader;
