import { Fragment } from "react";
import { getDictionary, type Locale } from "../app/[lang]/dictionaries";
import styles from "./ProjectList.module.css";

interface ProjectListProps {
  lang: Locale;
}

export default async function ProjectList({ lang }: Readonly<ProjectListProps>) {
  const dict = await getDictionary(lang);
  return (
    <div className={styles.heroTags}>
      {dict.hero.tags.map((tag: string, index: number) => (
        <Fragment key={tag}>
          <span>{tag}</span>
          {index < dict.hero.tags.length - 1 && <span>·</span>}
        </Fragment>
      ))}
    </div>
  );
}
