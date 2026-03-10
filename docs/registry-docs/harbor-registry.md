# Harbor Registry

RGS is transitioning the Carbide Secured Registry to be based on `Harbor`. If you are a new customer or have renewed your entitlement after April 2026, your credentials are for the Harbor registry, and no action is required. Your username should start with `carbide-`. If you are an existing customer still using a license key for the Azure Container Registry (ACR), your credentials will be updated on renewal to the Harbor registry, or you can [contact support](https://support.rancherfederal.com/) to start using the benefits of the new registry sooner.

## Benefits of Harbor-based Carbide Secured Registry

Transitioning to the Harbor registry provides several performance and feature improvements:

* Increased rate limits to speed up pulling large batches of images from the Carbide Registry
* Simple configuration of registry replication rules to seed private Harbor registries (see steps below)
* IPv6 support for pulling artifacts
* Carbide Portal login with username and password instead of token

## Setting Up a Harbor Replication of Carbide to Private Registry

1. In your Harbor dashboard, select Registries > New Endpoint. 

2. Select `Docker Registry` as your provider, and `https://regsitry.ranchercarbide.dev` as the endpoint URL. Enter your username and password in the Access ID and Access Secret fields.

![Registry Endpoint](/img/RegistryEndpoint.png)

3. Select Replications > New Replication Rule. 

4. Name your replication rule and select `Pull-based`. Set `Source registry` to the registry endpoint you just configured. Set the rest of the rule to your desired configuration. See the [Harbor documentation](https://goharbor.io/docs/2.2.0/administration/configuring-replication/create-replication-rules/) for additional information.

![Replication Rule](/img/ReplicationRule.png)