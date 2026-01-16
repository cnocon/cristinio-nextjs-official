import pageStyles from "../page.module.scss";
import data from "../../lib/data/resume";
import styles from "./resume.module.scss";

export default function Page() {
  return (
    <div className={pageStyles.page}>
      <header className={pageStyles.header}>
        <h2 className={pageStyles['page-title']}><span>Résumé</span></h2>
      </header>

      <div className={pageStyles.content}>
        <div className={styles.resumeContent}>
          <section className={styles.experienceSection}>
            <header className={styles.sectionHeader}><h3>Experience</h3></header>
            <div className={styles.sectionContent}>
              {data.resume.experience.map((item, index) => (
                <div key={index} className={styles.resumeItem}>
                  <h4 className={styles.itemTitle}>{item.title}</h4>
                  <h5 className={styles.itemCompany}>{item.company} - {item.location}</h5>
                  <h6 className={styles.itemDate}>
                    <time dateTime={item.start}>{item.start}</time> - <time dateTime={item.end}>{item.end}</time>
                  </h6>

                  <ul className={styles.descriptionList}>
                    {item.description.map((desc, descIndex) => (
                      <li key={descIndex} className={styles.descriptionItem}>
                        {desc}
                      </li>
                    ))}
                  </ul>

                  {item.honors.length > 0 &&
                  <div className={styles.honorsSection}>
                    <h5>Honors & Awards</h5>

                  <ul className={styles.honorsList}>
                    {item.honors.map((honor, honorIndex) => (
                      <li key={honorIndex} className={styles.honorsItem}>
                        <span>{honor.name}</span>
                        <span>{honor.detail}</span>
                      </li>
                    ))}
                  </ul></div>
                  }
                </div>
              ))}
            </div>
          </section>

          <section className={styles.skillsSection}>
            <div className={styles.techSkillsSection}>
              <header className={styles.sectionHeader}><h3>Technical Skills</h3></header>
              <div className={styles.sectionContent}>
                <ul className={styles.skillsList}>
                  {data.resume.skills.technical.map((skill, index) => (
                    <li key={index} className={styles.skillItem}>{skill.label}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={styles.softSkillsSection}>
              <header className={styles.sectionHeader}><h3>Soft Skills</h3></header>
              <div className={styles.sectionContent}>
                <ul className={styles.skillsList}>
                  {data.resume.skills.soft.map((skill, index) => (
                    <li key={`soft-${index}`} className={styles.skillItem}>{skill.label}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className={styles.educationSection}>
            <header className={styles.sectionHeader}><h3>Education</h3></header>
            <div className={styles.sectionContent}>
              {data.resume.education.map((item, index) => (
                <div key={index} className={styles.resumeItem}>
                  {item.degrees && item.degrees.map((degree, degIndex) => (
                    <h4 key={degIndex}>{degree}</h4>
                  ))}
                  <p>{item.school}, {item.location}</p>
                  <p>
                    <span className={styles.itemDate}>
                      {item.start} - {item.end}
                    </span>
                  </p>

                  {item.honors.length > 0 &&
                  <ul>
                    {item.honors.map((honor, honorIndex) => (
                      <li key={honorIndex}>
                        <span>{honor.name}</span>
                        <span>{honor.detail}</span>
                      </li>
                    ))}
                  </ul>
                  }
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
