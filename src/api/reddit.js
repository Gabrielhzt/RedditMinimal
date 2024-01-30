import axios from 'axios';

export const API_ROOT = 'https://www.reddit.com';

export const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json.data.children.map((data) => data.data);
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error);
    return [];
  }
};

export const getSubredditPosts = async () => {
  return fetchData(`${API_ROOT}/.json`);
};

export const getBestSubredditPosts = async () => {
  return fetchData(`${API_ROOT}/best.json`);
};

export const getRisingSubredditPosts = async () => {
    return fetchData(`${API_ROOT}/rising.json`);
};

export const getTopSubredditPosts = async () => {
    return fetchData(`${API_ROOT}/top.json`);
};

export const getPopularSubreddits = async () => {
    return fetchData(`${API_ROOT}/subreddits/popular.json`);
};

export const getSearchResults = async () => {
  return fetchData(`${API_ROOT}/api/mod/bulk_read.json`);
};

export const getSearchResults2 = async (query) => {
    // Utilisation de l'API de recherche avec le paramètre de requête (query)
    return fetchData(`${API_ROOT}/search.json?q=${query}`);
  };

export const getAllSubreddits = async () => {
  return fetchData(`${API_ROOT}/subreddits.json`);
};

// Appels de fonctions
async function fetchDataBest() {
    const bestData = await getBestSubredditPosts();
    console.log('Best Data:', bestData);
}

async function fetchDataPopular() {
    const popularData = await getPopularSubreddits();
    console.log('Popular Data:', popularData);
}

async function fetchDataRising() {
    const risingData = await getRisingSubredditPosts();
    console.log('Rising Data:', risingData);
}

async function fetchDataTop() {
    const TopData = await getTopSubredditPosts();
    console.log('Top Data:', TopData);
}

async function fetchDataPost() {
    const PostData = await getSubredditPosts();
    console.log('Post Data:', PostData);
}


async function fetchDataSearchResults() {
    const searchResults = await getSearchResults2('cats');
    console.log('Search Results:', searchResults);
}

export const getCommentsForPost = async (postId) => {
  try {
      const response = await axios.get(`https://www.reddit.com/comments/${postId}.json`);
      const commentsData = response.data[1].data.children;
      console.log('Comments Data:', commentsData);

      return response.data[1].data.children;
  } catch (error) {
      throw error;
  }
};

export const getPostDetails = async (postId) => {
  try {
    const response = await axios.get(`${API_ROOT}/comments/${postId}.json`);
    // Extract and return post details from the response
    return response.data[0].data.children[0].data;
  } catch (error) {
    throw error;
  }
};


fetchDataSearchResults();
  


fetchDataBest();
fetchDataRising();
fetchDataPopular();
fetchDataTop();
fetchDataPost();