module.exports = (sequelize, Sequelize) => {
  const Post = sequelize.define("posts", {
   
    imageUrl: { 
      type: Sequelize.STRING(99)
    },  
    imageUrl2: { 
      type: Sequelize.STRING(99)
    },
    title: {
      type: Sequelize.STRING(255)
    },
    description: {
      type: Sequelize.STRING(255)
    },
    description2: {
      // allowNull: false,
      type: Sequelize.STRING(255),
      },
      description3: {
        // allowNull: false,
        type: Sequelize.STRING(255),
        },
  

    
  });
 

  return Post;
};

