module.exports = (sequelize, Sequelize) => {
    const Comment = sequelize.define("comments", {
    
      imageUrl: {
        type: Sequelize.STRING(99)
      },
      videoUrl: {
        type: Sequelize.STRING(99)
      },
      youtubeUrl: {
        type: Sequelize.STRING(99)
      },
      
      // imageUrl3: {
      //   type: Sequelize.STRING
      // },
      description: {
        type: Sequelize.STRING(1024)
      },
      descriptionPhoto: {
        type: Sequelize.STRING(512)
      },

     
    });

    return Comment;
  };