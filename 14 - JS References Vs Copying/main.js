    // start with strings, numbers and booleans

    let age = 100;
    let age2 = age;
    console.log(age, age2);
    
    age = 200;
    console.log(age, age2);

    let name = 'Sabina';
    let name2 = 'Sabeenski';
    console.log(name, name2);

    name = 'Dipen';
    console.log(name, name2)


    // Let's say we have an array
    const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

    // and we want to make a copy of it.
    const team = players;
    console.log(team, players);
    // You might think we can just do something like this:
    team[3] = 'Lux';
    console.log(team, players)

    // however what happens when we update that array?
    // now here is the problem!
    // oh no - we have edited the original array too!
    // Why? It's because that is an array reference, not an array copy. They both point to the same array!
    // So, how do we fix this? We take a copy instead!
    // one way
    // To make copies instead of referencing like above, so the actual values stay same.
    const team2 = players.slice();
    team2[3] = 'Sun'
    console.log(team2, players)
    
    // or create a new array and concat the old one in
    const team3 = [].concat(players)

    // or use the new ES6 Spread
    const team4 = [...players]
    console.log(team4)

    const team5 = Array.from(players)

    // now when we update it, the original one isn't changed
    // The same thing goes for objects, let's say we have a person object

    // with Objects
    const person = {
      name: 'Wes Bos',
      age: 80
    };
    // and think we make a copy:
    const captain = person;
    captain.number = 90;

    // how do we take a copy instead?
    const newObj = Object.assign({}, person, {number: 109} );
    console.log(newObj)
    console.log(person)
     
    // We will hopefully soon see the object ...spread
    const cap3 = {...person};
    console.log(person)
    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
  
