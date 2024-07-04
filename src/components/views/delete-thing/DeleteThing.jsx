import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchThings, deleteThing } from "../../../slices/thingsSlice";
import { setBreadcrumb } from "../../../slices/breadcrumbSlice";
import { showToast } from "../../../slices/toastSlice";
import styles from "./delete-thing.module.css";
import { fetchBags, deleteBag } from "../../../slices/bagSlice";

const DeleteThing = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const thing = useSelector((state) =>
    state.things.items.find((thing) => thing.id === parseInt(id))
  );

  const bag = useSelector((state) =>
    state.things.items.find((thing) => thing.id === parseInt(id))
  );

  useEffect(() => {
    dispatch(
      setBreadcrumb([
        { label: "Home", url: "/" },
        { label: "My things", url: "/my-things/" },
        { label: "Delete thing" },
      ])
    );
  }, [dispatch]);

  useEffect(() => {
    if (!thing) {
      dispatch(fetchThings());
    }
  }, [thing, dispatch]);

  useEffect(() => {
    if (!bag) {
      dispatch(fetchBags());
    }
  }, [bag, dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(deleteThing(thing.id));
    dispatch(showToast(`Thing deleted`));
    navigate("/my-things/");
  };

  const handleBagSubmit = async (e) => {
    e.preventDefault();
    await dispatch(deleteBag(bag.bag_id));
    dispatch(showToast(`Thing deleted`));
    navigate("/my-things/");
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit}>
        <p>{thing && thing.name}</p>
        <button type="submit" className={styles.deletebutton}>
          Delete thing
        </button>
      </form>
      <form onSubmit={handleBagSubmit}>
        <p>{bag && bag.name}</p>
        <button type="submit" className={styles.deletebutton}>
          Delete bag
        </button>
      </form>
    </div>
  );
};

export default DeleteThing;
