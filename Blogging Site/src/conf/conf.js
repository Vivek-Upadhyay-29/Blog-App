const conf = {
    appwriteUrl : String(import.meta.env.VITE_APPWRITE_URL), //this should always be in string
    appwriteProjectId : String(import.meta.env.VITE_APPWRTE_PROJECT_ID),
    appwriteDatabaseId : String(import.meta.env.VITE_APPWRTE_DATABASE_ID),
    appwriteCollectiontId : String(import.meta.env.VITE_APPWRTE_COLLECTION_ID),
    appwriteBucketId : String(import.meta.env.VITE_APPWRTE_BUCKET_ID),
}
export default conf