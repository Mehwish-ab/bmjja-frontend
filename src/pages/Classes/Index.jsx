import React,{ useState,useEffect } from "react";
import VideoCard from "./VideoCard/VideoCard";
import { Container } from "react-bootstrap";
import video1Img from "../../assets/images/video1.1da1e77ed3716d535e8a.png";
import video2Img from "../../assets/images/video2.d4c2fcbac63a765c8983.png";
import video3Img from "../../assets/images/video3.4bf623dc22fcc03e833c.png";
import video4Img from "../../assets/images/video4.58db418e081ae0cf0111.png";
import video5Img from "../../assets/images/video5.d6c8cb848bf4292a6aa9.png";
import video6Img from "../../assets/images/video6.4144047bea383bb2220a.png";
import video7Img from "../../assets/images/video7.a280b9183547de9c01d6.png";
import video8Img from "../../assets/images/video8.26b21a863ef0d4f26403.png";
import video9Img from "../../assets/images/video9.1a7e7cc191305ea58a52.png";
import video10Img from "../../assets/images/video10.0a62c73459ee0de12252.png";
import video11Img from "../../assets/images/video11.df92b47435e1eee4eeb3.png";
import video12Img from "../../assets/images/video12.271e3623749f3140591e.png";

// import Footer from "../../components/Footer/Footer";
import "./styles.css";
import CategoryBar from "../../AdminPortal/AddCategories/CategoryBar/CategoryBar";
const Index = () => {
  const videoDetail = [
    {
      id: "1",
      title: "Single-Hand Guard Pass  ",
      description:
        "Seize swift victory with the Single-Hand Guard Pass, mastering martial finesse and precision.",
      img: video1Img,
    },
    {
      id: "2",
      title: "Double Hand Guard pass ",
      description:
        "Master precision with the Double Hand Guard Pass, dominating opponents with tactical...",
      img: video2Img,
    },
    {
      id: "3",
      title: "Side Control Fundamental ",
      description:
        "Hone your grappling finesse with Side Control fundamentals, mastering strategic precision.",
      img: video3Img,
    },
    {
      id: "4",
      title: "Americana from Mount Fundamental ",
      description:
        "Perfect your Mount Americana technique, mastering control and submission with finesse.",
      img: video4Img,
    },
    {
      id: "5",
      title: "Trap & Roll (UPA) - Mount Escape  ",
      description:
        "Master strategic evasion with the Trap & Roll (UPA), outmaneuvering opponents with finesse.",
      img: video5Img,
    },
    {
      id: "6",
      title: "Scissors Sweep to Mount ",
      description:
        "Core Jiu Jitsu maneuver utilizing leg control to transition from guard to the mount position. ",
      img: video6Img,
    },
    {
      id: "7",
      title: "Push Kick Sweep to Mount",
      description:
        "Basic Jiu Jitsu technique for transitioning to mount by sweeping the opponent with a push",
      img: video7Img,
    },
    {
      id: "8",
      title: "Cross Collar Choke -Close Guard ",
      description:
        "Dominate with the Cross Collar Choke from Close Guard, executing precise control.",
      img: video8Img,
    },
    {
      id: "9",
      title: "Cross Collar Choke - From Mount ",
      description:
        "Harness the Cross Collar Choke from Mount, mastering control and submission with strategy.",
      img: video9Img,
    },
    {
      id: "10",
      title: "Stand to Open the Guard  ",
      description:
        "Master the art of Stand to Open the Guard, breaking through defenses with strategy.",
      img: video10Img,
    },
    {
      id: "11",
      title: "1st Standing Guard Pass ",
      description:
        "Seize dominance with the 1st Standing Guard Pass, asserting control from the start.",
      img: video11Img,
    },
    {
      id: "12",
      title: "2nd Standing Guard Pass   ",
      description:
        "Advance mastery with the 2nd Standing Guard Pass, asserting control with precision.",
      img: video12Img,
    },
  ];
  const [allVideos, setAllVideos] = useState([{}]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the videos from the backend when the component mounts
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('http://localhost:3000/videos'); // Replace with your backend URL
        if (!response.ok) {
          throw new Error('Failed to fetch videos');
        }
        const data = await response.json();
        setAllVideos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div style={{marginTop: "7.3rem"}} className="classes-page">
      <CategoryBar />
      <Container>

        <div className="video-card-row mt-4 d-grid gap-3">
          {allVideos?.map((item) => (
            <VideoCard
              id={item._id}
              img={item.thumbnail}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Index;
