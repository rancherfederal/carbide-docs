# Prerequisites

In order to utilize IC Cloud Support with Rancher Government, you will need the following prerequisites.

## Tools

The following tools are required to install/upgrade Rancher Government.

- [Hauler](https://rancherfederal.github.io/hauler-docs/docs/introduction/install), or Docker
- [Helm](https://helm.sh/docs/intro/install)
- [Rancher Government](https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade) (v2.10.3, v2.9.7, v2.8.13 or greater)

> **NOTE:** This feature is only availabe in the Rancher Government product. Carbide customers can download the required artifacts from the [Carbide Portal](https://portal.ranchercarbide.dev/) or the [Carbide Secured Regsitry](/docs/registry-docs/downloading-images.md).

![Rancher Government Portal](/img/classified-provisioning/RancherGovPortal.png)

## IAM Role & Instance Profile

The Amazon EC2 provisioner requires a certain amount of access to read, write, and delete some AWS resources. Enabling these sans principal credentials (i.e. access key and secret key) requires an [EC2 Instance Profile](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-roles-for-amazon-ec2.html#ec2-instance-profile), associated with an IAM Role, for each node in the Rancher management cluster, with the following policy:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "RancherAWSEC2Permissions",
            "Effect": "Allow",
            "Action": [
                "ec2:AuthorizeSecurityGroupIngress",
                "ec2:Describe*",
                "ec2:ImportKeyPair",
                "ec2:CreateKeyPair",
                "ec2:CreateSecurityGroup",
                "ec2:CreateTags",
                "ec2:DeleteKeyPair",
                "ec2:ModifyInstanceMetadataOptions"
            ],
            "Resource": "*"
        },
        {
            "Sid": "RancherAWSKMSPermissions",
            "Effect": "Allow",
            "Action": [
                "kms:Decrypt",
                "kms:GenerateDataKeyWithoutPlaintext",
                "kms:Encrypt",
                "kms:DescribeKey",
                "kms:CreateGrant",
                "ec2:DetachVolume",
                "ec2:AttachVolume",
                "ec2:DeleteSnapshot",
                "ec2:DeleteTags",
                "ec2:CreateTags",
                "ec2:CreateVolume",
                "ec2:DeleteVolume",
                "ec2:CreateSnapshot"
            ],
            "Resource": [
              "arn:aws:ec2:AWS_REGION_PLACEHOLDER:AWS_ACCOUNT_ID_PLACEHOLDER:volume/*",
              "arn:aws:ec2:AWS_REGION_PLACEHOLDER:AWS_ACCOUNT_ID_PLACEHOLDER:instance/*",
              "arn:aws:ec2:AWS_REGION_PLACEHOLDER':AWS_ACCOUNT_ID_PLACEHOLDER:snapshot/*",
              "arn:aws:kms:AWS_REGION_PLACEHOLDER':AWS_ACCOUNT_ID_PLACEHOLDER:key/*"
            ]
        },
        {
            "Sid": "RancherAWSPassRolePermissions",
            "Effect": "Allow",
            "Action": [
				"iam:PassRole",
				"ec2:RunInstances",
				"ec2:DetachVolume",
				"ec2:AttachVolume",
				"ec2:DeleteSnapshot",
				"ec2:DeleteTags",
				"ec2:CreateTags",
				"ec2:CreateVolume",
				"ec2:DeleteVolume",
				"ec2:CreateSnapshot"
            ],
            "Resource": [
                "arn:aws:ec2:AWS_REGION_PLACEHOLDER::image/ami-*",
                "arn:aws:ec2:AWS_REGION_PLACEHOLDER:AWS_ACCOUNT_ID_PLACEHOLDER:instance/*",
                "arn:aws:ec2:AWS_REGION_PLACEHOLDER:AWS_ACCOUNT_ID_PLACEHOLDER:placement-group/*",
                "arn:aws:ec2:AWS_REGION_PLACEHOLDER:AWS_ACCOUNT_ID_PLACEHOLDER:volume/*",
                "arn:aws:ec2:AWS_REGION_PLACEHOLDER:AWS_ACCOUNT_ID_PLACEHOLDER:subnet/*",
                "arn:aws:ec2:AWS_REGION_PLACEHOLDER:AWS_ACCOUNT_ID_PLACEHOLDER:key-pair/*",
                "arn:aws:ec2:AWS_REGION_PLACEHOLDER:AWS_ACCOUNT_ID_PLACEHOLDER:network-interface/*",
                "arn:aws:ec2:AWS_REGION_PLACEHOLDER:AWS_ACCOUNT_ID_PLACEHOLDER:security-group/*",
                "arn:aws:iam::AWS_ACCOUNT_ID_PLACEHOLDER:role/*"
            ]
        },
        {
            "Sid": "RancherAWSEC2ScopedPermissions",
            "Effect": "Allow",
            "Action": [
                "ec2:RebootInstances",
                "ec2:TerminateInstances",
                "ec2:StartInstances",
                "ec2:StopInstances"
            ],
            "Resource": "arn:aws:ec2:AWS_REGION_PLACEHOLDER:AWS_ACCOUNT_ID_PLACEHOLDER:instance/*"
        }
    ]
}
```

![Modify IAM Role](/img/classified-provisioning/modify-iam-role.png)

## Rancher Manager Configurations

Rancher Manager needs to be configured with the following values to support full airgapped deployments as well as your custom certificates and certificate authority (CA).

### Helm Values

Configure the follow Helm values for your Rancher helm deployment, adjusting the `rancher-url` and `registry-url` for your specific environment.

```yaml
additionalTrustedCAs: true
hostname: <rancher-url>
ingress:
  tls:
    source: secret
rancherImage: <registry-url>/rancher/rancher
rancherImageTag: v2.10.3-govt-1
systemDefaultRegistry: <registry-url>
useBundledSystemChart: true
privateCA: true
```

### Custom CA Certificate Secret

For Rancher to make requests to the Classified AWS endpoints, you need to create a secret containing the AWS CA of your specific environment.

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: tls-ca-additional
  namespace: cattle-system
data:
  ca-additional.pem: <encodedPrivateBundle>
type: Opaque
```
**NOTE**: Ensure this secret matches the name and namespace above.

### Registry Configuration

You need to configure your Kubernetes cluster to utilize your private registry. Configure the `registries.yaml` file in your RKE2/K3s configuration directories with the following:

```yaml
mirrors:
  "*":
    endpoint:
      - "https://<registry-url>"

configs:
  "<registry-url>":
    auth:
      username: <redacted>
      password: <redacted>
```

For more information on registry configuration, check out the RKE2 docs [here](https://docs.rke2.io/install/containerd_registry_configuration).

For more detailed information about Air-Gapped Rancher, check out the Rancher docs [here](https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install).
