// object literals

const blogs = [
    { title: 'why mac & cheese rules', likes: 30 },
    { title: '10 things to do with marmite', likes: 50 }
];


//QUERY SELECTORS
const ulblogs = document.querySelector('.blogs');
const writerName = document.querySelector('.writerName');
//QUERY SELECTORS END



// USER OBJECTS
// Must use regular function's NOT arrow functions inside of the
// object.
//
// That said. There is a shorthand version that you can use.
// EX. This case
//
// login: function(){
//     console.log('the user is logged in');
// },
// BECOMES. This case where the /name/ of the function takes the
// place of the word /function/.
//
// login(){
//     console.log('the user is logged in');
// },
let user = {
    name: 'Crystal',
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'berlin',
    blogs: [
        { title: 'why mac & cheese rules', likes: 30 },
        { title: '10 things to do with marmite', likes: 50 }
    ],
    login(){
        console.log('the user is logged in');
    },
    logout(){
        console.log('the user logged out')
    },
    logBlogs(){
        console.log(`${this.name} has writen the following blogs:`);
        this.blogs.forEach(blog => {
            console.log(blog.title, `It has ${blog.likes} likes.`);
        })
    },
};
// USER OBJECTS END



// INJECTED HTML VARIABLES
let userIntro = `<h3 style="color: green">These are the blogs writen by: ${user.name}</h3>`;
let content = '';
// INJECTED HTML VARIABLES END


let bloggerName = function(user){
    let userIntro = `<h3 style="color: green">These are the blogs writen by: ${user.name}</h3>`;
    return userIntro;
}


// CONSOLE LOGGING
// user.login();
// user.logout();
user.logBlogs();
// console.log(user);
// console.log(user.name);

// console.log(user.age);
// user.age = 35;
// console.log(user.age)

// console.log(user['name']);
// user['name'] = 'cun-li';
// console.log(user['name']);

// console.log(typeof user);
// CONSOLE LOGGING END



// FILLING THE HTML VARIABLES
user.blogs.forEach(blog => {
    content += `<li style="color: blue">${blog}</li>`;
});
// FILLING THE HTML VARIABLES END



//INJECTING HTML
ulblogs.innerHTML = content;
writerName.innerHTML = userIntro;
//INJECTING HTML END




