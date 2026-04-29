import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Carbide Secured Registry (CSR)',
    Svg: require('@site/static/img/rgs_carbide_secured_registry_100x100.svg').default,
    description: (
      <>
        Centralized Secure SLSA 3 Compliant Container Registry, with SBOMs, CVEs, Image Attestations, and verifiable digital signatures.
      </>
    ),
  },
  {
    title: 'World Class Support',
    Svg: require('@site/static/img/rgs_world_class_support_100x100.svg').default,
    description: (
      <>
        Rancher Government Solutions is your trusted provider of Rancher, Kubernetes, and Cloud Native support. Learn more on our <a href="https://ranchergovernment.com">website</a>.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--6')}>
      <div className={styles.featureCard}>
        <div className={styles.featureIconWrap}>
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className={styles.featureBody}>
          <h3 className={styles.featureTitle}>{title}</h3>
          <p className={styles.featureDesc}>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}