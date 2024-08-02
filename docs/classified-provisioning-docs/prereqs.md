# Prerequisites

In order to utilize Classified Provisioning in SC2S/C2S, you will need the following prerequisites.

## Tools

The following tools are required to package Classified Provisioning artifacts and install/upgrade Rancher.

- [Hauler](https://rancherfederal.github.io/hauler-docs/docs/introduction/install)
- [Helm](https://helm.sh/docs/intro/install)
- [Rancher](https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade) (v2.7.13, v2.7.14, v2.8.4 or greater)

## IAM Role & Instance Profile

The AmazonEC2 provisioner requires a certain amount of access to read, write, and delete some AWS resources. Enabling this sans principal credentials (access key, secret key) requires an [EC2 instance profile](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-roles-for-amazon-ec2.html#ec2-instance-profile) associated with an IAM Role, for each Rancher MCM node, having the following policy:

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

This role needs to then be attached to all EC2 instances that Rancher MCM is running on.

![Modify IAM Role](/img/classified-provisioning/modify-iam-role.png)