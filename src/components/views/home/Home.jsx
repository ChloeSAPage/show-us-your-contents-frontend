import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setBreadcrumb } from "../../../slices/breadcrumbSlice";
import styles from "./home.module.css";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setBreadcrumb([{ label: "Home" }]));
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      <h2>Welcome to a website of stuff</h2>
      <p>We REALLY like stuff. We're REALLY proud of our stuff.</p>
      <p>We think you should be too!</p>
      <h3>How this works</h3>
      <ul>
        <li>
          <strong>Make an account/sign in:</strong> You can only view some stuff
          from here. Join our adventurer's guild to get crazy with your stuff.{" "}
        </li>
        <li>
          <strong>Add your receptical:</strong> What do you want to fill? Bag?
          Bucket? Your mother's basement? We don't care.
        </li>
        <li>
          <strong>Add your treasure:</strong> Gold? lemonade? Lovely bit of
          string? Pocket lint? One man's tat is another's treasure right...{" "}
        </li>
      </ul>
      <h4>Go nuts. Have fun. We did.</h4>
    </div>
  );
}

export default Home;
