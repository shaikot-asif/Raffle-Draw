const Ticket = require('../models/Ticket')

class DB {

    constructor(){
        this.tickets = []
    }

    /**
     * create and save an new ticket
     * @param {string} username 
     * @param {Number} price 
     * @return {Ticket} return a ticket object
     */

    create(username,price){
        const ticket = new Ticket(username,price)
        this.tickets.push(ticket)
        return ticket
    }

    /**
     * crate tickets for a single user
     * @param {String} username 
     * @param {Number} price 
     * @param {Number} quantity 
     * @return {Array<Ticket>}
     */
    bulkCreate(username,price,quantity){
        const Result = [];
        for(let i = 0; i<quantity; i++){
            const ticket = this.create(username,price);
            Result.push(ticket)
        }
        return Result
    }

    /**
     * return all ticket
     * @returns {Ticket}
     */
    find(){
        return this.tickets
    }

    /**
     * find tickets by ticket id
     * @param {string} ticketId 
     * @return {Ticket}
     */
    findById(ticketId){

        const ticket = this.tickets.find(
            /**
             * @param {String} ticket 
             */
            (ticket)=> ticket.id === ticketId
        )
        return ticket
    }
    
    /**
     * find tickets by given username
     * @param {String} username 
     * @return {Ticket}
     */
    findByUnername(username){
        const ticket = this.tickets.filter(

            /**
             * 
             * @param {String} ticket 
             * @returns {Ticket}
             */
            (ticket)=> ticket.username === username
        )
        return ticket
    }

    /**
     * 
     * @param {string} username 
     * @param {{username:String,price:Number}} ticketBody 
     */
    updateByUsername(username,ticketBody){
        const ticket = this.findByUnername(username)
        ticket.username = ticketBody.username ?? ticket.username
        ticket.price = ticketBody.price ?? ticket.price
        ticket.updateAt = new Date()
        return ticket
    }

    /**
     * 
     * @param {String} username 
     */
    deleteByUsername(username){
        const index = this.tickets.findIndex(

            /**
             * 
             * @param {String} ticket 
             * @returns {ticket}
             */
            (ticket)=>ticket.username === username
        )

        if (index != -1) {
            this.tickets.splice(index,1);
            return true
        }
        else
        return false
    }


    /**
     * update ticket by id
     * @param {String} ticketId 
     * @param {{username:String,price:Number}} ticketBody 
     */
    updateById(ticketId,ticketBody){
        const ticket = this.findById(ticketId)
        ticket.username = ticketBody.username ?? ticket.username
        ticket.price = ticketBody.price ?? ticket.price
        ticket.updateAt = new Date()
        return ticket
    }

    /**
     * 
     * @param {String} ticketId 
     */
    deleteById(ticketId){
        
        const index = this.tickets.findIndex(

            /**
             * 
             * @param {String} ticket 
             * @returns {Ticket}
             */
            (ticket) => ticket.id === ticketId
        )

        if(index !== -1){
            this.tickets.splice(index,1)
            return true
        }
        else{
            return false
        }

    }
    

    /**
     * 
     * @param {Number} winnerCount 
     * @return {Array<Ticket>}
     */
    draw(winnerCount){
        const winnerIndexes = new Array(winnerCount)
        let index = 0;

        while (index<winnerCount) {
            let winnerIndex = Math.floor(Math.random() * this.tickets.length)
            if (!winnerIndexes.includes(winnerIndex)) {
                winnerIndexes[index] = winnerIndex;
                index++;
            }
        }
        let winners = winnerIndexes.map((index)=>this.tickets[index])
        return winners

    }



}

const MyDb = new DB()
module.exports = MyDb