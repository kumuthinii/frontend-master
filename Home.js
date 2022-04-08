import { Link } from "react-router-dom";
const Home = () => {
    return (
        <>
          <main>
            <h2>Navigation</h2>
          </main>
          <nav>
            <Link to="/product-deposit">Product-Deposit</Link>
            <br></br>
            <Link to="/product-deposit-with-json">Product-Deposit-With-Json</Link>
            <br></br>
            <Link to="/product-card">Product-Card</Link>
          </nav>
        </>
      );
}

export default Home