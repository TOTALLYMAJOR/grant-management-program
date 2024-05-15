/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 05-15-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/

 @AuraEnabled(cacheable=true)
 public static List<Requirement__c> getChecklistItems(Id fundingRequestId) {
     return [
         SELECT Id, Name, IsCompleted__c, FundingRequest__c 
         FROM Requirement__c 
         WHERE FundingRequest__c = :fundingRequestId
         ORDER BY CreatedDate ASC
     ];
 }

/**
+ * @description       : Updates the IsCompleted__c field of a checklist item.
+ * @param itemId            Id of the checklist item to update.
+ * @param isCompleted        Boolean indicating whether the checklist item is completed or not.
+ * @return                The updated Requirement__c object.
+ */
 @AuraEnabled
 public static outfunds__Requirement__c     updateChecklistItem(Id itemId, Boolean isCompleted) {
     Requirement__c item = [SELECT Id, IsCompleted__c FROM Requirement__c WHERE Id = :itemId];
     item.IsCompleted__c = isCompleted;



 
  
          update item;
+     return item;
-+/**
-+ * @description       : Class for managing checklist items associated with a Funding Request.
-+ * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
-+ * @group             : 
-+ * @last modified on  : 04-19-2024
-+ * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
-+ */
 public with sharing class ChecklistController {
-+    /**
-+     * @description       : Retrieve all checklist items associated with a given Funding Request.
-+     * @param fundingRequestId    Id of the Funding Request the checklist items are associated with.
-+     * @return                List of Requirement__c objects with the checklist items.
-+     */
-     @AuraEnabled(cacheable=true)
-     public static List<Requirement__c> getChecklistItems(Id fundingRequestId) {
-         return [
-             SELECT Id, Name, IsCompleted__c, FundingRequest__c 
-             FROM Requirement__c 
-             WHERE FundingRequest__c = :fundingRequestId
-             ORDER BY CreatedDate ASC
-         ];
-     }
- 
-+    /**
-+     * @description       : Updates the IsCompleted__c field of a checklist item.
-+     * @param itemId            Id of the checklist item to update.
-+     * @param isCompleted        Boolean indicating whether the checklist item is completed or not.
-+     * @return                The updated Requirement__c object.
-+     */
-     @AuraEnabled
-     public static outfunds__Requirement__c     updateChecklistItem(Id itemId, Boolean isCompleted) {
-         Requirement__c item = [SELECT Id, IsCompleted__c FROM Requirement__c WHERE Id = :itemId];
-         item.IsCompleted__c = isCompleted;
-         update item;
-         return item;
-     }
  }
