const shortId = require('shortid')

class Ticket{

    /**
     * constructor function
     * @param {string} username 
     * @param {number} price 
     */
    constructor(username,price)
    {
        this.UniqueKey = shortId.generate()
        this.username = username
        this.price = price
        this.createdAt = new Date()
        this.updateAt = new Date()
    }
}

module.exports = Ticket