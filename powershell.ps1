# Connect to Azure
Connect-AzAccount

# Variables
$resourceGroupName = "example-resources"
$location = "West Europe"
$storageAccountName = "examplestoracc"

# Create a resource group
New-AzResourceGroup -Name $resourceGroupName -Location $location

# Create a storage account
New-AzStorageAccount -ResourceGroupName $resourceGroupName `
                     -Name $storageAccountName `
                     -Location $location `
                     -SkuName "Standard_LRS" `
                     -Kind "StorageV2"

# Output the storage account name
Write-Output "Storage Account Name: $storageAccountName"