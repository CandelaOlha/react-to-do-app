import "../styles/CardsContainer.scss";
import SectionTitle from "./SectionTitle";
import Card from "./Card";

const CardsContainer = () => {
    return (
        <section className="cards-container">
            <SectionTitle title="My tasks" />
            <Card />
        </section>
    )
}

export default CardsContainer;