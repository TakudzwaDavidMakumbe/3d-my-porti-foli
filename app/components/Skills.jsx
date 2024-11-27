import React from 'react'
import {FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt} from 'react-icons/fa';

const skillIcons = [
    {icon: <FaHtml5 size={140}/>, label: "HTML"},
    {icon: <FaCss3Alt size={140}/>, label: "CSS"},
    {icon: <FaJs size={140}/>, label: "JavaScript"},
    {icon: <FaReact size={110}/>, label: "React"},
    {icon: <FaNodeJs size={140}/>, label: "Node.js"},
    {icon: <FaGitAlt size={140}/>, label: "Git"},
];

const Skills = () => {
  return (
    <div
    className="bg-[linear-gradient(to_top,#000,#381a5f_80%)] py-32"
    >
        <div className="text-white max-w-[1200px] mx-auto p-8 text-center">
            <h2 className="text-6xl font-bold mb-4">What I Do</h2>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-11">
                {skillIcons.map((skill, index) => (
                    <div
                     key={index}
                     className=" md:h-[300px] md:w-[160px] flex flex-col justify-between items-center bg-white/10 p-4 rounded-xl">
                        {skill.icon}
                        <p className="mt-2">{skill.label}</p>
                     </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Skills