import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Trusted Container Registry',
    Svg: require('@site/static/img/carbide-logo.svg').default,
    description: (
      <>
        SLSA 3 compliant Container Registry hosting RGS digitally-signed Rancher images.
      </>
    ),
  },
  {
    title: 'STIGATRON',
    Svg: require('@site/static/img/stigatron_logo_full_black.svg').default,
    description: (
      <>
        Day 2 operator tactically built to monitor the DISA STIG integrity of your downrange RKE2 Kubernetes clusters.
      </>
    ),
  },
  {
    title: 'World Class Support',
    Svg: require('@site/static/img/rancher-logo-stacked-color-svg.svg').default,
    description: (
      <>
        Rancher Government is your trusted provider of Rancher, Kubernetes and cloudnative enterprise support. Learn more at <a href="https://ranchergovernment.com">ranchergovernment.com</a>.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
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
