import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div>
      <Card />
    </div>
  );
}

function Card() {
  return (
    <div className="card">
      <Avatar imageLink="public/pfp.png" />

      <div className="data">
        <Intro
          name="Yui Hirasawa"
          details="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis sunt totam quam placeat vero nihil, incidunt saepe maiores minima officiis nulla similique ab veritatis officia modi aspernatur sequi doloribus magnam!"
        />
        <SkillList />
      </div>
    </div>
  );
}

function SkillList() {
  return (
    <>
    <Skill name="javaScript" color="yellow"/>
    <Skill name="Css" color="blue"/>
    <Skill name="html" color="orange"/>
    </>
  )
}

function Skill(props){
return (
  <div style={{ backgroundColor: props.color }} className="skill">
    <p>{props.name}</p>
  </div>
)
}

function Avatar(props) {
  return <img src={props.imageLink} alt="" />;
}

function Intro(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.details}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
