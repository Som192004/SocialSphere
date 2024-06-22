import styles from './About.module.css';

const About = () => {
    return <>
    <center><h1>About Me</h1></center>

    <div class={styles.aboutme}>
        <div class={styles.sectiontitle}>Introduction</div>
        <div class={styles.sectioncontent}>
            <p>My name is Soham. I am currently an Engineering student , studying in the College named Pune Institute of Computer Technology , Pune .</p>
        </div>
    </div>

    <div class={styles.aboutme}>
        <div class={styles.sectiontitle}>Aspirations</div>
        <div class={styles.sectioncontent}>
            <p>My goal is to solve the real world problems using my knowledge about the Technology</p>
        </div>
    </div>

    <div class={styles.aboutme}>
        <div class={styles.sectiontitle}>Education and Skills</div>
        <div class={styles.sectioncontent}>
            <p>I am in PreFinal Year and have good knowledge about the FullStack Web Development (MERN Stack ) </p>
        </div>
    </div>

    <div class={styles.aboutme}>
        <div class={styles.sectiontitle}>Interests and Hobbies</div>
        <div class={styles.sectioncontent}>
            <p>Outside of academics, I enjoy reading books, exploring natural places, and playing cricket.</p>
        </div>
    </div>

    <div class={styles.aboutme}>
        <div class={styles.sectiontitle}>Contact Information</div>
        <div class={styles.sectioncontent}>
            <p>You can connect with me via Linkedin : www.linkedin.com/in/soham-holkar-a45261261 / Email : sohamholkar800@gmail.com</p>
        </div>
    </div>

    </>
}

export default About ; 