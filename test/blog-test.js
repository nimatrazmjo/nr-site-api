var request = require("request");
var assert = require("assert");
var helloWorld = require("../routes/index.js");

var base_url ="http://localhost:3000";

describe("Hello world", function(){

});

describe("Hello Server", function(){
    describe("GET /", function(){
        it("return status code 200", function(done){
            request.get(base_url, function(error, response, body){
                assert.equal(200, response.statusCode);
                done();
            });
        });
        it("returns Hello World", function(done) {
            request.get(base_url, function(error, response, body) {
                //expect(body).toBe("Hello World");
                assert.equal("Hello world", body);
                done();
            });
        });
    });
});

describe("/blogs GET", function(){
    it("/blog",function(done){
        request.get(base_url+"/blog",function(error, response, body) {
            console.log(response.statusCode);
            console.log(response.statusMessage);
            assert.equal(200, response.statusCode);
            done();
        });
    });
});