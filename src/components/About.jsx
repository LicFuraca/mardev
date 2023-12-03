import classes from './About.module.css'

const About = () => {
    return (
        <>
            <section
                id='about'
                className={classes.aboutContainer}>
                <h2 className='section-title'>
                    About<span className='highlight'>.</span>
                </h2>
                <div className='container'>
                    <article className={classes.content}>
                        <h4 className={classes.title}>Well, hi.</h4>
                        <p className={classes.text}>
                            Hi, I&apos;m Martín, a full-stack developer with a passion for building beautiful and
                            intuitive web experiences. I specialize in React JS, Javascript, PHP, working on my Node
                            skills and I&apos;m constantly pushing myself to learn more and stay up-to-date with the
                            latest technologies and trends.
                        </p>
                        <p className={classes.text}>
                            One of the things that sets me apart is my attention to detail. I believe that every pixel
                            and every line of code matters, and I take pride in crafting websites that are not only
                            visually stunning but also perfectly functional and user-friendly. Whether it&apos;s
                            tweaking the spacing of an element or optimizing the performance of a script, I&apos;m
                            always striving for perfection.
                        </p>
                        <p className={classes.text}>
                            But more than just technical expertise, I&apos;m also a creative problem solver. I love
                            taking on challenging projects and finding innovative solutions that exceed my clients
                            expectations. And I believe that communication and collaboration are key to success in any
                            project, so I always make sure to keep my clients in the loop and work closely with them to
                            achieve their goals.
                        </p>
                        <p className={classes.text}>
                            So if you are looking for a fullstack developer who is passionate, detail-oriented, and
                            committed to excellence, look no further. I&apos;m here to help you bring your vision to
                            life and create an online presence that truly stands out.
                        </p>
                    </article>
                </div>
            </section>
        </>
    )
}
export default About
