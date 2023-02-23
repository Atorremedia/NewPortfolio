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
                <p className={`${styles.articleText}`}>I was lucky enough, as a kid, to study some programming fundamentals at the school. Fortunately, I had some good computing teachers. They used to understand and enjoy what they taught and, to be honest, I coud not say the same about all of my school teachers. It was the early 80's and computers were used mostly in professional environments, most of them were big and expensive. But there were some family computers starting to make their way. They were such a nerdy thing, mainly maid to play arcade games. My friends and I used to gather around a Commodore or Amstrad machine and we copied simple BASIC games from magazines. I remember enjoying much more when we dared to tweak the code and created our own versions of those games.
                    Those days, while playing, I learned about sequencial programming, loops, conditional statements, variables and other programming fundamentals. So many hours playing around with that simple code laid a solid base for what was coming years after...
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