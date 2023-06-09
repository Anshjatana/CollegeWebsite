
import './App.css';
import "./styles.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Graph from "./components/Graph";
import StudentList from "./components/StudentList";
import ScoreCards from "./components/ScoreCards";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Home/>
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
      <Footer />
    </>
  );
}

export default App;
