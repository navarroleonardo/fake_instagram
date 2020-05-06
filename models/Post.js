let Post = (sequelize, DataTypes) => {
    return sequelize.define(
        'Post',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            texto: {
                type: DataTypes.STRING,
                allowNull: false
            },
            img: {
                type: DataTypes.STRING,
                allowNull: true,
                default: null
            },
            usuarios_id: {
                type: DataTypes.INTEGER,
                allowNull: true,
                default: null
            },
            n_likes: {
                type: DataTypes.INTEGER,
                allowNull: true,
                default: 0
            }
        },
        {
            tableName: "posts",
            timestamps: false
        }
    )
}

module.exports = Post;