export default class BookstoreService {

    data = [
        {
            id: 1,
            title: "JavaScript: The Definitive Guide",
            author: "David Flanagan",
            price: 35,
            coverImg: "https://images-na.ssl-images-amazon.com/images/I/71oUHJ6uO7L.jpg",
            description: "Since 1996, JavaScript: The Definitive Guide has been the bible for JavaScript programmers—a programmer\'s guide and comprehensive reference to the core language and to the client-side JavaScript APIs defined by web browsers. The 6th edition covers HTML5 and ECMAScript 5. Many chapters have been completely rewritten to bring them in line with today's best web development practices. New chapters in this edition document jQuery and server side JavaScript. It\'s recommended for experienced programmers who want to learn the programming language of the Web, and for current JavaScript programmers who want to master it."
        },
        {
            id: 2,
            title: "JavaScript Patterns",
            author: "Stoyan Stefanov",
            price: 13.49,
            coverImg: "https://images-na.ssl-images-amazon.com/images/I/511Gt98oEAL._SX379_BO1,204,203,200_.jpg",
            description: "What\'s the best approach for developing an application with JavaScript? This book helps you answer that question with numerous JavaScript coding patterns and best practices. If you\'re an experienced developer looking to solve problems related to objects, functions, inheritance, and other language-specific categories, the abstractions and code templates in this guide are ideal—whether you're using JavaScript to write a client-side, server-side, or desktop application."
        },
        {
            id: 3,
            title: "JavaScript Performance",
            author: "Nikolas Zakas",
            price: 13.49,
            coverImg: "https://ozon-st.cdn.ngenix.net/multimedia/1005511392.jpg",
            description: "If you\'re like most developers, you rely heavily on JavaScript to build interactive and quick-responding web applications. The problem is that all of those lines of JavaScript code can slow down your apps. This book reveals techniques and strategies to help you eliminate performance bottlenecks during development. You'll learn how to improve execution time, downloading, interaction with the DOM, page life cycle, and more."
        }
    ];

    getBooks(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(Math.random() > 0.90){
                    reject("Something bad happened"); 
                }
                else{
                    resolve(this.data);
                }
                
            }, 1000)
        });
    }

}