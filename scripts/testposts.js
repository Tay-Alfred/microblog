const postsContainer = document.getElementById('posts-container');
const createPostForm = document.getElementById('create-post-form');
const postContent = document.getElementById('post-content');

const API_BASE_URL = 'http://microbloglite.us-east-2.elasticbeanstalk.com/';

async function fetchPosts() {
  const response = await fetch(`${API_BASE_URL}/posts`);
  const posts = await response.json();
  return posts;
}

function displayPosts(posts) {
  postsContainer.innerHTML = '';
  for (const post of posts) {
    const postElement = document.createElement('div');
    postElement.classList.add('card', 'mb-4');
    postElement.innerHTML = `
      <div class="card-header">${post.user.username}</div>
      <div class="card-body">
        <p class="card-text">${post.content}</p>
      </div>
    `;
    postsContainer.appendChild(postElement);
  }
}

async function createPost(content) {
  const response = await fetch(`${API_BASE_URL}/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ content })
  });
  const post = await response.json();
  return post;
}

createPostForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (!postContent.value.trim()) {
    return;
  }
  const post = await createPost(postContent.value);
  postContent.value = '';
  displayPosts([post]);
});

fetchPosts().then(displayPosts);