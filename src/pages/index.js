import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import LogoSvg from '@site/static/img/carbide-logo.svg';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroOverlay} />
      <div className={styles.heroGrid} />
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>DOCUMENTATION</div>
          <div className={styles.heroWrapper}>
            <LogoSvg className={styles.heroLogo} />
            <h1 className={styles.heroTitle}>
              <span className={styles.heroLine}>Rancher</span>
              <span className={styles.heroLine}>Government</span>
              <span className={styles.heroLine}>
                <span className={styles.carbideAccent}>
                  C<span className={styles.carbideRed}>A</span>RBIDE
                </span>
              </span>
            </h1>
          </div>
          <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
          <div className={styles.heroActions}>
            <Link
              className={styles.primaryButton}
              to="/docs/intro">
              View the Docs
            </Link>
            <Link
              className={styles.secondaryButton}
              href="https://ranchergovernment.com/contact">
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Securing Cloud Native Missions">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}