const { toDefaultValue } = require("sequelize/lib/utils")

const bookModel = (sequelize,DataTypes)=>{
    const Book = sequelize.define("book",{
        bookName : {
            type : DataTypes.STRING,
            allowNull : false,
            validate : {
                len : [1,100]
            }
        },
        bookPrice : {
            type : DataTypes.INTEGER,
            allowNull : false
        },
        bookAuthor : {
            type : DataTypes.STRING,
            defaultValue : "Unknown"
        },
        bookGenre : {
            type : DataTypes.STRING,
            defaultValue : "Unknown"
        },
    })
    return Book
}
module.exports = bookModel