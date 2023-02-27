import React from 'react'
import styles from '../css/postArticle.module.css'

function PostArticle({displayedArticle, setDisplayedArticle}) {

    function handleClick () {
        window.scrollTo(0,0)
        setDisplayedArticle(undefined)
    }

    if (displayedArticle === 1) {
        
        return (
        <>
            
            <div className={`${styles.buttonContainer}`}>
                <button onClick={handleClick} className={`${styles.backButton}`} >Back to Recent Posts</button>
            </div>
            <div className={`${styles.articleContainer}`}>
                <h2 className={`${styles.articleTitle}`}>HOW I GOT INTO CODING</h2>
                <h3 className={`${styles.articleSectionTitle}`}>Learning fundamentals at the school and with friends</h3>
                <p className={`${styles.articleText}`}>
                    I was lucky enough, as a kid, to study some programming fundamentals at the school. Fortunately, I had some good computing teachers. They used to understand and enjoy what they taught and, to be honest, I coud not say the same about all of my school teachers. It was the early 80's and computers were used mostly in professional environments, most of them were big and expensive. But there were some family computers starting to make their way. They were such a nerdy thing, mainly maid to play arcade games. My friends and I used to gather around a Commodore or Amstrad machine and we copied simple BASIC games from magazines. I remember enjoying much more when we dared to tweak the code and created our own versions of those games.
                    Those days, while playing, I learned about sequencial programming, loops, conditional statements, variables and other programming fundamentals. So many hours playing around with that simple code laid a solid base for what was coming years after...
                </p>
                <h3 className={`${styles.articleSectionTitle}`}>Early web design and development</h3>
                <p className={`${styles.articleText}`}>
                In the 90's I was a teenager and personal computers started to bloom. I discovered Windows and started tinkering with design tools like <strong>CorelDraw</strong> and <strong>PhotoShop</strong>. The possibilities were endless and I had my first contact with design. It was fun and when the web arrived I stepped into <strong>Netscape Editor</strong> as a natural evolution in my digital discovery, and I was designing web pages and filling them all with GIFs right away. What a time!
                <br />
                Internet was starting to be widely used. The web entered an exponential growth phase and we coud see it live. 
                <br />
                Then, I found <strong>Dreamweaver</strong>. It was a more sofisticated and professional GUI for web development, where I started to understand how HTML and CSS worked together and I learned that PHP was a thing.
                <br />
                Things started to get fancy and then a different aproach came out. Web pages offered new design and real dynamic features, not just GIFs wobling around. There was a new inspiring tool: <strong>Flash</strong>, a vectorial animation language that opened our minds and cluttered our machines and connection lines...
                <br />
                After the Flash wave, the CMS's came out and it was easy to pick any web template and adapt it as necessary. They offered lots of features, but, although many more possibilities were available in terms of design and functionality, that was never optimal for customization, not for web 1.0, even less for web 2.0.
                </p>
                <h3 className={`${styles.articleSectionTitle}`}>Microcontrollers and electronics</h3>
                <h3 className={`${styles.articleSectionTitle}`}>Frontend development</h3>
            </div>
            <div className={`${styles.buttonContainer}`}>
                <button onClick={handleClick} className={`${styles.backButton}`} >Back to Recent Posts</button>
            </div>
        </>
    )
    }

    if (displayedArticle === 2) {
        return (
            <>
            <div className={`${styles.buttonContainer}`}>
                <button onClick={handleClick} className={`${styles.backButton}`} >Back to Recent Posts</button>
            </div>
            <div className={`${styles.articleContainer}`}>
                <h2 className={`${styles.articleTitle}`}>Javascript, a versatile, powerful, language</h2>
                <h3 className={`${styles.articleSectionTitle}`}>What is Javascript?</h3>
                <p className={`${styles.articleText}`}>JavaScript is a dynamic, high-level programming language that is widely used for creating web applications. It was created as a client-side language, meaning that it runs on the user's web browser rather than on the server side, although it can be used on the server with libraries like Node. JavaScript is a versatile language that can be used for a wide range of applications, from simple animations to complex web applications.  JavaScript has become an essential tool for web developers, and it is not surprising that it is one of the most popular programming languages in the world.
                </p>
                <p className={`${styles.articleText}`}>JavaScript was developed by Brendan Eich in just ten days in 1995 while he was working at Netscape Communications Corporation. The language was initially called Mocha, then changed to LiveScript before finally being named JavaScript. Since its inception, the language has undergone numerous updates and improvements, making it a robust and versatile tool for developers.
                </p>
                <p className={`${styles.articleText}`}>One of the significant benefits of JavaScript is its ability to enhance the interactivity of a website. JavaScript enables developers to add interactive features such as animations, dynamic menus, pop-ups, and more to web pages. It also allows for dynamic data input and processing, which is useful for applications such as e-commerce sites and social media platforms. Another key advantage of JavaScript is its ease of use. It is a lightweight language that is easy to learn and read, making it a great choice for beginners. Moreover, JavaScript is compatible with other web technologies like HTML and CSS, making it easy for developers to integrate it into their projects.
                </p>
                <p className={`${styles.articleText}`}>JavaScript has several frameworks and libraries that make development even easier. Some of the most popular frameworks include Angular, React, and Vue.js, which provide developers with pre-written code and templates to speed up development. Libraries like jQuery provide useful functions and tools for developers to use in their projects.
                </p>
                <h3 className={`${styles.articleSectionTitle}`}>Javascript special features</h3>
                <h4 className={`${styles.articleSectionSubtitle}`}>Data types</h4>
                <p className={`${styles.articleText}`}>JavaScript has several built-in data types, including strings, numbers, booleans, null, undefined, and objects. Strings are used to represent text, while numbers are used to represent numeric values. Booleans are used to represent true/false values, while null and undefined are used to represent non-existent or empty values. Objects are used to represent complex data structures, such as arrays, functions, and objects. JavaScript is a dynamically-typed programming language, which means that variable types are determined at runtime rather than during compilation. In JavaScript, weak typing allows variables to be implicitly coerced from one type to another, which can sometimes result in unexpected behavior or errors.
                </p>
                <p className={`${styles.articleText}`}>For example, in JavaScript, the plus operator (+) can be used to concatenate strings or add numbers together. If one operand is a string and the other is a number, JavaScript will attempt to convert the string to a number and perform the addition. This can lead to confusing results if the string cannot be converted to a valid number.
                </p>
                <p className={`${styles.articleText}`}>While weak typing can make JavaScript more flexible and easier to write, it also requires developers to be careful and mindful of the potential pitfalls that come with implicit type coercion. Typescript, a Javascript superset, can be used to add strong typing to Javascript code.
                </p>
                <h4 className={`${styles.articleSectionSubtitle}`}>Functions</h4>
                <p className={`${styles.articleText}`}>Functions are an essential part of JavaScript programming. A function is a block of code that performs a specific task. Functions can be defined with the function keyword and can accept arguments, which are used to pass data to the function. Functions can also return values, which are used to pass data back to the calling code. Arrow functions are a newer feature in JavaScript that provide a concise syntax for defining functions. They are written using the arrow operator and do not require the function keyword. They are often used in situations where a short, one-line function is needed. 
                </p>
                <h4 className={`${styles.articleSectionSubtitle}`}>Objects</h4>
                <p className={`${styles.articleText}`}>Objects are one of the most important features of JavaScript programming. An object is a collection of key-value pairs that represent a data structure. Objects can be used to represent complex data structures, such as arrays and functions. Here is an example of an object that represents a person:
                </p>
                <pre className={`${styles.code}`}>
                    <code>
                    const person = &#123;<br/>
  firstName: "John",<br/>
  lastName: "Doe",<br/>
  age: 30,<br/>
  fullName: function() &#123;<br/>
    return this.firstName + " " + this.lastName;<br/>
    &#125;<br/>
    &#125;<br/>
                    </code>
                </pre>
                <h3 className={`${styles.articleSectionTitle}`}>Conclusion</h3>
                <p className={`${styles.articleText}`}>JavaScript is a powerful and versatile language that is widely used for creating web applications. With its built-in data types, functions, arrow functions, and objects, JavaScript provides developers with a flexible and powerful toolset for building complex web applications. As JavaScript continues to evolve, new features and enhancements will undoubtedly be added to the language, making it an even more powerful and essential tool for web development.
                </p>

            </div>
            <div className={`${styles.buttonContainer}`}>
                <button onClick={handleClick} className={`${styles.backButton}`} >Back to Recent Posts</button>
            </div>
            </>
    )
    }

    if (displayedArticle === 3) {
        return (
            <>
            <div className={`${styles.buttonContainer}`}>
                <button onClick={handleClick} className={`${styles.backButton}`} >Back to Recent Posts</button>
            </div>
            <div className={`${styles.articleContainer}`}>
                <h2 className={`${styles.articleTitle}`}>Component-based development with React</h2>
                <h3 className={`${styles.articleSectionTitle}`}>Why should I use a Javascript library or framework?</h3>
                <p className={`${styles.articleText}`}>I was lucky enough, as a kid, to study some programming fundamentals at the school. Fortunately, I had some good computing teachers. They used to understand and enjoy what they taught and, to be honest, I coud not say the same about all of my school teachers. It was the early 80's and computers were used mostly in professional environments, most of them were big and expensive. But there were some family computers starting to make their way. They were such a nerdy thing, mainly maid to play arcade games. My friends and I used to gather around a Commodore or Amstrad machine and we copied simple BASIC games from magazines. I remember enjoying much more when we dared to tweak the code and created our own versions of those games.
                    Those days, while playing, I learned about sequencial programming, loops, conditional statements, variables and other programming fundamentals. So many hours playing around with that simple code laid a solid base for what was coming years after...
                </p>
                <h3 className={`${styles.articleSectionTitle}`}>Why should I use a Javascript library or framework?</h3>
            </div>
            <div className={`${styles.buttonContainer}`}>
            <button onClick={handleClick} className={`${styles.backButton}`} >Back to Recent Posts</button>
            </div>
            </>
    )
    }

}

export default PostArticle