import Categories from "../components/Home/Categories"
import Hero from "../components/Home/Hero"
import Pictures from "../components/Home/Pictures"
import Products from "../components/Home/Products"

const Home = () => {
  return (
    <div>
        <Hero />
        <Categories />
        <Products />
        <Pictures />
    </div>
  )
}

export default Home