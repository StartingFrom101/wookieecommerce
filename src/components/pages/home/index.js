import HomeCarousel from "../../layout/carousel";
import Footer from "../../layout/footer";
import PopularProducts from "../../layout/popularProducts";
import CategorySections from "../../layout/categorySections";

function Home() {
    return ( 
        <>        
            <HomeCarousel/>
            <hr className="divider-horizontal" />
                <CategorySections/>
            <hr className="divider-horizontal" />
                <PopularProducts/>
            <Footer/>
        </>
     );
}

export default Home;