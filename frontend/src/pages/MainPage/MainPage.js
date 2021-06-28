import styles from "./MainPage.module.css";
import SearchBar from "../../components/SearchBar";
import UsersContainer from "../../components/UsersContainer";
import SongForm from "../../components/SongForm/SongForm";
const MainPage = () => {
  return (
    <div className={styles.mainPageContainer}>
      <h2 className={styles.heading}>Search Music</h2>
      <SearchBar />

    </div>
  );
};

export default MainPage;
