async function fetchPosts(subreddit) {
    try {
      const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
      if (!response.ok) throw new Error('Subreddit not found');
      const data = await response.json();
      return data.data.children.map(child => child.data);
    } catch (error) {
      alert(`Error fetching posts for subreddit ${subreddit}: ${error.message}`);
      return [];
    }
  }

  function createPostElement(post) {
    const postElement = document.createElement('div');
    postElement.className = 'post';
    postElement.innerHTML = `
      <a href="https://www.reddit.com${post.permalink}" target="_blank" class="post-title">
        ${post.title}
      </a>
      <div class="post-info">
        <div class="post-stats">
          <span><i class="fas fa-user"></i> ${post.author}</span>
          <span><i class="fas fa-arrow-up"></i> ${post.ups}</span>
          <span><i class="fas fa-comments"></i> ${post.num_comments}</span>
        </div>
        <span><i class="fas fa-external-link-alt"></i></span>
      </div>
    `;
    return postElement;
  }

  async function addLane() {
    const subredditInput = document.getElementById('subreddit-input');
    const subreddit = subredditInput.value.trim();
    if (!subreddit) return;

    if (document.getElementById(`lane-${subreddit}`)) {
      alert('Subreddit already added!');
      return;
    }

    const laneElement = document.createElement('div');
    laneElement.className = 'lane';
    laneElement.id = `lane-${subreddit}`;
    laneElement.innerHTML = `
      <div class="lane-header">
        <h2><i class="fab fa-reddit"></i> r/${subreddit}</h2>
        <button onclick="removeLane('${subreddit}')"><i class="fas fa-times"></i></button>
      </div>
    `;
    
    document.getElementById('lane-container').appendChild(laneElement);
    
    const posts = await fetchPosts(subreddit);
    posts.forEach(post => {
      laneElement.appendChild(createPostElement(post));
    });

    subredditInput.value = '';
  }

  function removeLane(subreddit) {
    const laneElement = document.getElementById(`lane-${subreddit}`);
    if (laneElement) {
      laneElement.remove();
    }
  }

  // Create floating particles
  function createParticles() {
    const particlesContainer = document.querySelector('.particles');
    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Random size between 2-6px
      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random starting position
      particle.style.left = `${Math.random() * 100}vw`;
      particle.style.top = `${Math.random() * 100}vh`;
      
      // Random animation duration and delay
      const duration = Math.random() * 10 + 10;
      const delay = Math.random() * -20;
      particle.style.animation = `float ${duration}s ${delay}s infinite linear`;

      particlesContainer.appendChild(particle);
    }
  }

  // Call the function when the page loads
  document.addEventListener('DOMContentLoaded', createParticles);