
function getMessage(name, street) {

    const messageArray =[
        `Hi ${name}, my wife and I recently saw your property on ${street}. We were wondering if you are looking to sell? God Bless, Michael`,
        `Hi ${name}, I noticed your property on ${street}. Are you looking to sell by any chance? God Bless, Michael`,
        `Hi ${name}, I walked by your house on ${street} last week and I was wondering if you are looking to sell? I'd be interested in buying it. God Bless, Michael`,
        `Hi there ${name}, I drove by your house on ${street} the other day. Are you selling this house? I'd be interested in buying it. Best, Michael`,
        `${name} are you selling your property on ${street}? My wife and I would be interested in buying it. Best, Michael`,
        `Hello ${name} I was wondering if you are looking to sell your house on ${street} I would be very interested in bying it. Best, Michael`,
        `Hi ${name} I drove by your house on ${street} and I was wondering if you would consider selling this house? Best, Michael`,
        `${name}, I hope I have the right number. Are you the owner of the house on ${street}? I would be very interested in buying this house. Best, Michael`,
        `${name}, I noticed that you own the house on ${street}. I hope I texted the right number. I was wondering if you are looking to sell this house? Best, Michael`,
        `${name}, I hope I got the right number. I'm looking for rental properties in Kalamazoo and I noticed that you own ${street}. Are you selling by any chance?`,
     ]

     

     return messageArray[Math.floor(Math.random() * messageArray.length)]

}


 module.exports = getMessage