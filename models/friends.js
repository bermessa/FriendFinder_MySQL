module.exports = function(sequelize, DataTypes) {
    var Friend = sequelize.define("Friend", {
        name: DataTypes.STRING,
        image: DataTypes.STRING,
        scores: DataTypes.STRING
    });
    return Friend;
};
