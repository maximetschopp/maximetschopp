import styles from './about.module.css'
import ColoredLogo from '@/components/logo/coloredLogo';

export default function About() {
    return (
        <section className={styles.about}>
            <ColoredLogo />
            <div>
              <div className={styles.Heading}>Hey! 👋 I’m <span>Maxime</span>, </div>
              <div className={styles.Heading}>a student in Zurich,</div>
              <div className={styles.Heading}>and a passionate creative.</div>
              <div className={styles.subtitle_container}>
              <div className={styles.Heading2}>... along with many other things.</div>
              <button className={styles.about_me_button}>
                  <div className={styles.about_me_button_text}>About Me</div>
                  <svg className={styles.arrow} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
                    <polygon points="20.03 29.78 29.81 20 29.81 20 20.03 10.22 20.03 10.22 17.22 13.03 17.22 13.03 22.18 17.99 22.18 17.99 9.99 17.99 9.99 17.99 9.99 22.01 9.99 22.01 22.18 22.01 22.18 22.01 17.22 26.97 17.22 26.97 20.03 29.78 20.03 29.78"/>
                    <path d="m20,40c-2.73,0-5.32-.52-7.75-1.58-2.43-1.05-4.56-2.48-6.38-4.3s-3.25-3.94-4.3-6.38c-1.05-2.43-1.57-5.02-1.57-7.75s.53-5.37,1.57-7.8c1.05-2.43,2.48-4.55,4.3-6.35,1.82-1.8,3.94-3.22,6.38-4.28,2.43-1.05,5.02-1.58,7.75-1.58s5.37.53,7.8,1.57c2.43,1.05,4.55,2.48,6.35,4.28,1.8,1.8,3.23,3.92,4.28,6.35,1.05,2.43,1.58,5.03,1.58,7.8s-.52,5.32-1.58,7.75c-1.05,2.43-2.48,4.56-4.28,6.38-1.8,1.82-3.92,3.25-6.35,4.3-2.43,1.05-5.03,1.58-7.8,1.58Zm1.68-3.07c4.01-.35,7.47-1.99,10.37-4.9,3.3-3.32,4.95-7.33,4.95-12.03s-1.65-8.75-4.95-12.05c-3.3-3.3-7.32-4.95-12.05-4.95s-8.71,1.65-12.02,4.95c-3.32,3.3-4.98,7.32-4.98,12.05,0,4.16,1.3,7.77,3.89,10.85,3.62,4.29,9.2,6.57,14.79,6.08Z"/>
                  </svg>
              </button>
              </div>
            </div>
          </section>
    );
}