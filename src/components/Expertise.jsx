import { Check, ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import "../styles/expertise.css";
import Title from "../components/Title";
import { Link } from "react-router-dom";
import HeroSection from "./HeroSection";
import QualitySection from "./QualitySection"



const featuresOukkaha = [
  "Techniques d'extraction traditionnelles",
  "Production 100% naturelle et biologique",
  "Contrôle qualité rigoureux",
  "Traçabilité complète de nos produits",
  "Normes internationales respectées",
  "Développement durable et écologique",
];
const featuresAlafIssen = [
  "Formules équilibrées et adaptées aux besoins de chaque espèce  ",
  "Respect des normes sanitaires et qualité constante",
  "Matières premières rigoureusement sélectionnées",
  "Suivi technique personnalisé pour les éleveurs ",
  "Innovation et amélioration continue",
  "Distribution fiable et réactive à l’échelle nationale ",
];

const statsOukaha = [
  { number: 40, suffix: "+", description: "Années d'expérience" },
  { number: 500, suffix: "+", description: "Employés" },
  { number: 10, suffix: "+", description: "pays d'exportation" },
  { number: 100, suffix: "%", description: "satisfaction clients" },
];
const statsAlafIssen = [
  { number: 40, suffix: "+", description: "années d'expérience" },
  { number: 500, suffix: "+", description: "lignesde fabrication automitisées" },
  { number: 3343, suffix: "+", description: "Capacité de production" },
  { number: 553, suffix: "+", description: "Capacité de stockage des MP" },
];

const products = [
  {
    id: 1,
    name: "Huile d'Olive Extra Vierge",
    category: "OUAKKAHA MOHAMED",
    description:
      "Huile d'olive pressée à froid, riche en saveurs et antioxydants",
    image: "../../public/imgs/brown-hen-isolated_146346-1501.avif",
    price: "125 MAD",
    url: "/ouakkaha-mohamed",
  },
  {
    id: 2,
    name: "Huile d'Argan Bio",
    category: "OUAKKAHA MOHAMED",
    description:
      "Huile d'argan pure extraite manuellement selon les traditions berbères",
    image:
      "../../public/imgs/chicken-with-white-tail-stands-field_558469-4135.jpg",
    price: "250 MAD",
    url: "/ouakkaha-mohamed",
  },
  {
    id: 3,
    name: "Aliment pour Bétail Premium",
    category: "ALF ISSEN",
    description: "Aliment équilibré pour bovins et ovins, riche en nutriments",
    image:
      "../../public/imgs/brown-hen-isolated-white-studio-shot_136670-2671.avif",
    price: "80 MAD",
    url: "/alf-issen",
  },
  {
    id: 4,
    name: "Mix Volaille Biologique",
    category: "ALF ISSEN",
    description: "Mélange d'aliments naturels pour volailles, sans OGM",
    image:
      "../../public/imgs/three-small-chickens-isolated-white-background_488220-8004.avif",
    price: "95 MAD",
    url: "/alf-issen",
  },
];

const Oukkahaimgs = [
  "background.webp",
  "checken-white.png",
  "chiicks.jpg",
  "chicks.jpg",
  "eggss.jpg",
  "camionOuakkaha.jpg",
];

const AlafIssenImgs = [""];

const StatItem = ({type , number, suffix = "", description, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setTimeout(() => {
            let startTime;
            const duration = 2000;

            const animateCount = (timestamp) => {
              if (!startTime) startTime = timestamp;
              const progress = (timestamp - startTime) / duration;

              if (progress < 1) {
                setCount(Math.floor(progress * number));
                requestAnimationFrame(animateCount);
              } else {
                setCount(number);
                setHasAnimated(true);
              }
            };

            requestAnimationFrame(animateCount);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [number, delay, hasAnimated]);

  return (
    <div className="stat-item">
      <div className={`${type == "issen" ? "stat-number-issen" : "stat-number"}`} >
        <span ref={counterRef} >{count}</span>
        <span>{suffix}</span>
      </div>
      <p className="stat-description">{description}</p>
    </div>
  );
};

const Expertise = () => {



  return (
    <>
      <HeroSection imgs={Oukkahaimgs}>
        <h1 className="animate-fade">
          Notre Metier Est De preparer <span>L'avenir</span>
        </h1>
        <p>
          Nous sommes spécialisés dans la fourniture de solutions d'alimentation
          de haute qualité pour les bovins, les ovins et les vaches laitières au
          Maroc
        </p>
        <div className="links">
          <button className="discover-btn">Découvrir notre histoire</button>
          <button className="products-btn">
            Voir nos produits
            <span className="icon">
              <ArrowRight />
            </span>
          </button>
        </div>
      </HeroSection>

      <section>
        <div className="expertise-container">
          <div className="container">
            <div className="left">
              <Title
                title="Notre Expertise for Ouakkaha Mohammed"
                type={"oukkaha"}
              />

              <h2>Groupe OUAKKAHA, l'excellence marocaine depuis 1980</h2>
              <p>
                Fondé il y a plus de quatre décennies, Groupe OUAKKAHA s'est
                imposé comme un leader dans la production et l'exportation
                d'huile d'olive et d'argan au Maroc. Notre mission est de
                partager avec le monde les trésors naturels marocains tout en
                préservant les méthodes traditionnelles d'extraction.
              </p>

              <ul className="list">
                {featuresOukkaha.map((feature, index) => (
                  <li key={index}>
                    <span>
                      <Check className="h-3 w-3" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="right">
              <div>
                <div>
                  <img
                    src="imgs/brown-checken.avif"
                    alt="Oliveraie marocaine"
                  />
                </div>
                <div
                  style={{
                    height: "250px",
                    backgroundColor: "white",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img src="imgs/baby-chick.webp" />
                </div>
              </div>
              <div>
                <div>
                  <img src="imgs/white-checken.avif" />
                  {/* <img src="" /> */}
                </div>

                <div
                  style={{
                    height: "250px",
                    backgroundColor: "white",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img src="imgs/eggs-white-bg.avif" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="stats-section">
        <div className="stats-container">
          <h2 className="stats-title">Groupe <span style={{color:"#f55b09"}}>OUAKKAHA </span> en chiffres</h2>
          <div className="stats-grid">
            {statsOukaha.map((stat, index) => (
              <StatItem
                key={index}
                number={stat.number}
                suffix={stat.suffix}
                description={stat.description}
                delay={index * 200}
              />
            ))}
          </div>
        </div>
      </section>


      <HeroSection imgs={AlafIssenImgs}>
        <h1 className="animate-fade">
          <span style={{color:"#26b82d"}}>Alaf Issen : </span>
          L’alimentation animale au service de la performance{" "}
        </h1>
        <p>
          Nous sommes spécialisés dans la fourniture de solutions d'alimentation
          de haute qualité pour les bovins, les ovins et les vaches laitières au
          Maroc
        </p>
        <div className="links">
          <button className="discover-btn" style={{backgroundColor:"#26b82d"}}>Découvrir notre histoire</button>
          <button className="products-btn  alf-button" >
            Voir nos produits
            <span className="icon">
              <ArrowRight />
            </span>
          </button>
        </div>
      </HeroSection>


      <section>
        <div className="expertise-container">
          <div className="container">
            <div className="left">
              <Title
                title="Notre Expertise for Alaf Issen"
                type={"alafIssen"}
              />

              <h2>Alaf Issen, la référence en alimentation animale au Maroc</h2>
              <p>
                Depuis sa création en 2007, Alaf Issen s'est imposée comme un
                acteur majeur dans le domaine de l'alimentation du bétail au
                Maroc. Située à Zaouiat Issen, la société est spécialisée dans
                la production et la distribution de céréales, aliments composés
                et compléments nutritionnels pour bétail, volailles et ovins.
                Notre engagement est d’offrir une nutrition animale de qualité,
                respectueuse de la santé animale et des normes internationales.
              </p>

              <ul className="list">
                {featuresAlafIssen.map((feature, index) => (
                  <li key={index}>
                    <span className="alafIssen-link">
                      <Check className="h-3 w-3" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="right">
              <div>
                <div>
                  <img
                    src="imgs/brown-hen-isolated-white-studio-shot_136670-2671.avif"
                    alt="Oliveraie marocaine"
                  />
                </div>
                <div>
                  <img src="imgs/brown-hen-isolated-white-studio-shot_136670-2671.avif" />
                </div>
              </div>
              <div>
                <div>
                  <img src="https://images.unsplash.com/photo-1615485925600-97237c4fc1ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80" />
                </div>
                <div>
                  <img src="imgs/brown-hen-isolated-white-studio-shot_136670-2671.avif" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-container">
          <h2 className="stats-title">Groupe <span style={{color:"#26b82d"}}>ALAFISSEN </span>en chiffres</h2>
          <div className="stats-grid">
            {statsAlafIssen.map((stat, index) => (
              <StatItem
              type="issen"
                key={index}
                number={stat.number}
                suffix={stat.suffix}
                description={stat.description}
                delay={index * 200}
              />
            ))}
          </div>
        </div>
      </section>


     {/* <ProductsSection/> */}

     <QualitySection />
    </>
  );
};

export default Expertise;


const ProductsSection = () => {
  const scrollContainerRef = useRef(null); // Properly typed and initialized

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = 320; // Approximate card width + margin

      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };


  return  <section className="products-section">
  <div className="products-container">
    <div className="products-header">
      <Title title={"Nos Produits"} type={"oukkaha"} />
      <h2 className="products-title" style={{ marginBottom: "20px" }}>
        Découvrez notre gamme de produits d'excellence
      </h2>
      <div className="products-navigation">
        <button
          onClick={() => scroll("left")}
          className="navigation-button"
          aria-label="Produits précédents"
        >
          <ArrowLeft className="icon" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="navigation-button"
          aria-label="Produits suivants"
        >
          <ArrowRight className="icon" />
        </button>
      </div>
    </div>

    {/* Scrollable Products Grid */}
    <div
      ref={scrollContainerRef} // Assign the ref here
      className="products-grid"
    >
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <div className="product-image-container">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <span className="product-category">{product.category}</span>
          </div>
          <div className="product-details">
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <div className="product-footer">
              <span className="product-price">{product.price}</span>
              <Link to={product.url} className="product-link">
                Voir plus
                <ExternalLink className="link-icon" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="products-cta">
      <Link to="/ouakkaha" className="cta-button">
        Découvrir tous nos produits
      </Link>
    </div>
  </div>
</section>
}