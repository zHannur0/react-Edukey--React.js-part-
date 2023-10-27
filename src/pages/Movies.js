import Header from "../components/Layouts/Header";
import HeaderMovie from "../components/Containers/HeaderMovie";
import Catalog from "../components/Catalog/Catalog";
function Movies() {


    return (
        <>
        <Header></Header>
        <HeaderMovie></HeaderMovie>
        <Catalog/>
        </>
    );
}

export default Movies;