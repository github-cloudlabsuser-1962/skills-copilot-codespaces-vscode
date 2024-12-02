# Creating a Virtual Network in Azure Portal

Follow these steps to create a virtual network in the Azure Portal:

## Step 1: Sign in to Azure Portal
1. Go to [Azure Portal](https://portal.azure.com/).
2. Sign in with your Azure account credentials.

## Step 2: Create a Virtual Network
1. In the left-hand menu, select **Create a resource**.
2. In the **Search the Marketplace** box, type **Virtual Network** and press **Enter**.
3. Select **Virtual Network** from the search results.
4. Click **Create**.

## Step 3: Configure the Virtual Network
1. In the **Basics** tab, enter the following details:
    - **Subscription**: Select your subscription.
    - **Resource group**: Select an existing resource group or create a new one.
    - **Name**: Enter a name for your virtual network.
    - **Region**: Select the region where you want to create the virtual network.

2. In the **IP Addresses** tab, configure the following:
    - **IPv4 address space**: Enter the address range (e.g., `10.0.0.0/16`).
    - **Subnets**: Add a subnet by clicking **+ Add subnet** and entering the subnet name and address range (e.g., `10.0.0.0/24`).

3. In the **Security** tab, configure the following (optional):
    - **DDoS Protection**: Enable or disable DDoS protection.
    - **Firewall**: Enable or disable Azure Firewall.

4. In the **Tags** tab, add any tags if needed.

5. Review the configuration in the **Review + create** tab, and click **Create**.

## Step 4: Verify the Virtual Network
1. Once the deployment is complete, go to the **Resource groups** section.
2. Select the resource group where you created the virtual network.
3. Verify that the virtual network and its subnets are listed.

Congratulations! You have successfully created a virtual network in Azure Portal.