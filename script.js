// GSAP Animations
gsap.to(".wave", { duration: 6, x: -200, repeat: -1, yoyo: true });
gsap.to(".wave2", { duration: 6, x: -200, repeat: -1, yoyo: true, delay: -3 });
gsap.from(".profile-pic", { duration: 1.5, scale: 0, ease: "elastic.out(1, 0.5)", delay: 0.5 });
gsap.from(".hero h1, .hero .tagline", { duration: 1, y: 100, opacity: 0, stagger: 0.2, delay: 1 });
gsap.from(".cta-btn", { duration: 1, scale: 0, ease: "back.out(1.7)", delay: 1.5 });

document.querySelectorAll("section").forEach((section, i) => {
  gsap.from(section, {
    duration: 1,
    y: 150,
    opacity: 0,
    delay: 2 + i * 0.4,
    scrollTrigger: { trigger: section, start: "top 85%" }
  });
});

// LinkedIn Video Posts (Manually collected from your profile as of March 9, 2025)
const linkedinVideos = [
  {
    title: "Pixel2D Adventure: Unreal Engine Minigame",
    desc: "A Level 5 Unreal Engine minigame with a menu, animated player, obstacles, keys, and portals, built in just 3 hours despite no prior Unreal experience, showcasing rapid learning and adaptability",
    url: "https://www.linkedin.com/posts/ahsan-mehmood-400317192_gamedevelopment-fiverr-unrealengine-activity-7288601452464263168-QWEy"
  },

  {
    title: "Dynamic Product Showcase: Interactive Unity3D Simulation",
    desc: "An interactive Unity3D simulation showcasing dynamic product placement with drag-and-drop, customizable colors, proximity-based lighting, and expandable models, built using C# for real-time engagement",
    url: "https://www.linkedin.com/posts/ahsan-mehmood-400317192_unity3d-csharp-3dmodeling-activity-7255893709748092929-vqZs?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC1AxoABBINrydpJ5XTUnvoKvmwLs2SnhNs"
  },
  
  {
    title: "AI-Powered Interactive Storytelling in Unity3D",
    desc: "A Unity3D demo featuring an AI-driven girl character with eye tracking, head and body movements, hand gestures, and text-to-speech narration for an engaging, interactive zoo storytelling experience.",
    url: "https://www.linkedin.com/posts/ahsan-mehmood-400317192_unity3d-ai-demoproject-activity-7245025022619078656-EEec?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC1AxoABBINrydpJ5XTUnvoKvmwLs2SnhNs"
  },
  {
    title: "CyberGuard: ML-Powered Threat Detection",
    desc: "A C++ and Python project integrating OMNeT++ simulation with machine learning to detect and block cyber threats, featuring IDS and IDMEF for secure message routing and encryption",
    url: "https://www.linkedin.com/posts/ahsan-mehmood-400317192_cybersecurity-machinelearning-omnet-activity-7214746521672531968-ELmI?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC1AxoABBINrydpJ5XTUnvoKvmwLs2SnhNs"
  },

];

// Populate LinkedIn Videos
const projectsGrid = document.querySelector(".projects-grid");
linkedinVideos.forEach(video => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `
    <h3>${video.title}</h3>
    <p>${video.desc}</p>
    <a href="${video.url}" target="_blank">Watch on LinkedIn</a>
    <!-- If you have a direct video URL (e.g., YouTube or hosted MP4), uncomment below and add the source -->
    <!-- <video controls src="YOUR_DIRECT_VIDEO_URL"></video> -->
    
  `;
  projectsGrid.appendChild(card);
  gsap.from(card, { duration: 0.7, x: -100, opacity: 0, delay: Math.random() * 0.5 });
});

// Placeholder GitHub Repos (Add your GitHub repositories here)
const githubRepos = [
  // Add your GitHub repos here, e.g.:
  // { name: "Repo 1", desc: "Description", url: "https://github.com/Ahsan483/repo1" },
  // Repeat for all your repos
];

const githubReposContainer = document.querySelector(".github-repos");
githubRepos.forEach(repo => {
  const card = document.createElement("div");
  card.className = "repo-card";
  card.innerHTML = `
    <h3>${repo.name}</h3>
    <p>${repo.desc}</p>
    <a href="${repo.url}" target="_blank">View on GitHub</a>
  `;
  githubReposContainer.appendChild(card);
  gsap.from(card, { duration: 0.7, x: 100, opacity: 0, delay: Math.random() * 0.5 });
});

// Placeholder GitHub Commits (Add your GitHub commits here)
const githubCommits = [
  // Add your GitHub commits here, e.g.:
  // { message: "Commit message", date: "2023-10-01" },
  // Repeat for all your commits
];

const githubCommitsContainer = document.querySelector(".github-commits");
githubCommits.forEach(commit => {
  const card = document.createElement("div");
  card.className = "commit-card";
  card.innerHTML = `
    <p>${commit.message}</p>
    <small>${commit.date}</small>
  `;
  githubCommitsContainer.appendChild(card);
  gsap.from(card, { duration: 0.7, y: 50, opacity: 0, delay: Math.random() * 0.5 });
});

// Placeholder GitHub Stats (Update with your real data)
document.getElementById("repos-count").textContent = githubRepos.length;
document.getElementById("commits-count").textContent = github