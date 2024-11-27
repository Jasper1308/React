import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Button from "../components/Button/Button"

function Home() {
    return (
        <>
            <Header />
            <Button buttonStyle="primary" arrow>Olá</Button>
            <h1>HOME</h1>
            <p>subtittle</p>
            <Footer />
        </>
    )
}

export default Home