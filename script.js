// Hero Animations
gsap.from(".hero h1", { duration: 1.5, y: 100, opacity: 0, ease: "power4.out", delay: 1 });
gsap.from(".hero .tagline", { duration: 1.5, y: 50, opacity: 0, ease: "power4.out", delay: 1.2 });
gsap.from(".cta-btn", { duration: 1, scale: 0, ease: "back.out(2)", delay: 1.5 });

// Section Animations
document.querySelectorAll("section").forEach((section, i) => {
  gsap.from(section, {
    duration: 1.2,
    y: 150,
    opacity: 0,
    ease: "power3.out",
    delay: i * 0.3,
    scrollTrigger: { trigger: section, start: "top 85%" }
  });
});

// About Animation
gsap.from(".about-text", {
  duration: 1.5,
  x: -300,
  opacity: 0,
  ease: "power2.out",
  scrollTrigger: { trigger: "#about", start: "top 80%" }
});

// Skills Data and Animation
const skills = ["Python", "C++", "Game Development", "Unity3D", "AI/ML", "Django", "Web Development", "Cybersecurity", "Tkinter", "OpenGL"];
const skillsContainer = document.querySelector(".skills-container");
skills.forEach((skill, index) => {
  const skillCard = document.createElement("div");
  skillCard.className = "skill-card";
  skillCard.textContent = skill;
  skillsContainer.appendChild(skillCard);
  gsap.from(skillCard, {
    duration: 0.8,
    scale: 0,
    rotation: 360,
    ease: "back.out(2)",
    delay: index * 0.1,
    scrollTrigger: { trigger: "#skills", start: "top 80%" }
  });
});

// Fetch GitHub Repositories
fetch("https://api.github.com/users/Ahsan483/repos")
  .then(response => response.json())
  .then(repos => {
    const projectsGrid = document.querySelector(".projects-grid");
    repos.slice(0, 50).forEach((repo, index) => { 
      const timelineItem = document.createElement("div");
      timelineItem.className = "timeline-item";
      timelineItem.innerHTML = `
        <div class="timeline-content">
          <h3>${repo.name.replace(/-/g, " ")}</h3>
          <p>${repo.description || "No description available"}</p>
          <p class="no-video">Visit repo for details</p>
          <a href="${repo.html_url}" target="_blank" class="github-btn">View on GitHub</a>
        </div>
      `;
      projectsGrid.appendChild(timelineItem);

      gsap.from(timelineItem, {
        duration: 1.2,
        x: 200,
        opacity: 0,
        ease: "power3.out",
        delay: index * 0.15,
        scrollTrigger: { trigger: "#projects", start: "top 80%" }
      });
    });

    // GitHub Stats
    document.getElementById("repos-count").textContent = repos.length;
    document.getElementById("stars-count").textContent = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);
  });

// Fetch GitHub Commits (Simplified - requires authentication for full data)
fetch("https://api.github.com/users/Ahsan483/events")
  .then(response => response.json())
  .then(events => {
    const commits = events.filter(event => event.type === "PushEvent").slice(0, 5); // Last 5 commits
    const githubCommitsContainer = document.querySelector(".github-commits");
    commits.forEach((commit, index) => {
      const commitCard = document.createElement("div");
      commitCard.className = "commit-card";
      commitCard.innerHTML = `
        <p>${commit.payload.commits[0].message}</p>
        <small>${new Date(commit.created_at).toLocaleDateString()}</small>
      `;
      githubCommitsContainer.appendChild(commitCard);
      gsap.from(commitCard, {
        duration: 1,
        y: 100,
        opacity: 0,
        ease: "power2.out",
        delay: index * 0.2,
        scrollTrigger: { trigger: "#github", start: "top 80%" }
      });
    });
    document.getElementById("commits-count").textContent = commits.length; // Approx, full count needs API token
  });

// Contact Animation
gsap.from("#contact-form, .social-links", {
  duration: 1.5,
  y: 100,
  opacity: 0,
  stagger: 0.3,
  ease: "power2.out",
  scrollTrigger: { trigger: "#contact", start: "top 80%" }
});

// GSAP Counter Animation Function
function animateCounter(element, start, end, duration) {
  gsap.fromTo(
    element,
    { innerText: start },
    {
      innerText: end,
      duration: duration,
      ease: "power1.out",
      snap: { innerText: 1 },
      onUpdate: function () {
        element.innerText = Math.floor(element.innerText);
      }
    }
  );
}

// Fetch GitHub Data and Populate Insights
fetch("https://api.github.com/users/Ahsan483/repos")
  .then(response => response.json())
  .then(repos => {
    const reposGrid = document.querySelector(".repos-grid");
    const reposCount = document.getElementById("repos-count");
    const starsCount = document.getElementById("stars-count");

    // Repositories (Top 6)
    repos.slice(0, 50).forEach((repo, index) => {
      const repoCard = document.createElement("div");
      repoCard.className = "repo-card";
      repoCard.innerHTML = `
        <h4>${repo.name.replace(/-/g, " ")}</h4>
        <p>${repo.description || "No description available"}</p>
        <a href="${repo.html_url}" target="_blank" class="github-btn">View on GitHub</a>
      `;
      reposGrid.appendChild(repoCard);

      gsap.from(repoCard, {
        duration: 1,
        y: 100,
        opacity: 0,
        ease: "power3.out",
        delay: index * 0.1,
        scrollTrigger: { trigger: ".github-repos", start: "top 80%" }
      });
    });

    // Stats
    const totalStars = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);
    animateCounter(reposCount, 0, repos.length, 2);
    animateCounter(starsCount, 0, totalStars, 2);
  })
  .catch(error => console.error("Error fetching repos:", error));

// Fetch Commits
fetch("https://api.github.com/users/Ahsan483/events")
  .then(response => response.json())
  .then(events => {
    const commits = events.filter(event => event.type === "PushEvent").slice(0, 100); // Last 100 commits
    const commitsTimeline = document.querySelector(".commits-timeline");
    const commitsCount = document.getElementById("commits-count");

    commits.forEach((commit, index) => {
      const commitCard = document.createElement("div");
      commitCard.className = "commit-card";
      commitCard.innerHTML = `
        <p>${commit.payload.commits[0].message}</p>
        <small>${new Date(commit.created_at).toLocaleDateString()}</small>
        <span class="commit-dot"></span>
      `;
      commitsTimeline.appendChild(commitCard);

      gsap.from(commitCard, {
        duration: 1.2,
        x: -200,
        opacity: 0,
        ease: "power2.out",
        delay: index * 0.2,
        scrollTrigger: { trigger: ".github-commits", start: "top 90%" }
      });
    });

    animateCounter(commitsCount, 0, commits.length, 2); // Approximate; full count needs token
  })
  .catch(error => console.error("Error fetching commits:", error));

// Section Animation
gsap.from("#github h2", {
  duration: 1.5,
  y: -50,
  opacity: 0,
  ease: "power3.out",
  scrollTrigger: { trigger: "#github", start: "top 80%" }
});