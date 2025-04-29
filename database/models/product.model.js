const ProductModel = (sequelize,DataTypes) => {
    const Product = sequelize.define("product", {
        productName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 100]
            }
        },
        productPrice: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        productCategory: {
            type: DataTypes.STRING,
            defaultValue: "Unknown"
        },
        productDescription: {
            type: DataTypes.STRING,
            defaultValue: "Unknown"
        },
    })
    return Product
}
module.exports = ProductModel