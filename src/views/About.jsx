import Frame from '../components/Frame'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PagePresentation from '../components/PagePresentation'
import styles from '../css/about.module.css'


function About({}) {


  return (
    < >
        <Frame />
        <Header />
        <PagePresentation view='about'/>
        <section className={styles.aboutContent}>
        <p className={styles.aboutPararagraph}>
          I am a React frontend developer. I use Javascript and the React library to build web applications.
        </p>
        <h2 className={styles.aboutH2}>
          My stack:
        </h2>
        <div className={styles.stackElementsContainer} >
          <div className={styles.stackElement} >
            <div className={styles.stackElementHeading} >
              <img className={styles.stackElementImage} src="assets/html5.webp" width="50px" alt="HTML5" />
              <h3 className={styles.stackElementName} >HTML5</h3>
            </div>
          </div>
          <div className={styles.stackElement} >
            <div className={styles.stackElementHeading} >
              <img className={styles.stackElementImage} src="assets/css3.webp" width="50px" alt="CSS3" />
              <h3 className={styles.stackElementName} >CSS3</h3>
            </div>
            <div className={styles.stackSubelementsContainer}>
              <div className={styles.stackSubelement}>
                <img className={styles.stackSubelementImage} src="assets/sass.webp" width="50px" alt="Sass" />
                <h4 className={styles.stackSubelementName} >Sass</h4>
              </div>
              <div className={styles.stackSubelement}>
                <img className={styles.stackSubelementImage} src="assets/tailwind.png" width="50px" alt="Sass" />
                <h4 className={styles.stackSubelementName} >Tailwind</h4>
              </div>
              <div className={styles.stackSubelement}>
                <img className={styles.stackSubelementImage} src="assets/bootstraps.png" width="50px" alt="Sass" />
                <h4 className={styles.stackSubelementName} >Bootstrap</h4>
              </div>
            </div>
          </div>
          <div className={styles.stackElement} >
              <div className={styles.stackElementHeading} >
                <img className={styles.stackElementImage} src="assets/js.webp" width="50px" alt="Javascript" />
                <h3 className={styles.stackElementName} >Javascript</h3>
              </div>
            <div className={styles.stackSubelementsContainer}>
              <div className={styles.stackSubelement}>
                <img className={styles.stackSubelementImage} src="assets/react.webp" width="50px" alt="React" />
                <h4 className={styles.stackSubelementName} >React</h4>
              </div>
            </div>
          </div>
        </div>
        </section>
        <Footer />
    </>
  )
}

export default About