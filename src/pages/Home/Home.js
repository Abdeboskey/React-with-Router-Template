import styles from './Home.module.css';

const Home = () => {
  return (
    <main className={styles.main}>
      <p>
        Howdy y'all, I'm
      </p>
      <h1>
        Aaron Burris-DeBoskey
      </h1>
      <p>
        {'=>'} a software engineer, musician, & inline skater
        <br />from Denver, CO.
      </p>
    </main>
  );
}

export default Home;
