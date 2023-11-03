import css from "./Loader.module.scss";

function Loader() {
  return (
    <div className={css.loaderContainer}>
      <span className={css.loaderSpinner}></span>
    </div>
  );
}

export default Loader;
