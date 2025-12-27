// const skills = [
//   { id: "cpp", name: "C++", img: "/skills/cpp.png" },
//   { id: "python", name: "Python", img: "/skills/python.png" },
//   { id: "pytorch", name: "PyTorch", img: "/skills/pytorch.png" },
//   { id: "tensorflow", name: "TensorFlow", img: "/skills/tensorflow.png" },
//   { id: "sklearn", name: "Scikit-Learn", img: "/skills/scikit-learn.png" },
//   { id: "pandas", name: "Pandas", img: "/skills/pandas.png" },
//   { id: "numpy", name: "Numpy", img: "/skills/numpy.png" },
//   { id: "matplotlib", name: "Matplotlib", img: "/skills/matplotlib.png" },
//   { id: "tailwind", name: "Tailwind CSS", img: "/skills/tailwind.png" },
//   { id: "css", name: "CSS", img: "/skills/css.png" },
//   { id: "react", name: "React.js", img: "/skills/react.png" },
//   { id: "cnn", name: "CNN", img: "/skills/cnn.png" },
//   { id: "mysql", name: "MySQL", img: "/skills/mysql.png" },
//   { id: "mongodb", name: "MongoDB", img: "/skills/mongodb.png" },
//   { id: "node", name: "Node.js", img: "/skills/node.png" },
//   { id: "html", name: "HTML", img: "/skills/html.png" },
//   { id: "git", name: "Git", img: "/skills/git.png" },
// ];

const skills = [
  { id: "cpp", name: "C++", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
  { id: "python", name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { id: "pytorch", name: "PyTorch", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" },
  { id: "tensorflow", name: "TensorFlow", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
  { id: "sklearn", name: "Scikit-Learn", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" },
  { id: "pandas", name: "Pandas", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" },
  { id: "numpy", name: "Numpy", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" },
  { id: "matplotlib", name: "Matplotlib", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg" },
  { id: "tailwind", name: "Tailwind CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { id: "css", name: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { id: "react", name: "React.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { 
    id: "cnn", 
    name: "CNN", 
    // Custom SVG for Neural Network since no standard logo exists
    img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+PHN0eWxlPi5ue2ZpbGw6IzYxZGFmYjt9Lmx7c3Ryb2tlOiM2MWRhZmI7c3Ryb2tlLXdpZHRoOjI7fTwvc3R5bGU+PGc+PGxpbmUgY2xhc3M9ImwiIHgxPSIxMCIgeTE9IjE1IiB4Mj0iMzIiIHkyPSI4Ii8+PGxpbmUgY2xhc3M9ImwiIHgxPSIxMCIgeTE9IjE1IiB4Mj0iMzIiIHkyPSIyNCIvPjxsaW5lIGNsYXNzPSJsIiB4MT0iMTAiIHkxPSIzMiIgeDI9IjMyIiB5Mj0iOCIvPjxsaW5lIGNsYXNzPSJsIiB4MT0iMTAiIHkxPSIzMiIgeDI9IjMyIiB5Mj0iMjQiLz48bGluZSBjbGFzcz0ibCIgeDE9IjEwIiB5MT0iMzIiIHgyPSIzMiIgeTI9IjQwIi8+PGxpbmUgY2xhc3M9ImwiIHgxPSIxMCIgeTE9IjQ5IiB4Mj0iMzIiIHkyPSIyNCIvPjxsaW5lIGNsYXNzPSJsIiB4MT0iMTAiIHkxPSI0OSIgeDI9IjMyIiB5Mj0iNDAiLz48bGluZSBjbGFzcz0ibCIgeDE9IjEwIiB5MT0iNDkiIHgyPSIzMiIgeTI9IjU2Ii8+PGxpbmUgY2xhc3M9ImwiIHgxPSIzMiIgeTE9IjgiIHgyPSI1NCIgeTI9IjIwIi8+PGxpbmUgY2xhc3M9ImwiIHgxPSIzMiIgeTE9IjI0IiB4Mj0iNTQiIHkyPSIyMCIvPjxsaW5lIGNsYXNzPSJsIiB4MT0iMzIiIHkxPSIyNCIgeDI9IjU0IiB5Mj0iNDQiLz48bGluZSBjbGFzcz0ibCIgeDE9IjMyIiB5MT0iNDAiIHgyPSI1NCIgeTI9IjIwIi8+PGxpbmUgY2xhc3M9ImwiIHgxPSIzMiIgeTE9IjQwIiB4Mj0iNTQiIHkyPSI0NCIvPjxsaW5lIGNsYXNzPSJsIiB4MT0iMzIiIHkxPSI1NiIgeDI9IjU0IiB5Mj0iNDQiLz48Y2lyY2xlIGNsYXNzPSJuIiBjeD0iMTAiIGN5PSIxNSIgcj0iNSIvPjxjaXJjbGUgY2xhc3M9Im4iIGN4PSIxMCIgY3k9IjMyIiByPSI1Ii8+PGNpcmNsZSBjbGFzcz0ibiIgY3g9IjEwIiBjeT0iNDkiIHI9IjUiLz48Y2lyY2xlIGNsYXNzPSJuIiBjeD0iMzIiIGN5PSI4IiByPSI1Ii8+PGNpcmNsZSBjbGFzcz0ibiIgY3g9IjMyIiBjeT0iMjQiIHI9IjUiLz48Y2lyY2xlIGNsYXNzPSJuIiBjeD0iMzIiIGN5PSI0MCIgcj0iNSIvPjxjaXJjbGUgY2xhc3M9Im4iIGN4PSIzMiIgY3k9IjU2IiByPSI1Ii8+PGNpcmNsZSBjbGFzcz0ibiIgY3g9IjU0IiBjeT0iMjAiIHI9IjUiLz48Y2lyY2xlIGNsYXNzPSJuIiBjeD0iNTQiIGN5PSI0NCIgcj0iNSIvPjwvZz48L3N2Zz4="
  },
  { id: "mysql", name: "MySQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { id: "mongodb", name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { id: "node", name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { id: "html", name: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { id: "git", name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
];