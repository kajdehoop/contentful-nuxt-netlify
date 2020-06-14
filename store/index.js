import client from "~/plugins/contentful";

export const state = () => ({
  posts: null,
  tag: null
});

export const mutations = {
  updatePosts: (state, posts) => {
    state.posts = posts;
  },
  setTag: (state, tag) => {
    state.tag = tag;
  }
};

export const actions = {
  async getPosts({ commit }) {
    try {
      if (!client) return;
      const response = await client.getEntries({
        content_type: "blogPost"
      });
      if (response.items.length > 0) commit("updatePosts", response.items);
    } catch (err) {
      console.error(err);
    }
  },
  async updateTag({ commit }, { tag }) {
    commit('setTag', tag)
  }
};

export const getters = {
  posts: state => {
    if(!state.tag) {
      return state.posts;
    } else {
      return state.posts.filter((post) => {
        if(post.fields.tags) {
          return post.fields.tags.includes(state.tag);
        }
      });
    }
  },
};
