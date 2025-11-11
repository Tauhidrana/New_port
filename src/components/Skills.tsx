import React from 'react';
import { Code2, Database, Cpu, Trophy } from 'lucide-react';

interface Skill {
  icon: React.ReactNode;
  title: string;
  items: string[];
}

const skills: Skill[] = [
  {
    icon: <Code2 size={32} />,
    title: 'Programming Languages',
    items: ['C', 'C++ (INSHALLAH COMING SOON)' ],
  },
  {
    icon: <Database size={32} />,
    title: 'Data Structures',
items: [
   '(INSHALLAH COMING SOON)',
  "Time Complexity & Space Complexity",
  "Linear Search, Binary Search, Selection Sort",
  "Two Pointers & Prefix Sum",
  "Singly Linked List",
  "Doubly Linked List",
  "Stack",
  "Queue",
  "Priority Queue",
  "Binary Tree",
  "BST & Heap",
  "STL"
]

  },
  {
    icon: <Cpu size={32} />,
    title: 'Algorithms',
    items: [
       '(INSHALLAH COMING SOON)',
  "Basics of Graph",
  "Breadth First Search (BFS)",
  "Depth First Search (DFS) and 2D Grid",
  "Dijkstra Algorithm",
  "Bellman Ford Algorithm",
  "Floyd Warshall Algorithm",
  "Dynamic Programming",
  "0-1 Knapsack and Variations",
  "Unbounded Knapsack and Variations",
  "LCS DP and Variations",
  "Minimum Spanning Tree"
]

  },
  {
    icon: <Trophy size={32} />,
    title: 'Competitive Programming',
    items: ['Problem Solving', 'Contest Strategy', 'Time Optimization', 'Code Templates'],
  },
];

function Skills() {
  return (
    <section id="skills" className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Skills
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              <div className="text-purple-400 mb-6 group-hover:scale-110 group-hover:text-pink-400 transition-all duration-300">
                {skill.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors ">
                {skill.title}
                   
                
              </h3>

              <ul className="space-y-2">
                {skill.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-gray-400 text-sm flex items-start"
                  >
                    <span className="text-purple-500 mr-2">▹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Core Focus Areas</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Competitive Programming',
                'Algorithm Design',
                'Code Optimization',
                'Problem Solving',
                'Data Structure Implementation',
                'Contest Participation',
              ].map((focus, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-purple-600/30 to-pink-600/30 text-purple-200 rounded-full border border-purple-500/40 hover:border-purple-400 hover:scale-105 transition-all duration-300"
                >
                  {focus}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
