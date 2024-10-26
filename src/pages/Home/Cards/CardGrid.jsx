import { Container } from "react-bootstrap";
import { CardGridStyled } from "./styles";
import TextCard from "./TextCard";
import imgCard1 from "../../../assets/images/KTTHUMB-1 (2).png";
import imgCard2 from "../../../assets/images/MAP45THUMB-1 (1).png";
import imgCard3 from "../../../assets/images/homepage img.d7b4199edb7c179f5e40.jpg";
import icTickDark from "../../../assets/icons/ic_tick_dark.png";
import ImageCard from "./ImageCard";
import {
  SmallHeadingBlack,
  lightGreen2,
  pink1,
  pureDark5,
} from "../../../components/GlobalStyle";

const handleClick = () => {
  // Redirect to the provided link
  window.open(
    "https://bmjja.kicksite.net/bizbuilders/landing_pages/eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjoibGRwZ18xODM0MCJ9.vjzzVqNuFBI-iJ2qMq_QsceUGlHumi4MSmEo22X_6vw",
    "_blank"
  );
};

const Row1 = () => {
  return (
    <div className="d-flex my-5 flex-lg-row flex-column gap-3">
      <TextCard
        heading={"Jiu Jitsu For Kids & Teenagers"}
        background={"#F3F7F2"}
        id={"KidsAndTeens"}
      >
        <p>
          We have set up our youth programme to accommodate students of
          different ages and skill levels
        </p>
        <div className="d-flex flex-wrap gap-4 mb-3">
          <div className="d-flex align-items-center gap-2">
            <img src={icTickDark} alt="" />
            <p className="mb-0">Little champs (4-7 years old)</p>
          </div>
          <div className="d-flex align-items-center gap-2">
            <img src={icTickDark} alt="" />
            <p className="mb-0"> Jr. Grapplers (8-11 years old) </p>
          </div>
          <div className="d-flex align-items-center gap-2">
            <img src={icTickDark} alt="" />
            <p className="mb-0"> Teens Grapplers (12-15 years old) </p>
          </div>
        </div>
        <p>
          Our Jiu Jitsu programme is created to provide children and young
          people aged 4-15 with an environment that allows them to experience
          and understand core values like focus, discipline, persistence,
          cooperation and respect - while at the same time, having fun.
        </p>
        <p>
          We have seen the hugely positive effect this has on kids and young
          people, as they grow in confidence on the mat and throughout the rest
          of their lives. To make sure our younger members can stay consistent
          our timetable (hyperlink to timetable) has Youth Classes available
          Monday to Saturday. If you'd like more information or to have a chat
          about your child, please get in touch.
        </p>
      </TextCard>
      <ImageCard
        id={1}
        btnBackground={lightGreen2}
        image={imgCard1}
        btnLabel={"book a free intro class today"}
        handleClick={handleClick}
      />
    </div>
  );
};
const Row2 = () => {
  return (
    <div className="d-flex justify-content-between my-5 flex-lg-row flex-column gap-3">
      <TextCard
        heading={"Prioritize Mental Well-being:"}
        background={"#FFF9EB"}
        id={"KidsAndTeens"}
      >
        <p>
          Nurture your mental health as you engage in the mindfulness practices
          inherent in Jiu-Jitsu. Our Jiu-Jitsu Acdemy explores how the art
          promotes stress relief, focus, and emotional resilience, providing
          teenagers with invaluable tools to navigate the complexities of
          adolescence. Discover the therapeutic benefits of Jiu-Jitsu as it
          becomes a sanctuary for self-expression,{" "}
          <strong> growth, and personal development.</strong>
        </p>
      </TextCard>

      <TextCard heading={"Master Self-Defense:"} background={"#FFF5EB"}>
        <p>
          Equip yourself with essential self-defense skills that empower you to
          navigate the world with confidence and safety. Learn practical
          techniques tailored to real-life scenarios, empowering you to protect
          yourself and others in any situation. Our self-defense training isn't
          just about physical prowess; it's about cultivating a mindset of
          <strong> awareness, assertiveness, and personal safety.</strong>
        </p>
      </TextCard>
    </div>
  );
};

const Row3 = () => {
  return (
    <div
      className="d-flex justify-content-between my-5 flex-lg-row flex-column gap-3"
      id="JiuJitsuLife"
    >
      <ImageCard
        id={1}
        btnBackground={pureDark5}
        image={imgCard2}
        btnLabel={"book a free intro class today"}
        handleClick={handleClick}
      />
      <TextCard
        heading={"Jiu Jitsu Life Beyond 40 ( Low intensity Class)"}
        background={"#F3F7F2"}
      >
        <div className="d-flex align-items-center gap-2 mb-3">
          <img src={icTickDark} alt="" />
          <p className="mb-0">Beyond 40 ( 40+)</p>
        </div>
        <SmallHeadingBlack>Over 40 year's Old</SmallHeadingBlack>
        <p>
          Discover the transformative power of Jiu Jitsu in maintaining and even
          rejuvenating your physical well-being. Contrary to common
          misconceptions, age is not a barrier to entry. Our jiu jitsu Academy
          delves into how Jiu Jitsu can be tailored to suit the needs of
          individuals over 45, promoting flexibility, balance, and overall
          fitness. Learn how this dynamic martial art becomes a key ally in your
          journey to stay active and agile well into your golden years.
        </p>
      </TextCard>
    </div>
  );
};

const Row4 = () => {
  return (
    <div className="d-flex justify-content-between my-5 flex-lg-row flex-column gap-3">
      <TextCard heading={"Forge Lasting Connections:"} background={"#F3F7F2"}>
        <p>
          Jiu Jitsu is not just a sport; it's a community. Engage in our
          insightful articles and testimonials, illustrating the camaraderie and
          lasting friendships that bloom on the mats. Connect with like-minded
          individuals who share your passion for personal growth and the art of
          Jiu Jitsu. Explore how the supportive atmosphere of a Jiu Jitsu gym
          becomes a social hub, fostering a{" "}
          <strong> sense of belonging and camaraderie.</strong>
        </p>
      </TextCard>
      <TextCard heading={"Mental Health Mastery:"} background={"#EFFBFA"}>
        <p>
          Embark on a journey of self-discovery as we emphasize the profound
          impact Jiu Jitsu has on mental health. Stress relief, increased focus,
          and heightened cognitive function that are direct outcomes of
          consistent Jiu Jitsu practice. Explore the mindfulness aspect of the
          art and learn how it promotes mental resilience, self-discipline, and
          <strong> a positive outlook on life.</strong>
        </p>
      </TextCard>
      <TextCard
        heading={"Expert Guidance and Resources:"}
        background={"#F3F7F2"}
      >
        <p>
          Take the first step towards a healthier, more fulfilling life by
          exploring the world of Jiu Jitsu tailored to those over 40. Join our
          community, embrace the art, and experience the multifaceted benefits
          that extend far beyond the mat. Welcome to a new chapter of vitality,
          connection, and mental resilience – welcome to
          <strong> "Jiu Jitsu Life Beyond 40."</strong>
        </p>
      </TextCard>
    </div>
  );
};

const Row5 = () => {
  return (
    <div
      className="d-flex justify-content-between my-5 flex-lg-row flex-column gap-3"
      id="femaleJiuJitsu"
    >
      <TextCard heading={"Jiu Jitsu For Female"} background={"#F3F7F2"}>
        <div className="d-flex align-items-center gap-2 mb-3">
          <img src={icTickDark} alt="" />
          <p className="mb-0">Female Jiu Jitsu (16+ years old)</p>
        </div>
        <p>
          Welcome to <strong> "EmpowerHer Jiu-Jitsu" – </strong> Embark on a
          transformative journey that not only hones your physical strength but
          also elevates your mental fortitude and empowers you with invaluable
          self-defense skills.
        </p>

        <TextCard
          heading={"A Safe Haven for Female Empowerment:"}
          className={"p-0"}
        >
          <p>
            Discover a supportive community where females of all ages and
            backgrounds come together to thrive. Our website is a beacon of
            inclusivity, offering a welcoming space for women to explore the art
            of Jiu-Jitsu. Dive into our resources and testimonials, and witness
            firsthand the inspiring stories of women who have found empowerment,
            camaraderie, and confidence through their Jiu-Jitsu journey.
          </p>
        </TextCard>

        <TextCard heading={"Forge Lifelong Bonds:"} className={"p-0"}>
          <p>
            Experience the profound sense of sisterhood that blossoms within our
            Jiu-Jitsu community. Delve into articles and personal anecdotes
            illustrating the friendships forged on the mats – bonds that extend
            far beyond the training room. Connect with like-minded women who
            share your passion for growth, resilience, and mutual support.
          </p>
        </TextCard>

        <TextCard heading={"Prioritize Mental Well-being:"} className={"p-0"}>
          <p>
            Nurture your mental health as you delve into the meditative aspects
            of Jiu-Jitsu. Our website delves into the mindfulness practices
            inherent in the art, offering strategies to alleviate stress,
            anxiety, and promote mental clarity. Experience the therapeutic
            benefits of Jiu-Jitsu as it becomes a sanctuary for self-care and
            personal growth.
          </p>
        </TextCard>
        <TextCard heading={"Join the Movement:"} className={"p-0 "}>
          <p>
            Step into your power and join the thriving community of empowered
            women at EmpowerHer Jiu-Jitsu. Whether you're seeking to improve
            your fitness, boost your confidence, or simply connect with
            like-minded individuals, our website provides the resources,
            support, and inspiration you need to embark on your Jiu-Jitsu
            journey.
          </p>
        </TextCard>
      </TextCard>

      <ImageCard
        id={1}
        btnBackground={pink1}
        image={imgCard3}
        btnLabel={"book a free intro class today"}
        handleClick={handleClick}
      />
    </div>
  );
};
const CardGrid = () => {
  return (
    <CardGridStyled>
      <Container>
        <Row1 />
        <Row2 />
        <Row3 />
        <Row4 />
        <Row5 />
      </Container>
    </CardGridStyled>
  );
};

export default CardGrid;
