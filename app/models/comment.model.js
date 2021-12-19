module.exports = (sequelize, Sequelize) => {
    const Comment = sequelize.define("comments", {
    
      imageUrl: {
        type: Sequelize.STRING
      },
      // imageUrl2: {
      //   type: Sequelize.STRING
      // },
      // imageUrl3: {
      //   type: Sequelize.STRING
      // },
      description: {
        type: Sequelize.STRING(255)
      },

     
    });

    return Comment;
  };