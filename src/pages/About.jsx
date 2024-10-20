import React from 'react';
import defaultImage from '../assets/default_pr.png';

// Skills Data
const skills = [
  { name: "C++", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "DevOps", level: 65 },
  { name: "Cloud Infrastructure", level: 70 },
  { name: "React", level: 80 },
  { name: "Next.js", level: 75 },
];

const projects = [
  {
    title: "LocalShare",
    description: "A platform for sharing local resources seamlessly.",
    image: "",
    githubLink: "https://github.com/achal37/LocalShare-Blogging",
  },
  {
    title: "EventHub",
    description: "A web app to manage and discover local events.",
    image: "",
    githubLink: "https://github.com/achal37/Eventhub",
  },
];

// Skill Bar Component
const SkillBar = ({ name, level }) => (
  <div className="mb-6">
    <div className="flex justify-between items-center mb-2">
      <span className="text-lg font-semibold text-custom-light-blue">{name}</span>
      <span className="text-custom-teal">{level}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-3">
      <div
        className="bg-custom-teal h-3 rounded-full"
        style={{ width: `${level}%` }}
      ></div>
    </div>
  </div>
);

const About = () => (
  <div className="px-8 pb-5 pt-24 bg-custom-green-dark text-white min-h-screen">
    {/* About Section */}
    <h2 className="text-3xl font-bold mb-8 text-custom-teal">About Me</h2>
    <p className="text-gray-300 mb-6 text-lg leading-relaxed">
      I am a dedicated web developer with a strong focus on backend technologies, DevOps, and cloud infrastructure.
      My journey began with a fascination for problem-solving, leading me to platforms like LeetCode and Codeforces,
      where I honed my skills in languages such as C++ and JavaScript.
    </p>
    <p className="text-gray-300 mb-6 text-lg leading-relaxed">
      Over the past few years, I have worked on exciting projects such as LocalShare and EventHub, which have allowed
      me to apply my skills in real-world scenarios. My goal is to leverage my knowledge to contribute to innovative
      projects at leading tech companies.
    </p>
    <p className="text-gray-300 mb-6 text-lg leading-relaxed">
      Outside of coding, I enjoy reading manga, playing sports, and exploring the latest technology trends.
    </p>

    {/* Skills Section */}
    <h2 className="text-3xl font-bold mt-12 mb-6 text-custom-teal">Skills</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {skills.map((skill) => (
        <SkillBar key={skill.name} name={skill.name} level={skill.level} />
      ))}
    </div>

    {/* Projects Section */}
    <h2 className="text-3xl font-bold mt-12 mb-6 text-custom-teal">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {projects.map((project) => (
        <div key={project.title} className="bg-custom-light-blue p-6 rounded-lg shadow-xl transition-transform duration-300 transform hover:scale-105">
          <img
            src={project.image || defaultImage}
            alt={project.title}
            className="w-full h-48 object-cover rounded-lg mb-4 border-2 border-custom-brown"
          />
          <h3 className="text-xl font-bold text-custom-green-dark text-center">{project.title}</h3>
          <p className="text-gray-800 text-center mb-2">{project.description}</p>
          <div className="flex justify-center mt-4 space-x-4">
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-custom-teal font-semibold hover:underline">
              GitHub
            </a>
          </div>
        </div>
      ))}
    </div>

    {/* Contact Section */}
    <h2 className="text-3xl font-bold mt-12 mb-6 text-custom-teal">Contact</h2>
    <p className="text-gray-300 text-lg mb-6">
      If you're interested in collaborating or have any questions, feel free to reach out!
    </p>
    <div className="text-center">
      <a
        href="mailto:tiwariachal059@gmail.com"
        className="bg-custom-teal hover:bg-custom-brown text-white font-bold py-3 px-8 rounded-full transition-colors"
      >
        Contact Me
      </a>
    </div>
  </div>
);

export default About;
