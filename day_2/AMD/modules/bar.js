define(function () {
    const name = 'coder'
    const age = 10
    const    sayHello = (name) => {
        return "hello" + name;
    }
    return {
        name: name,
        age: age,
        sayHello: sayHello
    }
})