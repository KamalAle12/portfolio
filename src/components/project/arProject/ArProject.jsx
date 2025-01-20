import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "../../css/timeline.css";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import ar1 from "../../../assets/video/arProjects/ar1.mp4";
import ar14 from '../../../assets/video/arProjects/ar14.mp4';
import ar2 from "../../../assets/video/arProjects/ar2.mp4";
import ar3 from "../../../assets/video/arProjects/ar3.mp4";
import ar4 from "../../../assets/video/arProjects/ar4.mp4";
import ar5 from "../../../assets/video/arProjects/ar5.mp4";
import ar6 from "../../../assets/video/arProjects/ar6.mp4";
import ar7 from "../../../assets/video/arProjects/ar7.mp4";
import ar8 from "../../../assets/video/arProjects/ar8.mp4";
import ar9 from "../../../assets/video/arProjects/ar9.mp4";
import ar10 from "../../../assets/video/arProjects/ar10.mp4";
import ar11 from "../../../assets/video/arProjects/ar11.mp4";
import ar12 from "../../../assets/video/arProjects/ar12.mp4";
import ar13 from "../../../assets/video/arProjects/ar13.mp4";
import arProject1 from "../../../assets/video/arProjects/arProject1.png";

const projects = [
  { video: ar1, image: arProject1, title: "Diwali Celebration", description: "Diwali Celebration with Augmented Reality" },
  { video: ar14, image: arProject1, title: "Clay Runner", description: "3d Clay Model Running on Real Environment" },
  { video: ar2, image: arProject1, title: "Love Effect", description: "Pass The Love(Group Video Call AR Effect)" },
  { video: ar3, image: arProject1, title: "Anger Finder", description: "Just Showing How much Angry You are using AR Effect" },
  { video: ar4, image: arProject1, title: "3d Bubble", description: "Making Bubble in Real Environment Using AR" },
  { video: ar5, image: arProject1, title: "Breathalyzer", description: "Just finding out how much you've drunk" },
  { video: ar6, image: arProject1, title: "Glitch Alarm", description: "Just a Color Effect with Glitch and Some text" },
  { video: ar7, image: arProject1, title: "FLower", description: "Virtual Flower to make you more beautiful" },
  { video: ar8, image: arProject1, title: "Butterfly", description: "Just a Butterfly who is attracted to you" },
  { video: ar9, image: arProject1, title: "Firefly", description: "Lighting Bug on Your Face" },
  { video: ar10, image: arProject1, title: "Blink", description: "Just a simple color and Blink Effect" },
  { video: ar11, image: arProject1, title: "Flower Crown", description: "Virtual Flower Crown for You!" },
  { video: ar12, image: arProject1, title: "Past Life", description: "Checking Who was i in my past life" },
  { video: ar13, image: arProject1, title: "Virtual Flower", description: "Interacting Virtual Flower which interact with your hand" },
];

const ArProject = () => {
  return (
    <div id="ar-projects" className="mt-10">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        AR{" "}
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          Projects
        </span>
      </h1>

      <VerticalTimeline>
        {projects.map((project, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{
              background: index % 2 === 0 ? "rgb(33, 150, 243)" : "rgb(233, 30, 99)",
              color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid #fff" }}
            iconStyle={{
              background: index % 2 === 0 ? "rgb(33, 150, 243)" : "rgb(233, 30, 99)",
              color: "#fff",
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="vertical-timeline-element-title">{project.title}</h3>
              <p>{project.description}</p>
              <motion.video
                src={project.video}
                autoPlay
                loop
                muted
                className="timeline-video"
              />
            </motion.div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default ArProject;
