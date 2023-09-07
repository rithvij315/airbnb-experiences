import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card"
import data from "./data"

export default function App() {

  const dataArr = data.map(card => 
    <Card 
      key={card.id}
      {...card}
    />)
    
  console.log(dataArr)
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {dataArr}
      </section>
    </div>
  
  );
}

