#lottery ticket
 

-sell lottery ticket
-update lottery ticket
-delete lottery ticket
-get all ticket
-get ticket by id
-get ticket by username
-bulk buy (user can buy multiple tickets at a time)
-raffel draw


//tickets model

number (Must unique)
username
price
timestamp



//routes

/tickets/t/:ticketId GET - find single ticket
/tickets/t/:ticketId PATCH - update ticket by id
/tickets/t/:ticketId DELETE - delete ticket by id
/tickets/u/:username GET - find tickets for a given user
/tickets/u/:username PATCH - update ticket by id
/tickets/u/:username DELETE - delete ticket by id
/tickets/sell - create tickets
/tickets/bulk - bulk sell ticket
/tickets/draw - find winners
/tickets/ - find all tickets