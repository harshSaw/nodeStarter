var em = require('events').EventEmitter;

module.exports = function Welcome(name, gender) {
    console.log("Welcome " + name + "!");
    // console.log(em);
    var myem = new em;
    // console.log("myem: ", myem);
    this.name = name;
    this.gender = gender;
    this.secret = "";    

    this.reveal = function(){
        if(this.gender === 'f') {
            this.secret = "You're a witch!";
            myem.emit('reveal', this.secret);
        } else {
            this.secret = "You're a wizard!";
            myem.emit('reveal', this.secret);
        }
    }
    myem.on('reveal', function(res){
        console.log(res);
    });
}
