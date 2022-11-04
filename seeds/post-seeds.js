const { Post } = require('../models');

const postData = [{
      title: "Lorem Ipsum1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id erat porta, aliquam nulla id laoreet.",
      user_id: 1

    },
    {
       title: "Lorem Ipsum1",
       content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id erat porta, aliquam nulla id laoreet.",
       user_id: 2
    },
    {
        title: "Lorem Ipsum3",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id erat porta, aliquam nulla id laoreet.",
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;