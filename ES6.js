
// ES6  Arrow function

let add= (x=0,y=0) => {
    return x+y
}

console.log(add(5,6))

// (this) keyword

let counter ={
    count:2,
    next: function(){
        return (this.count)++
    }
}

console.log(counter.next())