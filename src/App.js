import "./App.css";
import "./styles.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Graph from "./components/Graph";
import StudentList from "./components/StudentList";
import ScoreCards from "./components/ScoreCards";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  const initialData = [
    {
      title: "1st Prize",
      description: "Apple Macbook Pro",
      image:
        "https://m.media-amazon.com/images/I/71a0bMsxeLL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "2nd Prize",
      description: "Apple Ipad Pro",
      image:
        "https://www.aptronixindia.com/media/catalog/product/cache/31f0162e6f7d821d2237f39577122a8a/i/n/in_r1444_cellular_pdp_image_position-1b_space_grey-removebg-preview_1_1.png",
    },
    {
      title: "3rd Prize",
      description: "Apple Iphone 14",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8GIFoJxiByuWy_s0IEA4DjXUAPAqthR8IpLDzVZbN6UHl9kKD0LLP22EV9XS5V-Tkl1U&usqp=CAU",
    },
    {
      title: "4th Prize",
      description: "Samsung S22 Ultra",
      image:
        "https://m.media-amazon.com/images/I/71J8tz0UeJL._AC_UF894,1000_QL80_.jpg",
    },
    {
      title: "5th Prize",
      description: "Samsung Tablet",

      image:
        "https://res-1.cloudinary.com/grover/image/upload/v1646833335/ctmukdekmxxwtsxiwzeq.png",
    },
    {
      title: "6th Prize",
      description: "Samsung Tablet",
      image:
        "https://media.croma.com/image/upload/v1667854794/Croma%20Assets/Computers%20Peripherals/Tablets%20and%20iPads/Images/247596_9_qlvicc.png",
    },
    {
      title: "7th Prize",
      description: "Samsung Tablet",
      image:
        "https://image-us.samsung.com/SamsungUS/home/mobile/tablets/6132022/GalaxyTabS8plus_Combo_PinkGold_1600x1200.jpg?$product-details-jpg$",
    },
    {
      title: "8th Prize",
      description: "Marshal Headphones",
      image:
        "https://www.marshallheadphones.com/on/demandware.static/-/Sites-zs-master-catalog/default/dw0816affa/images/marshall/headphones/major-iv/medium/cart-marshall-major-iv-black.png",
    },
    {
      title: "9th Prize",
      description: "Marshal Earphones",
      image:
        "https://www.marshallheadphones.com/on/demandware.static/-/Sites-zs-master-catalog/default/dwfa147abd/images/marshall/headphones/minor-iii/high-res/pos-zoom-marshall-minor-iii-black-01.png",
    },
    {
      title: "10th Prize",
      description: "BoAt Earphone",
      image: "https://m.media-amazon.com/images/I/61WKnlPcilL.jpg",
    },
    {
      title: "11th Prize",
      description: "BoAt Earphone",
      image:
        "https://media.croma.com/image/upload/v1678782263/Croma%20Assets/Entertainment/Wireless%20Earbuds/Images/270439_zdqy2m.png",
    },
    {
      title: "12th Prize",
      description: "BoAt Earphone",
      image:
        "https://www.reliancedigital.in/medias/boAt-Airdopes-131-Airdopes-491973402-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0ODcwfGltYWdlL2pwZWd8aW1hZ2VzL2gzNy9oMzAvOTkwNDQ4MjA5MTAzOC5qcGd8YTEwNzk1Y2NkZWIyNGI0YWEzNDk2MTVkNzRiMjcyOGFmMWIzYzU2MWFhYWI1ZWNmNDQzNWY4NDc2OWEwNWMyMQ",
    },
    {
      title: "13th Prize",
      description: "HP Wireless Mouse",
      image: "https://m.media-amazon.com/images/I/51gU704TWYL.jpg",
    },
    {
      title: "14th Prize",
      description: "HP Wireless Mouse",
      image:
        "https://in-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/6/V/6VY95AA-1_T1680339222.png",
    },
    {
      title: "15th Prize",
      description: "HP Wireless Mouse",
      image: "https://i.ebayimg.com/images/g/2-gAAOSwn0Jj6px1/s-l1600.jpg",
    },
  ];
  const [data, setData] = useState(initialData);
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    filterData(e.target.value);
  };

  const filterData = (text) => {
    const filteredData = initialData.filter((item) =>
      item.description.toLowerCase().includes(text.toLowerCase())
    );
    setData(filteredData);
  };
  return (
    <>
      <Header />
      <Home />
      <Graph />
      <StudentList />
      <ScoreCards
        imgURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgF2suM5kFwk9AdFjesEr8EP1qcyUvah8G7w&usqp=CAU"
        position="1st"
        studentName="ANSH"
        marks="476/500"
        prize="Apple Macbook Air"
      />
      <ScoreCards
        imgURL="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"
        studentName="DHRUV"
        position="2nd"
        marks="469/500"
        prize="Apple Ipad Air"
      />
      <ScoreCards
        imgURL="https://cdn.iconscout.com/icon/free/png-256/free-avatar-380-456332.png"
        studentName="JITESH"
        position="3rd"
        marks="451/500"
        prize="Samsung Tablet"
      />
      <div className="card-container">
        <h1>Prize List</h1>
        <div className="search-container">
          <input
            type="text"
            value={searchText}
            onChange={handleSearch}
            placeholder="Search by description"
          />
          <i className="fa fa-search"></i>
        </div>
        <div className="card-list">
          {data.map((card, index) => (
            <Cards
              key={index}
              title={card.title}
              description={card.description}
              image={card.image}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
